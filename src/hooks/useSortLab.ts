import { useMemo, useState } from "react";
import { Lab } from "@/types";

const useSortLab = (rentalRequests: Lab[]) => {
    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

    const sortedRequests = useMemo(() => {
        return rentalRequests.sort((prevRequest, nextRequest) => {
            const prevTimestamp = new Date(prevRequest.rentalDate + " " + prevRequest.rentalStartTime).getTime();
            const nextTimestamp = new Date(nextRequest.rentalDate + " " + nextRequest.rentalStartTime).getTime();
            return sortOrder === "asc" ? prevTimestamp - nextTimestamp : nextTimestamp - prevTimestamp;
        });
    }, [rentalRequests, sortOrder]);

    return { sortedRequests, sortOrder, setSortOrder };
};

export default useSortLab;