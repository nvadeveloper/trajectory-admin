import { createEvent, createStore } from "effector";
import { IEmployee } from "../models";

export const updateCurrentEmployeeList = createEvent<IEmployee[]>();

export const $currentEmployeeListStore = createStore<IEmployee[]>([]).on(
    updateCurrentEmployeeList,
    (_, data) => data
);
