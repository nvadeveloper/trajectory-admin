import React, { useEffect, useState } from "react";
import { ReactComponent as LightningLogo } from "../../image/icon/Lightning.svg";
import { ReactComponent as PenIcon } from "../../image/icon/Pen.svg";
import { ReactComponent as SlashIcon } from "../../image/icon/Slash.svg";
import { ReactComponent as BasketIcon } from "../../image/icon/Basket.svg";
import { changePriority } from "../../api/requests/changePriority";
import DemoButton from "../buttons/DemoButton";
import useDebounce from "../../utils/hooks/useDebounce";
import { useStore } from "effector-react";
import { $threatStore, updateThreat } from "../../utils/effecor/threat";
import { useParams } from "react-router-dom";
import { IThreat } from "../../utils/models";

type Props = {
    item: IThreat;
};

const Threat: React.FC<Props> = ({ item }) => {
    const threat = useStore($threatStore);
    const { activeId } = useParams() as { activeId: string };
    const [inputValue, setInputValue] = useState<number>(item.priority);
    const [first, setFirst] = useState<boolean>(false);
    const debouncedValue = useDebounce<number>(inputValue, 500);

    useEffect(() => {
        if (first) {
            changePriority(activeId, item, inputValue);
        } else {
            setFirst(true);
        }
    }, [debouncedValue]);

    return (
        <li
            key={item.id}
            className={
                "relative flex items-center justify-between px-5 py-3 " +
                (threat === item
                    ? "cursor-normal text-textbrown"
                    : "cursor-pointer")
            }
            onClick={() => updateThreat(item)}
        >
            <div
                className={
                    "absolute top-0 left-0 h-full w-[5px] " +
                    (threat === item ? "bg-accent" : "bg-base")
                }
            />
            <div className="mr-5 flex items-center">
                <div
                    className={
                        "mr-5 rounded-full border " +
                        (threat === item ? "border-accent" : "border-base")
                    }
                >
                    <div className="flex h-[40px] w-[40px] items-center justify-center ">
                        <LightningLogo
                            className={
                                threat === item ? "fill-accent" : "fill-base"
                            }
                        />
                    </div>
                </div>

                <p>{item.name}</p>
            </div>
            <div className="flex items-center">
                {threat === item ? (
                    <div className="mr-[8px] flex justify-end space-x-[8px]">
                        <div>
                            <input
                                type="range"
                                min="1"
                                max="10"
                                step="1"
                                className="mr-2 h-2 w-[180px] cursor-pointer appearance-none rounded-lg bg-[#ECF8FD] hover:bg-[#FDF5EC]"
                                defaultValue={inputValue}
                                onChange={(e) => {
                                    setInputValue(Number(e.target.value));
                                }}
                            />
                        </div>
                        <div className="group flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border border-base hover:border-accent">
                            <PenIcon className="h-[14px] w-[14px] fill-base group-hover:fill-accent" />
                        </div>

                        <DemoButton>
                            <div className="group flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border border-base hover:border-accent">
                                <SlashIcon className="h-[14px] w-[20px] fill-base group-hover:fill-accent" />
                            </div>
                        </DemoButton>
                        <DemoButton>
                            <div className="group flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border border-base hover:border-accent">
                                <BasketIcon className="h-[16px] w-[16px] fill-base group-hover:fill-accent" />
                            </div>
                        </DemoButton>
                    </div>
                ) : (
                    <p className="mr-[15px]">Уровень риска</p>
                )}
                <div className="mr-5 rounded-full border border-base">
                    <div className="flex h-[40px] w-[40px] items-center justify-center">
                        <span>{inputValue}</span>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default Threat;
