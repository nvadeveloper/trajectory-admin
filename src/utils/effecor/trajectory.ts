import { createEvent, createStore } from "effector";
import { ITrajectory } from "../models";

export const updateTrajectory = createEvent<ITrajectory>();

export const $trajectoryStore = createStore<ITrajectory | null>(null).on(
    updateTrajectory,
    (_, data) => data
);
