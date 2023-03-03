import apiForm from "../formAPI";
// import toast from "react-hot-toast";

export const addRisk = (
    activeId: string,
    name: string,
    description: string
) => {
    return apiForm({
        method: "post",
        url: "/threats/add",
        data: {
            active: activeId,
            name: name,
            description: description,
            priority: 1,
        },
    });
};
