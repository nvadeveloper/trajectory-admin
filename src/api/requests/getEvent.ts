import api from "../baseAPI";
// import { updateActive } from "../../utils/effecor/active";

export const getEvent = () => {
    return api({
        method: "get",
        url: "/logs/list",
    });
};

// api.request({
//     method: "get",
//     url: "/logs/list",
// }).then((res) => {
//     setEvents(res.data.results);
// });
