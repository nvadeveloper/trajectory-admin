import { toast } from "react-hot-toast";
import api from "../baseAPI";

export const deleteEdProgram = (id: string | number) => api({
        method: "DELETE",
        url: `/ed_programs/${id}/delete`,
    }).then(() => {
        toast.success("Учебная программа удалена!");
    });

