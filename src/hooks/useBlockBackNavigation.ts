import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useBlockBackNavigation = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.history.pushState(null, "", window.location.href);

        const handlePopState = () => navigate(0);

        window.addEventListener("popstate", handlePopState);

        return () => {
            window.removeEventListener("popstate", handlePopState);
        };
    }, [navigate]);
};

export default useBlockBackNavigation;