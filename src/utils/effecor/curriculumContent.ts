import { createEvent, createStore } from "effector";
import { ICurriculum } from "../models";

export const updateCurriculumContent = createEvent<ICurriculum[]>();

export const $curriculumContentsStore = createStore<ICurriculum[]>([]).on(
    updateCurriculumContent,
    (_, data) => data
);
