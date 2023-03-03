import api from "../baseAPI";

export const searchEmployeesByEmail = (email: string) =>
    api({
        method: "get",
        url: `/trajectories/potential_users?email=${email}`,
    });
