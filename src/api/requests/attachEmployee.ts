import api from "../baseAPI";

export const attachEmployee = (id: string | number, trajectoriesId: string) => {
    return api({
        method: "put",
        url: `/user/${id}/add_trajectories`,
        data: {
            trajectories: [Number(trajectoriesId)],
        },
    });
};
