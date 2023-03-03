import apiForm from "../formAPI";
// import toast from "react-hot-toast";

export const addTeg = (name: string, description: string) => {
    return apiForm({
        method: "post",
        url: "/tags",
        data: {
            name: name,
            description: description,
        },
    });
};
