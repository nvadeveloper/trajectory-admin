import { createEvent, createStore } from "effector";
import { IThreat } from "../models";

export const updateThreat = createEvent<IThreat>();

export const $threatStore = createStore<IThreat | null>(null).on(
    updateThreat,
    (_, data) => data
);
