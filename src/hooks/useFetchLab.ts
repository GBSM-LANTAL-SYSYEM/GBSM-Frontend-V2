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
        } catch (error) {
            Toastify({message: "실습실 목록을 불러오는 중 문제가 발생했습니다.", type: "error"})
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