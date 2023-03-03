import React, { useEffect } from "react";
import { ReactComponent as PenIcon } from "../../../image/icon/Pen.svg";
import { ReactComponent as SlashIcon } from "../../../image/icon/Slash.svg";
import { ReactComponent as BasketIcon } from "../../../image/icon/Basket.svg";
import { ReactComponent as AddWebMaterialIcon } from "../../../image/icon/AddWebMaterial.svg";

import { useParams } from "react-router-dom";
import AddFileEdProgramButton from "../../../components/buttons/AddFileEdProgramButton";
import { getProgramsContent } from "../../../api/requests/getProgramsContent";
import { deleteProgramContent } from "../../../api/requests/deleteProgramContent";
import { toast } from "react-hot-toast";
import { useStore } from "effector-react";
import {
    $curriculumContentsStore,
    updateCurriculumContent,
} from "../../../utils/effecor/curriculumContent";
import EditСurriculum from "../../../components/submenu/EditСurriculum";
import { ICurriculum } from "../../../utils/models";

const Curriculum: React.FC = () => {
    const { curriculumId } = useParams() as { curriculumId: string };
    const curriculumContent = useStore($curriculumContentsStore);

    const handleDeleteProgramContent = (item: ICurriculum) => {
        deleteProgramContent(item.content.id).then(() => {
            updateCurriculumContent(
                curriculumContent.filter((i) => i.id !== item.content.id)
            );
            toast.success("Успешно удалено");
        });
    };

    useEffect(() => {
        getProgramsContent(curriculumId);
    }, [curriculumId]);

    return (
        <div className="flex">
            <EditСurriculum />

            <div className="h-screen overflow-auto">
                <main className="px-[25px] pt-[25px] xl:px-[55px] xl:pt-[30px]">
                    <p className="text-xl">Cостав учебной программы</p>
                    <div className="flex flex-col pt-[25px] xl:pt-[30px]">
                        <div className="rounded-l-xl border-l-2 border-base bg-white p-[25px] md:w-[1000px] xl:w-[1295px]">
                            <p className="mb-4 flex font-bold text-base">
                                Стартовая ветка
                            </p>
                            <ul>
                                {curriculumContent.map((item) => (
                                    <li
                                        key={item.id}
                                        className="flex justify-between p-[20px]"
                                    >
                                        <div className="flex">
                                            <div className="mr-[25px]">
                                                <div className="flex h-[70px] w-[70px] items-center justify-center rounded-full border border-base">
                                                    <AddWebMaterialIcon />
                                                </div>
                                            </div>
                                            <div className="flex flex-col">
                                                <p className="text-md mb-[10px] font-bold">
                                                    {item.content.name}
                                                </p>
                                                <p>
                                                    {item.content.description}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col justify-between text-center text-sm">
                                            <div className="flex justify-end space-x-2">
                                                <div className="group flex h-7 w-7 items-center justify-center rounded-full border border-base hover:border-accent">
                                                    <PenIcon className="h-[14px] w-[14px] fill-base group-hover:fill-accent" />
                                                </div>

                                                <div className="group flex h-7 w-7 items-center justify-center rounded-full border border-base hover:border-accent">
                                                    <SlashIcon className="h-[14px] w-[20px] fill-base group-hover:fill-accent" />
                                                </div>

                                                <div
                                                    onClick={() =>
                                                        handleDeleteProgramContent(
                                                            item
                                                        )
                                                    }
                                                    className="group flex h-7 w-7 items-center justify-center rounded-full border border-base hover:border-accent"
                                                >
                                                    <BasketIcon className="w-[16px] fill-base group-hover:fill-accent" />
                                                </div>
                                            </div>
                                            <div className="w-[150px]">
                                                <p className="text-end text-[10px] text-blue">
                                                    Создано: 20.01.2023
                                                </p>
                                                <p className="text-end text-[10px] text-blue">
                                                    Обнавлено: 28.02.2023
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>

                            <AddFileEdProgramButton />
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Curriculum;
