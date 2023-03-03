import { createEvent, createStore } from "effector";
import { IMaterial } from "../models";

export const updateEdMaterialList = createEvent<IMaterial[]>();

export const $edMaterialListStore = createStore<IMaterial[]>([]).on(
    updateEdMaterialList,
    (_, data) => data
);
