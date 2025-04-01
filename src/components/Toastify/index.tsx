import { Flip, toast, ToastOptions, ToastPosition } from "react-toastify";
import { Success, Error, Info } from "@/assets";

interface ToastProps {
  type: "success" | "error" | "info";
  message: string;
  position?: ToastPosition; 
}

const defaultToastOptions: ToastOptions = {
  position: "top-right",
  autoClose: 2000,
  pauseOnHover: false,
  pauseOnFocusLoss: false,
  closeOnClick: false,
  closeButton: false,
  transition: Flip,
};

export const Toastify = ({ message, type, position }: ToastProps) => {
  const toastConfig = {
    ...defaultToastOptions,
    position: position || defaultToastOptions.position, 
  };

  switch (type) {
    case "success":
      toast.success(message, {
        ...toastConfig,
        icon: <img src={Success} alt="success" width={25} height={25} />,
      });
      return;
    case "error":
      toast.error(message, {
        ...toastConfig,
        icon: <img src={Error} alt="error" width={22} height={22} />,
      });
      return;
    case "info":
      toast.info(message, {
        ...toastConfig,
        icon: <img src={Info} alt="info" width={25} height={25} />,
      });
      return;
    default:
      toast(message, toastConfig);
  }
};