import api from "../baseAPI";
import { updateEdMaterialList } from "../../utils/effecor/edMaterialList";

export const getMaterials = () => {
    api({
        method: "get",
        url: "/content",
    }).then((res) => {
        updateEdMaterialList(res.data.results);
        console.log("getMaterials ", res.data.results);
    });
};
