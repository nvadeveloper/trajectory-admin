import { createEvent, createStore } from "effector";
import { IEmployee } from "../models";
// import { Employee } from "../../api/types";

export const updateCurrentEmployee = createEvent<IEmployee>();

export const $currentEmployeeStore = createStore<IEmployee | null>(null).on(
    updateCurrentEmployee,
    (_, data) => data
);
