import { ReactComponent as ShieldIcon } from "../../image/icon/Shield.svg";
import { ReactComponent as LearningProgramsIcon } from "../../image/icon/LearningPrograms.svg";
import { ReactComponent as EmployeeIcon } from "../../image/icon/EmployeeIcon.svg";
import { ReactComponent as LargeTransparentLogoIcon } from "../../image/icon/LargeTransparentLogo.svg";
import { ReactComponent as PenIcon } from "../../image/icon/Pen.svg";
import { ReactComponent as SlashIcon } from "../../image/icon/Slash.svg";
import { ReactComponent as BasketIcon } from "../../image/icon/Basket.svg";
import DemoButton from "../buttons/DemoButton";

import { useStore } from "effector-react";
import { $mainEditElementStore } from "../../utils/effecor/mainEditElement";
import SkeletonEditProfile from "../skeletons/SkeletonEditProfile";
import { Link, useParams } from "react-router-dom";

const EditElement: React.FC = () => {
    const { trajectoriesId } = useParams() as { trajectoriesId: string };
    const mainEditElement = useStore($mainEditElementStore);

    if (!mainEditElement?.id) return <SkeletonEditProfile />;

    return (
        <section id="EditElement">
            <div className="relative flex h-screen w-[236px] flex-col justify-between bg-white lg:w-[250px] xl:w-[295px]">
                <div>
                    <p className="pl-4 pt-9 text-[#B7DAEF]">
                        {!mainEditElement?.active &&
                            !mainEditElement?.trajectory &&
                            "Профиль пользователей"}
                        {mainEditElement?.trajectory && "Актив"}
                        {mainEditElement?.active && "Учебная программа"}
                    </p>
                    <div className="items-top mt-16 flex justify-between px-4">
                        <p className="mr-2">{mainEditElement?.name}</p>
                        <div>
                            {mainEditElement?.organization && (
                                <EmployeeIcon className="h-[47px] w-[38px] fill-blue" />
                            )}
                            {mainEditElement?.trajectory && (
                                <ShieldIcon className="h-[47px] w-[38px] fill-blue" />
                            )}
                            {mainEditElement?.active && (
                                <LearningProgramsIcon className="h-[26px] w-[37px] fill-blue" />
                            )}
                        </div>
                    </div>
                </div>

                <div className="absolute top-64 flex w-full justify-center">
                    <LargeTransparentLogoIcon className="w-[200px]" />
                </div>

                <div className="mb-20 flex justify-center space-x-2">
                    <Link
                        to={`/admin/trajectories/${trajectoriesId}/employees`}
                    >
                        <div className="group flex h-10 w-10 items-center justify-center rounded-full border-2 border-blue hover:border-orange">
                            <PenIcon className="w-[22px] fill-blue group-hover:fill-orange" />
                        </div>
                    </Link>
                    <DemoButton>
                        <div className="group flex h-10 w-10 items-center justify-center rounded-full border-2 border-blue hover:border-orange">
                            <SlashIcon className="w-[30px] fill-blue group-hover:fill-orange" />
                        </div>
                    </DemoButton>
                    <DemoButton>
                        <div
                            // onClick={() => {
                            //     // deleteTrajectory(id, navigate);
                            //     // console.log(
                            //     //     "click по editElement",
                            //     //     editElement
                            //     // );
                            // }}
                            className="group flex h-10 w-10 items-center justify-center rounded-full border-2 border-blue hover:border-orange"
                        >
                            <BasketIcon className="w-[25px] fill-blue group-hover:fill-orange" />
                        </div>
                    </DemoButton>
                </div>
            </div>
        </section>
    );
};

export default EditElement;
