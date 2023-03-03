import api from "../baseAPI";

export const deleteProgramContent = (id: string | number) =>
    api({
        method: "delete",
        url: `/ed_program_content/${id}/delete`,
    });
