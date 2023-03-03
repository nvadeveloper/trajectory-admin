import apiForm from "../formAPI";

export const changeUser = (data: any) => {
    return apiForm({
        method: "put",
        url: "/profile/",
        data: {
            surname: data.surname,
            first_name: data.firstname,
            last_name: data.lastname,
            position: data.position,
            email: data.email,
        },
    });
};
