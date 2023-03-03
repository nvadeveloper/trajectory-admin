import { createEvent, createStore } from "effector";
import { IMaterial } from "../models";

export const updateSelectedEdMaterial = createEvent<IMaterial | null>();

export const $selectedEdMaterialStore = createStore<IMaterial | null>(null).on(
    updateSelectedEdMaterial,
    (_, data) => data
);
