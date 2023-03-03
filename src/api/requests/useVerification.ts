import api from "../baseAPI";
import { Fetcher } from "swr";
import useSWRImmutable from "swr/immutable";

export const fetchVerification: Fetcher = (url: string) => {
    const token = localStorage.getItem("access_token");
    if (!token) window.location.replace("/login");

    api.post(url, { token: token }).catch((error) => {
        window.location.replace("/login");
        console.log(error);
    });
};

const useVerification = () => {
    const { error } = useSWRImmutable("/auth/jwt/verify", fetchVerification);

    return {
        isError: error,
    };
};

export default useVerification;
