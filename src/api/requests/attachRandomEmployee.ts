import api from "../baseAPI";

export const attachRandomEmployee = (id: string | number, email: string) => {
    return api({
        method: "post",
        url: `/trajectories/add_user_by_email`,
        data: {
            email: email,
            trajectories: Number(id),
        },
    });
};
