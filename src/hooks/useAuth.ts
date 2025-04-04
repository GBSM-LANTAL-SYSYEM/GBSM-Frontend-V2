import { useState } from "react"; 
import { Toastify } from "@/components/Toastify";
import { postWithToken, fetcherWithToken } from "@/api/server";
import { useNavigate } from "react-router-dom";

interface LoginData {
  login: string;
  password: string;
}

interface SignupData {
  username: string;
  password: string;
}

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
  };
}

const useAuth = () => {
  const [loginData, setLoginData] = useState<LoginData>({ 
    login: "", 
    password: ""
  });

  const [signupData, setSignupData] = useState<SignupData>({
    username: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
  
    try {
      const response = await postWithToken(null, "/auth/login", loginData);
  
      if (!response.data.success) {
        throw { response: { status: 400 } };
      }

      if (!response.data.accessToken) {
        throw { response: { status: 400 } };
      }
  
      const accessToken = response.data.accessToken;
      localStorage.setItem("accessToken", accessToken);
  
      const verifyResponse = await fetcherWithToken(accessToken, "/auth/check_token");
      const userData: CheckTokenResponse = verifyResponse.data;
  
      const { username, role } = userData.body.userStatus;
  
      localStorage.setItem("username", username);
      localStorage.setItem("role", role);
  
      Toastify({ message: `${username}님, 환영합니다!`, type: "info" });
  
      setTimeout(() => {
        navigate(role === "admin" ? "/admin" : "/student");
      }, 2000);
  
    } catch (error: any) {
      if (error.response) {
        if (error.response.status === 400) {
          Toastify({ message: "아이디 또는 비밀번호가 올바르지 않습니다.", type: "error" });
        } else if (error.response.status === 401) {
          Toastify({ message: "세션이 만료되었습니다. 다시 로그인해주세요.", type: "info" });
          handleLogout(false);
        }
      }
    } finally {
      setIsLoading(false);
    }
};

const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsLoading(true);

  if (signupData.username.length < 4 || signupData.username.length > 15) {
    Toastify({ message: "아이디는 4~15자 사이여야 합니다.", type: "error" });
    setIsLoading(false);
    return;
  }

  if (signupData.password.length < 4 || signupData.password.length > 20) {
    Toastify({ message: "비밀번호는 4~20자 사이여야 합니다.", type: "error" });
    setIsLoading(false);
    return;
  }

  try {
    const response = await postWithToken(null, "/user/signup", signupData);

    if (response.status === 409) {
      throw new Error(response.data.message); 
    }

    Toastify({ message: "회원가입이 완료되었습니다! 자동으로 이동됩니다.", type: "success" });

    setTimeout(() => {
      navigate("/");
    }, 1000);

  } catch (error: any) {
    if (error.status === 400) {
      Toastify({ message: "아이디와 비밀번호를 입력해주세요.", type: "error" });
    }
    if (error.status === 409) {
      Toastify({ message: "이미 사용중인 아이디입니다.", type: "error" });
    }
  } finally {
    setIsLoading(false);
  }
};

const handleLogout = (showMessage: boolean = true) => {
  if (showMessage) {
    Toastify({ message: "로그아웃되었습니다.", type: "info" });
  }

  localStorage.removeItem("accessToken");
  localStorage.removeItem("username");
  localStorage.removeItem("role");

  navigate("/");
};

  return { loginData, setLoginData, handleSignIn, signupData, setSignupData, handleSignup, isLoading, handleLogout };
};

export default useAuth;