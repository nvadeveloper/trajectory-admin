import { createEvent, createStore } from "effector";
import { IThreat } from "../models";

export const updateThreatList = createEvent<IThreat[]>();

export const $threatListStore = createStore<IThreat[]>([]).on(
    updateThreatList,
    (_, data) => data
);
