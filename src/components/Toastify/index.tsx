import { Flip, toast, ToastOptions } from "react-toastify"
import { Success, Error, Info } from "@/assets";

interface ToastProps {
    type: "success" | "error" | "info"
    message: string;
}

const toastOptions: ToastOptions = {
    position: "top-right",
    autoClose: 2000,
    pauseOnHover: false,
    pauseOnFocusLoss: false,
    closeOnClick: false,
    closeButton: false,
    transition: Flip,
}

export const Toastify = ({message, type}: ToastProps) => {
    switch (type) {
      case "success":
        toast.success(message, {
            ...toastOptions,
            icon: <img src={Success} alt="success" width={25} height={25}/>,
          });
          return;
      case "error":
        toast.error(message, {
            ...toastOptions,
            icon: <img src={Error} alt="error" width={22} height={22}/>,
          });
          return;
      case "info":
        toast.info(message, {
            ...toastOptions,
            icon: <img src={Info} alt="info" width={25} height={25}/>,
          });
          return;
      default:
        toast(message, toastOptions);
    }
  };