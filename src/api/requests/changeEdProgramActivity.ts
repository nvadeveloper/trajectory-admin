import { updateEdProgram } from "../../utils/effecor/edProgram";
import { IEdProgram } from "../../utils/models";
import api from "../baseAPI";
import { getEdProgramList } from "./getEdProgramList";

export const changeEdProgramActivity = (item: IEdProgram) => {
    api({
        method: "put",
        url: `/ed_programs/${item.id}/edit`,
        data: {
            name: item.name,
            is_available: !item.is_available,
        },
    }).then((res) => {
        updateEdProgram(res.data);
        getEdProgramList(item.active);
    });
};
