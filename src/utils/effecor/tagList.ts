import { createEvent, createStore } from "effector";
import { ITag } from "../models";

export const updateTagList = createEvent<ITag[]>();

export const $tagListStore = createStore<ITag[]>([]).on(
    updateTagList,
    (_, data) => data
);
