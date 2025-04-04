import { useState } from "react";
import { getTodayDate } from "@/utils";

const useRentalForm = () => {
    const [rentalDate, setRentalDate] = useState(getTodayDate());
    const [rentalUser, setRentalUser] = useState("");
    const [rentalUsers, setRentalUsers] = useState("");
    const [rentalPurpose, setRentalPurpose] = useState("");
    const [rentalStartTime, setRentalStartTime] = useState("");
    const [labName, setLabName] = useState("");

    return {
        rentalDate, setRentalDate,
        rentalUser, setRentalUser,
        rentalUsers, setRentalUsers,
        rentalPurpose, setRentalPurpose,
        rentalStartTime, setRentalStartTime,
        labName, setLabName
    };
};

export default useRentalForm;