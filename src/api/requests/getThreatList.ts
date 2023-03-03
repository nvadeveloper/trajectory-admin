import api from "../baseAPI";
import { updateThreatList } from "../../utils/effecor/threatList";
import { IActive } from "../../utils/models";

export const getThreatList = (id: string) => {
    api({
        method: "get",
        url: `/actives/${id}/threats`,
    }).then((res) => {
        updateThreatList(
            res.data.sort((a: IActive, b: IActive) =>
                a.priority > b.priority ? -1 : 1
            )
        );
    });
};
