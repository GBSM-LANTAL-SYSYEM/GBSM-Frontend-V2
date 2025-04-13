import { useNavigate } from "react-router-dom";
import { getTodayDate } from "@/utils";
import { Toastify } from "@/components/Toastify";
import { postWithToken } from "@/api/server";
import { RentalFormData } from "@/types";

const useSubmit = (formData: RentalFormData) => {
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!formData.rentalDate || formData.rentalDate < getTodayDate()) {
            Toastify({ message: "유효한 대여 희망일을 입력해주세요.", type: "error" });
            return;
        }

        const accessToken = localStorage.getItem("accessToken");

        try {
            await postWithToken(accessToken, "/lab", formData);

            Toastify({
                message: "실습실 대여 신청이 성공하였습니다! 곧 메인 페이지로 이동합니다.",
                type: "success",
            });

            setTimeout(() => navigate("/student"), 2000);
        } catch (error: any) {
            if (error.response?.status === 401) {
                Toastify({ message: "세션이 만료되었습니다. 로그아웃해주세요.", type: "info" });
            } else if (error.response?.status === 409) {
                Toastify({ message: "이미 해당 시간에 예약된 실습실이 있습니다.", type: "error" });
            }
        }
    };

    return handleSubmit;
};
export default useSubmit;