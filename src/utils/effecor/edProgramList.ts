import { createEvent, createStore } from "effector";
import { IEdProgram } from "../models";

export const updateEdProgramList = createEvent<IEdProgram[]>();

export const $edProgramListStore = createStore<IEdProgram[]>([]).on(
    updateEdProgramList,
    (_, data) => data
);
