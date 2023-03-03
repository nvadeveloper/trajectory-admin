import api from "../baseAPI";

export const getTagList = (setTegList: any) => {
    api({
        method: "get",
        url: "/tags",
    }).then((res) => {
        console.log("getTagList ", res.data);
        setTegList(res.data);
    });
};
