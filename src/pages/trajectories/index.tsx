import React from "react";
import TrajectoryList from "../../components/trajectories/TrajectoryList";
import EditProfile from "../../components/submenu/EditProfile";
import AddTrajectoryButton from "../../components/buttons/AddTrajectoryButton";

const Trajectories: React.FC = () => (
    <>
        <section className="flex h-screen w-full grow flex-col overflow-hidden">
            <div className="flex flex-row items-center justify-between px-[25px] pt-[20px] xl:px-[55px]">
                <p className="text-xl">Главная</p>
                <AddTrajectoryButton />
            </div>
            <TrajectoryList />
        </section>
        <EditProfile />
    </>
);

export default Trajectories;
