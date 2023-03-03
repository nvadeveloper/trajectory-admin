import { toast } from "react-hot-toast";
import api from "../baseAPI";

export const attachTag = (id: string | number, tagId: string | number) => {
    return api({
        method: "put",
        url: `/content/${id}/tags/add`,
        data: {
            tags: [tagId],
        },
    }).then(() => {
        toast.success("Тег прикрепленн!");
    });
};
