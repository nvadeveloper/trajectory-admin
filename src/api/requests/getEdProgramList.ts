import { updateEdProgramList } from "../../utils/effecor/edProgramList";
import { IEdProgram } from "../../utils/models";
import api from "../baseAPI";

export const getEdProgramList = (id: string | number) =>
    api({
        method: "get",
        url: `/actives/${id}/ed_programs`,
    }).then((res) => {
        res.data.sort((a: IEdProgram, b: IEdProgram) => (a.id > b.id ? 1 : -1));
        // console.log("updateEdProgramList ", res.data);
        updateEdProgramList(res.data);
    });
