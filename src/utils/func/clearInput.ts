export const clearInput = (id: string) => {
    const getValue = document.getElementById(id) as HTMLTextAreaElement;
    if (getValue.value != "") {
        getValue.value = "";
    }
};
