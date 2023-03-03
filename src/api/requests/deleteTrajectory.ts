import api from "../baseAPI";

export const deleteTrajectory = (id: string | number) => {
    return api({
        method: "DELETE",
        url: `/trajectories/${id}/delete`,
    });
};
