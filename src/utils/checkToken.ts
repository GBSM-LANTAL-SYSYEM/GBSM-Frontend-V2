import { Toastify } from "@/components/Toastify";

export const checkToken = (navigate: (path: string) => void) => {
  const token = localStorage.getItem("accessToken");
  const currentPath = window.location.pathname;

  if (["/", "/signup"].includes(currentPath)) {
    return true;
  }

   if (!token) {
    Toastify({ message: "세션이 만료되었습니다. 다시 로그인해주세요.", type: "info" });
    navigate("/");
    return false;
  }

  return true;
};