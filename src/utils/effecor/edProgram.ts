import { createEvent, createStore } from "effector";
import { IEdProgram } from "../models";

export const updateEdProgram = createEvent<IEdProgram>();

export const $edProgramStore = createStore<IEdProgram | null>(null).on(
    updateEdProgram,
    (_, data) => data
);
