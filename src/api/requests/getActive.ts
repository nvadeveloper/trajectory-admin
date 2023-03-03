import api from "../baseAPI";
import { updateActive } from "../../utils/effecor/active";

export const getActive = (id: string) => {
    api({
        method: "get",
        url: `/actives/${id}`,
    }).then((res) => {
        updateActive(res.data);
        // console.log("getActive ", res.data);
    });
};
