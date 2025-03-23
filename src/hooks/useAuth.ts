import { useState } from "react"; 
import { Toastify } from "@/components/Toastify";
import { postWithToken, fetcherWithToken } from "@/api/axios";
import { useNavigate } from "react-router-dom";

interface LoginData {
  login: string;
  password: string;
};

interface AuthResponse {
  success: boolean;
  accessToken?: string;
  refreshToken?: string;
};

interface CheckTokenResponse {
  success: boolean;
  body: {
    userId: {
      id: number;
      type: "refresh" | "access";
    };
    userStatus: {
      id: number;
      username: string;
      role: "admin" | "user";
    };
    token: string;
  };
}

const useAuth = () => {
  const [formData, setFormData] = useState<LoginData>({ 
    login: "", 
    password: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();


  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
  
    try {
      const response = await postWithToken(null, "/auth/login", formData);
  
      if (!response.data.success || !response.data.accessToken) {
        throw new Error("아이디 또는 비밀번호가 올바르지 않습니다.");
      }
  
      const accessToken = response.data.accessToken;
      localStorage.setItem("accessToken", accessToken);
  
      const verifyResponse = await fetcherWithToken(accessToken, "/auth/check_token");
      const userData: CheckTokenResponse = verifyResponse.data;
  
      if (!userData.success) {
        throw new Error("로그인 세션을 확인할 수 없습니다. 다시 시도해주세요.");
      }
  
      const { username, role } = userData.body.userStatus;
  
      localStorage.setItem("username", username);
      localStorage.setItem("role", role);
  
      Toastify({ message: `${username}님, 환영합니다!`, type: "info" });
  
      setTimeout(() => {
        if (role === "admin") {
          navigate("/admin");
        } else {
          navigate("/student");
        }
      }, 1000);
  
    } catch (error: any) {
      let errorMessage = "";
  
      if (error.response) {
        switch (error.response.status) {
          case 400:
            errorMessage = "아이디 또는 비밀번호가 올바르지 않습니다.";
            break;
          case 401:
            errorMessage = "인증이 만료되었습니다. 다시 로그인해주세요.";
            break;
          case 403:
            errorMessage = "접근 권한이 없습니다.";
            break;
          case 404:
            errorMessage = "서버를 찾을 수 없습니다. 관리자에게 문의하세요.";
            break;
          case 500:
            errorMessage = "서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.";
            break;
        }
      }
  
      Toastify({ message: errorMessage, type: "error" });
  
    } finally {
      setIsLoading(false);
    }
  };

  return { formData, setFormData, handleSignIn, isLoading };
};

export default useAuth;