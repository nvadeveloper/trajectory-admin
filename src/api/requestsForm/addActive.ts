import apiForm from "../formAPI";

export const addActive = (
    trajectoriesId: string,
    name: string,
    description: string
) =>
    apiForm({
        method: "post",
        url: "/actives/add",
        data: {
            trajectory: trajectoriesId,
            name: name,
            description: description,
        },
    });
