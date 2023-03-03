import { IActive } from "../models";
import { createEvent, createStore } from "effector";

export const updateActiveList = createEvent<IActive[]>();

export const $activeListStore = createStore<IActive[]>([]).on(
    updateActiveList,
    (_, data) => data
);
