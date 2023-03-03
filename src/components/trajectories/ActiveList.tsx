import React, { useMemo, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getEdProgramList } from "../../api/requests/getEdProgramList";
import { deleteActive } from "../../api/requests/deleteActive";

import { ReactComponent as ShieldIcon } from "../../image/icon/Shield.svg";
import { ReactComponent as ArrowDownIcon } from "../../image/icon/ArrowDown.svg";
import { ReactComponent as PenIcon } from "../../image/icon/Pen.svg";
import { ReactComponent as SlashIcon } from "../../image/icon/Slash.svg";
import { ReactComponent as BasketIcon } from "../../image/icon/Basket.svg";

import AddActiveButton from "../buttons/AddActiveButton";
import DemoButton from "../buttons/DemoButton";
import { getActivesList } from "../../api/requests/getActivesList";
import { getFilteredActivesList } from "../../api/requests/getFilteredActivesList";
import { updateMainEditElement } from "../../utils/effecor/mainEditElement";
import { $trajectoryStore } from "../../utils/effecor/trajectory";
import { $activeStore, updateActive } from "../../utils/effecor/active";
import { useStore } from "effector-react";
import { updateEdProgramList } from "../../utils/effecor/edProgramList";
import {
    $activeListStore,
    updateActiveList,
} from "../../utils/effecor/activeList";

const FILTERS = [
    {
        id: 1,
        title: "По рейтингу 10-1",
        type: "-raiting",
    },
    {
        id: 2,
        title: "По рейтингу 1-10",
        type: "raiting",
    },
    {
        id: 3,
        title: "По названию A-Z",
        type: "alphabet",
    },
    {
        id: 4,
        title: "По названию Z-A",
        type: "-alphabet",
    },
];

const ActiveList: React.FC = () => {
    const { trajectoriesId } = useParams() as { trajectoriesId: string };
    const [selectedFilter, setSelectedFilter] = useState({
        id: 1,
        title: "По рейтингу 10-1",
        type: "-raiting",
    });

    const active = useStore($activeStore);
    const trajectory = useStore($trajectoryStore);
    const activesList = useStore($activeListStore);
    const [showActivesFilter, setShowActivesFilter] = useState(false);

    const handleDeleteActive = (id: number | string) => {
        deleteActive(id).then(() => {
            updateActive(null);
            updateEdProgramList([]);
            updateMainEditElement(trajectory);

            updateActiveList(activesList.filter((active) => active.id !== id));
        });
    };

    useEffect(() => {
        getActivesList(trajectoriesId);
        updateActive(null);
    }, []);

    const filteredActivesList = useMemo(
        () => getFilteredActivesList(activesList, selectedFilter.type),
        [activesList, selectedFilter]
    );

    return (
        <>
            {activesList && (
                <div className="h-full bg-white">
                    <div className="flex items-center justify-between p-5 pt-4">
                        <p className="font-bold">Активы</p>
                        <div className="relative">
                            <div
                                className="flex w-[220px] cursor-pointer items-center justify-between rounded-lg bg-[#F7FCFF] p-2 hover:bg-[#EAF7FF]"
                                onClick={() => {
                                    setShowActivesFilter(!showActivesFilter);
                                }}
                            >
                                <span className="pr-2 text-sm">
                                    {selectedFilter.title}
                                </span>

                                <ArrowDownIcon className="stroke-base hover:stroke-[#4dabe1]" />
                            </div>
                            {showActivesFilter && (
                                <ul
                                    className="absolute top-10 z-10 w-full rounded-lg bg-white p-2 shadow-[0_0_15px_0_rgba(115,189,233,0.2)]"
                                    onMouseLeave={() =>
                                        setShowActivesFilter(false)
                                    }
                                >
                                    {FILTERS.map((item) => (
                                        <li
                                            key={item.id}
                                            className="cursor-pointer text-sm hover:text-gray-500"
                                            onClick={() => {
                                                setSelectedFilter(item);
                                                setShowActivesFilter(false);
                                            }}
                                        >
                                            {item.title}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>

                    <ul>
                        {filteredActivesList !== undefined &&
                            filteredActivesList.map((item) => (
                                <li
                                    key={item.id}
                                    className={
                                        "group relative flex items-center justify-between px-5 py-3 " +
                                        (active === item
                                            ? "cursor-normal text-accenttext"
                                            : "cursor-pointer")
                                    }
                                    onClick={() => {
                                        updateActive(item);
                                        updateMainEditElement(item);
                                        getEdProgramList(item.id);
                                    }}
                                >
                                    {active === item && (
                                        <div className="absolute -left-[2px] h-full w-[2px] bg-accent" />
                                    )}
                                    <div className="mr-5 flex items-center">
                                        <div
                                            className={
                                                "mr-5 rounded-full border " +
                                                (active === item
                                                    ? "border-accent"
                                                    : "border-base")
                                            }
                                        >
                                            <div className="flex h-[40px] w-[40px] items-center justify-center ">
                                                <ShieldIcon
                                                    className={
                                                        active === item
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
                                            <div className="flex items-center justify-between">
                                                <p>Индекс приоритета</p>
                                                <div className="ml-[5px]">
                                                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-base text-base">
                                                        <span>
                                                            {item.priority}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hidden group-hover:block">
                                            <div className="flex justify-end space-x-2">
                                                <Link
                                                    to={`/admin/trajectories/${trajectoriesId}/active/${item.id}`}
                                                >
                                                    <div className="group/icon flex h-7 w-7 items-center justify-center rounded-full border border-base hover:border-accent">
                                                        <PenIcon className="h-[14px] w-[14px] fill-base group-hover/icon:fill-accent" />
                                                    </div>
                                                </Link>

                                                <DemoButton>
                                                    <div className="group/icon flex h-7 w-7 items-center justify-center rounded-full border border-base hover:border-accent">
                                                        <SlashIcon className="h-[14px] w-[20px] fill-base group-hover/icon:fill-accent" />
                                                    </div>
                                                </DemoButton>
                                                <div
                                                    onClick={() =>
                                                        handleDeleteActive(
                                                            item.id
                                                        )
                                                    }
                                                    className="group/icon flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border border-base hover:border-accent"
                                                >
                                                    <BasketIcon className="h-[16px] w-[16px] fill-base group-hover/icon:fill-accent" />
                                                </div>
                                                <DemoButton>
                                                    <div className="group/icon flex h-7 w-7 items-center justify-center rounded-full border border-base hover:border-accent">
                                                        <ArrowDownIcon className="h-[8px] w-[16px] stroke-base group-hover/icon:stroke-accent" />
                                                    </div>
                                                </DemoButton>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}

                        <AddActiveButton />
                    </ul>
                </div>
            )}
        </>
    );
};

export default ActiveList;
