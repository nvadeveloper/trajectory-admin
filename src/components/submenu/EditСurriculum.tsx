import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ReactComponent as LearningPrograms } from "../../image/icon/LearningPrograms.svg";
import { ReactComponent as LargeTransparentLogoIcon } from "../../image/icon/LargeTransparentLogo.svg";
import { ReactComponent as PenIcon } from "../../image/icon/Pen.svg";
import { ReactComponent as SlashIcon } from "../../image/icon/Slash.svg";
import { ReactComponent as BasketIcon } from "../../image/icon/Basket.svg";
import { ReactComponent as Cross } from "../../image/icon/Cross.svg";
import DemoButton from "../buttons/DemoButton";
import { deleteEdProgram } from "../../api/requests/deleteEdProgram";

const EditСurriculum: React.FC = () => {
    const { curriculumId } = useParams() as { curriculumId: string };
    const navigate = useNavigate();

    return (
        <div className="relative flex h-screen w-[236px] flex-col justify-between bg-white lg:w-[250px] xl:w-[295px]">
            <div
                className="group absolute flex h-[40px] w-[40px] cursor-pointer items-center justify-center bg-white"
                onClick={() => navigate(-1)}
            >
                <Cross className="h-[16px] w-[16px] fill-base group-hover:fill-accent" />
            </div>

            <div>
                <p className="pl-4 pt-9 text-[#B7DAEF]">Учебная программа</p>
                <div className="mt-16 flex items-center justify-between px-4">
                    <p className="mr-2">Тестовая учебная программа</p>
                    <div>
                        <LearningPrograms className="fill-base" />
                    </div>
                </div>
            </div>

            <div className="absolute top-64 flex w-full justify-center">
                <LargeTransparentLogoIcon className="w-[200px]" />
            </div>

            <div className="mb-20 flex justify-center space-x-2">
                <DemoButton>
                    <div className="group flex h-10 w-10 items-center justify-center rounded-full border border-base hover:border-accent">
                        <PenIcon className="w-[22px] fill-base group-hover:fill-accent" />
                    </div>
                </DemoButton>
                <DemoButton>
                    <div className="group flex h-10 w-10 items-center justify-center rounded-full border border-base hover:border-accent">
                        <SlashIcon className="w-[30px] fill-base group-hover:fill-accent" />
                    </div>
                </DemoButton>
                <div
                    onClick={() => deleteEdProgram(curriculumId)}
                    className="group flex h-10 w-10 items-center justify-center rounded-full border border-base hover:border-accent"
                >
                    <BasketIcon className="w-[25px] fill-base group-hover:fill-accent" />
                </div>
            </div>
        </div>
    );
};

export default EditСurriculum;
