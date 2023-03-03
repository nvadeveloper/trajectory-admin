import apiForm from "../formAPI";

export default function addMaterial(formData: any, fileTypeValue: string) {
    return apiForm({
        method: "post",
        url: `/content/${fileTypeValue}`,
        data: formData,
    });
}
