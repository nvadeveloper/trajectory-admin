import apiForm from "../formAPI";
import toast from "react-hot-toast";
import { updateEdProgramList } from "../../utils/effecor/edProgramList";
import { IActive, IEdProgram } from "../../utils/models";

export const addEdProgram = (
    name: string,
    description: string,
    active: IActive,
    edProgramList: IEdProgram[]
) =>
    apiForm({
        method: "post",
        url: "/ed_programs/add",
        data: {
            active: active.id,
            name: name,
            description: description,
        },
    }).then((res) => {
        toast.success("Учебная программа добавлена!");
        updateEdProgramList([...edProgramList, res.data]);
    });
