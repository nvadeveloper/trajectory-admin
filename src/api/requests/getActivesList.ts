import { updateActiveList } from "../../utils/effecor/activeList";
import { IActive } from "../../utils/models";
import api from "../baseAPI";

export const getActivesList = (id: string) =>
    api({
        method: "get",
        url: `/trajectories/${id}/actives`,
    }).then((res) => {
        res.data.sort((a: IActive, b: IActive) =>
            a.priority > b.priority ? -1 : 1
        );
        updateActiveList(res.data);
    });
