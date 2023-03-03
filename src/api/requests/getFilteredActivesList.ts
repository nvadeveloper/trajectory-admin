import { IActive } from "../../utils/models";

export const getFilteredActivesList = (array: IActive[], type: string) => {
    if (array === null) return array;

    if (type === "-raiting")
        return array.sort((a, b) => (a.priority > b.priority ? -1 : 1));

    if (type === "raiting")
        return array
            .sort((a, b) => (a.priority > b.priority ? -1 : 1))
            .reverse();

    if (type === "alphabet")
        return array.sort((a, b) => a.name.localeCompare(b.name));

    if (type === "-alphabet")
        return array.sort((a, b) => a.name.localeCompare(b.name)).reverse();
};
