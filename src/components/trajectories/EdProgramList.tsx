import React from "react";
import { Link, useParams } from "react-router-dom";

import { ReactComponent as PenIcon } from "../../image/icon/Pen.svg";
import { ReactComponent as LargeTransparentLogoIcon } from "../../image/icon/LargeTransparentLogo.svg";

import { ReactComponent as SlashIcon } from "../../image/icon/Slash.svg";
import { ReactComponent as BasketIcon } from "../../image/icon/Basket.svg";
import { ReactComponent as LearningProgramsIcon } from "../../image/icon/LearningPrograms.svg";

import AddEdProgramButton from "../buttons/AddEdProgramButton";
import { deleteEdProgram } from "../../api/requests/deleteEdProgram";
import { changeEdProgramActivity } from "../../api/requests/changeEdProgramActivity";
import { updateMainEditElement } from "../../utils/effecor/mainEditElement";
import { useStore } from "effector-react";
import { $activeStore } from "../../utils/effecor/active";
import {
    $edProgramStore,
    updateEdProgram,
} from "../../utils/effecor/edProgram";
import {
    $edProgramListStore,
    updateEdProgramList,
} from "../../utils/effecor/edProgramList";

const EdProgramList: React.FC = () => {
    const { trajectoriesId } = useParams() as { trajectoriesId: string };
    const active = useStore($activeStore);
    const edProgram = useStore($edProgramStore);
    const edProgramList = useStore($edProgramListStore);

    const handleDeleteEdProgram = (id: number | string) => {
        deleteEdProgram(id).then(() => {
            const newData = edProgramList.filter(
                (edProgram) => edProgram.id !== id
            );
            updateEdProgramList(newData);
            updateMainEditElement(active);
        });
    };

    return (
        <>
            <div className="h-full border-l-2 border-base bg-white">
                <p className="p-6 font-bold">Учебные программы</p>

                {active ? (
                    <ul>
                        {edProgramList?.map((item) => (
                            <li
                                key={item.id}
                                className="group flex justify-between"
                            >
                                <div
                                    className={
                                        "relative flex w-full cursor-pointer items-center justify-between py-3 px-5 " +
                                        (edProgram === item
                                            ? "cursor-default text-textbrown"
                                            : "cursor-pointer")
                                    }
                                    onClick={() => {
                                        updateEdProgram(item);
                                        updateMainEditElement(item);
                                    }}
                                >
                                    {edProgram === item && (
                                        <div className="absolute -left-[2px] h-full w-[2px] bg-accent" />
                                    )}
                                    <div className="mr-5 flex items-center">
                                        <div
                                            className={
                                                "mr-5 rounded-full border " +
                                                (edProgram === item
                                                    ? "border-accent"
                                                    : "border-base")
                                            }
                                        >
                                            <div
                                                className={
                                                    "flex h-10 w-10 items-center justify-center"
                                                }
                                            >
                                                <LearningProgramsIcon
                                                    className={
                                                        edProgram === item
                                                            ? "fill-accent"
                                                            : "fill-base"
                                                    }
                                                />
                                            </div>
                                        </div>
                                        <p>{item.name}</p>
                                    </div>
                                    <div>
                                        <div className="block group-hover:hidden">
                                            <div
                                                className="ml-3 flex items-center"
                                                onClick={() => {
                                                    changeEdProgramActivity(
                                                        item
                                                    );
                                                    item.is_available =
                                                        !item.is_available;
                                                }}
                                            >
                                                <span
                                                    className={
                                                        "flex w-24 cursor-pointer justify-center rounded-full border py-1 text-textbrown " +
                                                        (item.is_available
                                                            ? "border-[#73E9C6]"
                                                            : "border-[#A84848]")
                                                    }
                                                >
                                                    {item.is_available
                                                        ? "Активна"
                                                        : "Неактивна"}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="hidden group-hover:flex">
                                            <div className="flex justify-end space-x-2">
                                                <Link
                                                    to={`/admin/trajectories/${trajectoriesId}/curriculum/${item.id}`}
                                                >
                                                    <div className="group/icon flex h-7 w-7 items-center justify-center rounded-full border border-base hover:border-accent">
                                                        <PenIcon className="h-[14px] w-[14px] fill-base group-hover/icon:fill-accent" />
                                                    </div>
                                                </Link>

                                                {/* <DemoButton> */}
                                                <div className="group/icon flex h-7 w-7 items-center justify-center rounded-full border border-base hover:border-accent">
                                                    <SlashIcon className="h-[14px] w-[20px] fill-base group-hover/icon:fill-accent" />
                                                </div>
                                                {/* </DemoButton> */}
                                                <div
                                                    className="group/icon flex h-7 w-7 items-center justify-center rounded-full border border-base hover:border-accent"
                                                    onClick={() =>
                                                        handleDeleteEdProgram(
                                                            item.id
                                                        )
                                                    }
                                                >
                                                    <BasketIcon className="h-[16px] w-[16px] fill-base group-hover/icon:fill-accent" />
                                                </div>
                                            </div>
                                            <div
                                                className="ml-3 flex items-center"
                                                onClick={() => {
                                                    changeEdProgramActivity(
                                                        item
                                                    );
                                                    item.is_available =
                                                        !item.is_available;
                                                }}
                                            >
                                                <span
                                                    className={
                                                        "flex w-24 cursor-pointer justify-center rounded-full border py-1 text-textbrown " +
                                                        (item.is_available
                                                            ? "border-[#73E9C6]"
                                                            : "border-[#A84848]")
                                                    }
                                                >
                                                    {item.is_available
                                                        ? "Активна"
                                                        : "Неактивна"}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}

                        <AddEdProgramButton />
                    </ul>
                ) : (
                    <div className="m-auto mt-10 flex justify-center">
                        <LargeTransparentLogoIcon />
                    </div>
                )}
            </div>
        </>
    );
};

export default EdProgramList;
