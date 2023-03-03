import { createEvent, createStore } from "effector";
// import { Active, Trajectory } from "../../api/types";

export const updateMainEditElement = createEvent<any>();

export const $mainEditElementStore = createStore<any>(null).on(
    updateMainEditElement,
    (_, msg) => msg
);
