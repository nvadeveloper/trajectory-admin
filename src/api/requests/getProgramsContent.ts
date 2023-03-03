import api from "../baseAPI";
import { updateCurriculumContent } from "../../utils/effecor/curriculumContent";

export const getProgramsContent = (id: number | string) => {
    return api({
        method: "get",
        url: `/ed_programs/${id}/content`,
    }).then((res) => {
        // console.log("updateCurriculumContent ", res.data.bounds);
        updateCurriculumContent(res.data.bounds);
    });
};
