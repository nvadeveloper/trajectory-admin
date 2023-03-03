import EditElement from "../../components/submenu/EditElement";
import Preview from "../../components/trajectories/Preview";
import { deleteTrajectory } from "../../api/requests/deleteTrajectory";
import { useSWRConfig } from "swr";
import { Link, useNavigate, useParams } from "react-router-dom";

import { ReactComponent as PenIcon } from "../../image/icon/Pen.svg";
import { ReactComponent as SlashIcon } from "../../image/icon/Slash.svg";
import { ReactComponent as BasketIcon } from "../../image/icon/Basket.svg";
import { ReactComponent as Cross } from "../../image/icon/Cross.svg";

const Trajectory: React.FC = () => {
    const navigate = useNavigate();
    const { mutate } = useSWRConfig();
    const { trajectoriesId } = useParams() as { trajectoriesId: string };

    const handleDeleteTrajectory = () => {
        deleteTrajectory(trajectoriesId).then(() => {
            mutate("/trajectories", false);
            navigate("/admin/trajectories", {
                replace: true,
            });
        });
    };

    return (
        <>
            <section className="flex h-screen w-full grow flex-col overflow-hidden">
                <div className="flex flex-row items-center justify-between px-[25px] pt-[20px] xl:px-[55px]">
                    <p className="text-xl">Главная</p>
                    <div className="flex space-x-[7px] py-[5.5px]">
                        <Link
                            to={`/admin/trajectories/${trajectoriesId}/employees`}
                        >
                            <div className="group flex h-[45px] w-[45px] cursor-pointer items-center justify-center rounded-full border border-base bg-white hover:border-accent">
                                <PenIcon className="w-[18px] fill-base group-hover:fill-accent" />
                            </div>
                        </Link>
                        <div className="group flex h-[45px] w-[45px] cursor-pointer items-center justify-center rounded-full border border-base bg-white hover:border-accent">
                            <SlashIcon className="w-[27px] fill-base group-hover:fill-accent" />
                        </div>
                        <div
                            className="group flex h-[45px] w-[45px] cursor-pointer items-center justify-center rounded-full border border-base bg-white hover:border-accent"
                            onClick={handleDeleteTrajectory}
                        >
                            <BasketIcon className="w-[19px] fill-base group-hover:fill-accent" />
                        </div>
                        <div
                            className="group flex h-[45px] w-[45px] cursor-pointer items-center justify-center rounded-full border border-base bg-white hover:border-accent"
                            onClick={() => navigate(-1)}
                        >
                            <Cross className="w-[14px] fill-base group-hover:fill-accent" />
                        </div>
                    </div>
                </div>
                <Preview />
            </section>
            <EditElement />
        </>
    );
};

export default Trajectory;
