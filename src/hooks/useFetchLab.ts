import { useState, useEffect } from "react";
import { GBSM_SERVER } from "@/api/server"
import { Toastify } from "@/components/Toastify";
import useAuth from "./useAuth";

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
    const { handleLogout } = useAuth()

    const fetchAvailableLabs = async () => {
        setIsLoading(true);
        try {
            const response = await GBSM_SERVER.get("/lab");
            setRentalRequests(response.data.body);
        } catch (error: any) {
            if(error.status === 401) {
                Toastify({message: "세션이 만료되었습니다. 로그인해주세요.", type: "info"})
                handleLogout(false)
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