import { IUser } from "../../utils/models";
import api from "../baseAPI";
import useSWR, { Fetcher } from "swr";

export const fetchUser: Fetcher<IUser> = (url: string) => {
    return api.get(url).then((res) => res.data);
};

const useUser = () => {
    const { data, error } = useSWR<IUser, Error>("/profile/", fetchUser);

    return {
        user: data,
        isLoading: !error && !data,
        isError: error,
    };
};

export default useUser;
