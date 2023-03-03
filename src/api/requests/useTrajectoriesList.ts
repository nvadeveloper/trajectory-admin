import { ITrajectory } from "../../utils/models";
import api from "../baseAPI";
import useSWR, { Fetcher } from "swr";

export const fetchTrajectoriesList: Fetcher<ITrajectory[]> = (url: string) => {
    return api
        .get(url)
        .then((res) =>
            res.data.sort((a: ITrajectory, b: ITrajectory) =>
                a.id > b.id ? 1 : -1
            )
        );
};

const useTrajectoriesList = () => {
    const { data, error } = useSWR<ITrajectory[], Error>(
        "/trajectories",
        fetchTrajectoriesList
    );

    return {
        trajectoriesList: data,
        isLoading: !error && !data,
        isError: error,
    };
};

export default useTrajectoriesList;
