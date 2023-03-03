import api from "../baseAPI";
import { updateCurrentEmployeeList } from "../../utils/effecor/currentEmployeeList";

export const getCurrentEmployees = (id: string) => {
    api({
        method: "get",
        url: `/trajectories/${id}/users`,
    }).then((res) => updateCurrentEmployeeList(res.data));
};
