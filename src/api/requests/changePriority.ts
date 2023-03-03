import { IThreat } from "../../utils/models";
import api from "../baseAPI";
import { getActive } from "./getActive";
import { getThreatList } from "./getThreatList";

export const changePriority = (
    id: string,
    item: IThreat,
    inputValue: number
) => {
    api({
        method: "put",
        url: `/threats/${item.id}`,
        data: {
            name: item.name,
            priority: inputValue,
            description: item.description,
        },
    }).then(() => {
        getActive(id);
        getThreatList(id);
    });
};
