import { IEmployee } from "../../utils/models";
import api from "../baseAPI";
import useSWR, { Fetcher } from "swr";

export const fetchAllEmployees: Fetcher<IEmployee[]> = (url: string) => {
    return api.get(url).then((res) => res.data);
};

const useAllEmployees = () => {
    const { data, error } = useSWR<IEmployee[], Error>(
        `/trajectories/potential_users`,
        fetchAllEmployees
    );

    return {
        allEmployees: data,
        isLoading: !error && !data,
        isError: error,
    };
};

export default useAllEmployees;
