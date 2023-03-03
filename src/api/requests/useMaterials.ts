import { IMaterial } from "../../utils/models";
import api from "../baseAPI";
import useSWR, { Fetcher } from "swr";
// import { Trajectory } from "../types";

export const fetchMaterials: Fetcher<IMaterial[]> = (url: string) => {
    return api.get(url).then((res) => res.data);
};

const useMaterials = () => {
    const { data, error } = useSWR<IMaterial[], Error>(
        "/content",
        fetchMaterials
    );

    return {
        materials: data,
        isLoading: !error && !data,
        isError: error,
    };
};

export default useMaterials;
