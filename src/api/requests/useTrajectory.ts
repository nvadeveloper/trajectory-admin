import api from "../baseAPI";
import useSWR, { Fetcher } from "swr";
import { updateMainEditElement } from "../../utils/effecor/mainEditElement";
import { updateTrajectory } from "../../utils/effecor/trajectory";
import { ITrajectory } from "../../utils/models";

export const fetchTrajectory: Fetcher<ITrajectory> = (url: string) => {
    return api.get(url).then((res) => {
        updateMainEditElement(res.data);
        updateTrajectory(res.data);
        return res.data;
    });
};

const useTrajectory = (id: string) => {
    const { data, error } = useSWR<ITrajectory, Error>(
        `/trajectories/${id}`,
        fetchTrajectory
    );

    return {
        data: data,
        isLoading: !error && !data,
        isError: error,
    };
};

export default useTrajectory;
