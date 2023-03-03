import { createEvent, createStore } from "effector";
import { ITag } from "../models";

export const updateTag = createEvent<ITag>();

export const $tagStore = createStore<ITag | null>(null).on(
    updateTag,
    (_, data) => data
);
