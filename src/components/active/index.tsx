import React from "react";
import { useStore } from "effector-react";
import AddThreatButton from "../buttons/AddThreatButton";
import { $threatListStore } from "../../utils/effecor/threatList";
// import BorderTopLeft from "../utils/BorderTopLeft";
import Events from "./Events";
import { $activeStore } from "../../utils/effecor/active";
import Threat from "./Threat";

const Active: React.FC = () => {
    const active = useStore($activeStore);
    const threatList = useStore($threatListStore);

    return (
        <div className="thin-scrollbar h-screen grow overflow-auto">
            <main className="px-[25px] pt-[25px] xl:px-[55px] xl:pt-[30px]">
                <p className="text-xl">Cостав актива</p>

                <section className="flex space-x-[25px] pt-[25px] xl:pt-[30px]">
                    <div className="flex w-[600px] flex-col">
                        <div>
                            <div className="flex justify-end rounded-tl-xl bg-blue">
                                <div className="w-[calc(100%-5px)] rounded-tl-xl bg-white p-[20px]">
                                    <p className="font-bold">
                                        Индекс приоритета актива:{" "}
                                        <span className="text-3xl text-blue">
                                            {active ? active?.priority : 0}
                                        </span>
                                    </p>
                                </div>
                            </div>

                            <div className="flex w-full flex-col">
                                <div className="relative bg-white">
                                    <div className="absolute top-0 left-0 h-full w-[5px] bg-base group-hover:bg-accent" />

                                    <ul>
                                        {active &&
                                            threatList.map((item) => (
                                                <Threat item={item} />
                                            ))}

                                        <AddThreatButton />
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="relative mt-[25px] h-full bg-white">
                            <div className="absolute top-0 left-0 h-full w-[5px] bg-base" />
                            <p className="p-[20px] pb-[10px] font-bold">
                                График
                            </p>
                        </div>
                    </div>

                    <Events />
                </section>
            </main>
        </div>
    );
};

export default Active;
