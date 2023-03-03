import api from "../baseAPI";

export const getEmployeesList = () =>
    api({
        method: "get",
        url: `/trajectories/potential_users`,
    });
