import { IEmployee } from "../../utils/models";
import api from "../baseAPI";
import useSWR, { Fetcher } from "swr";

export const fetchCurrentEmployees: Fetcher<IEmployee[]> = (url: string) => {
    return api.get(url).then((res) => res.data);
};

const useCurrentEmployees = (id: string) => {
    const { data, error } = useSWR<IEmployee[], Error>(
        `/trajectories/${id}/users`,
        fetchCurrentEmployees
    );

    return {
        currentEmployees: data,
        isLoading: !error && !data,
        isError: error,
    };
};

export default useCurrentEmployees;
