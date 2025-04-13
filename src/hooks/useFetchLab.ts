import { useState, useEffect } from "react";
import { GBSM_SERVER } from "@/api/server"
import { Toastify } from "@/components/Toastify";

interface Lab {
    userId: number;
    rentalDate: string;
    rentalStartTime: string;
    rentalUser: string;
    rentalUsers: string;
    rentalPurpose: string;
    deletionRental: boolean;
    labName: string;
}

const useFetchLab = () => {
    const [rentalRequests, setRentalRequests] = useState<Lab[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchAvailableLabs = async () => {
        setIsLoading(true);
        try {
            const response = await GBSM_SERVER.get("/lab");
            setRentalRequests(response.data.body);
            console.log(response.data) // 승인 됐는지 확인해봐야함
        } catch (error: any) {
            if(error.status === 401) {
                Toastify({message: "세션이 만료되었습니다. 로그아웃해주세요.", type: "info"})
            }
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchAvailableLabs();
    }, []);

    return { rentalRequests, isLoading, fetchAvailableLabs };
};

export default useFetchLab;