import apiForm from "../formAPI";
// import toast from "react-hot-toast";

export const addTrajectory = (name: string, description: string) => {
    return apiForm({
        method: "post",
        url: "/trajectories/add",
        data: {
            name: name,
            description: description,
        },
    });
};
