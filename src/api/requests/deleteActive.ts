import { toast } from "react-hot-toast";
import api from "../baseAPI";

export const deleteActive = (id: string | number) =>
    api({
        method: "DELETE",
        url: `/actives/${id}/delete`,
    }).then(() => toast.success("Актив удален!"));
