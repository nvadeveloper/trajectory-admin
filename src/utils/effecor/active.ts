import { IActive } from "../models";
import { createEvent, createStore } from "effector";

export const updateActive = createEvent<IActive | null>();

export const $activeStore = createStore<IActive | null>(null).on(
    updateActive,
    (_, data) => data
);
