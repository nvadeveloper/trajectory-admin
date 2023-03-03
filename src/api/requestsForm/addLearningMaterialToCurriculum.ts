import apiForm from "../formAPI";

export default function addLearningMaterialToCurriculum(
    contentId: number | string,
    edProgramId: number | string
) {
    return apiForm({
        method: "post",
        url: "/ed_programs/add_content",
        data: {
            ed_program: edProgramId,
            content: contentId,
        },
    });
}
