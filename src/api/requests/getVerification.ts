// import { AxiosError } from "axios";
// import api from "../baseAPI";
// import { Fetcher } from "swr";
// import useSWRImmutable from "swr/immutable";

// export const fetchVerification: Fetcher = (url: string) => {
//     const token = localStorage.getItem("access_token");
//     if (!token || token !== null) window.location.replace("/login");

//     api.post(url, { token: token }).catch((error: AxiosError) => {
//         console.log("Verification erorr:", error);
//         window.location.replace("/login");
//     });
// };

// const useVerification = () => {
//     const { error } = useSWRImmutable("/auth/jwt/verify", fetchVerification);

//     return {
//         isError: error,
//     };
// };

// export default useVerification;

import api from "../baseAPI";

export const getVerification = () => {
    const token = localStorage.getItem("access_token");
    if (!token) window.location.replace("/login");

    api({
        method: "post",
        url: "/auth/jwt/verify",
        data: {
            token,
        },
    }).catch(() => {
        // console.log(error);
        window.location.replace("/login");
    });
};
