import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import EmployeesList from "./EmployeesList";
import AddEmployeeButton from "../buttons/AddEmployeeButton";
import { getCurrentEmployees } from "../../api/requests/getCurrentEmployees";

const TrajectoryEmployees: React.FC = () => {
    const { trajectoriesId } = useParams() as { trajectoriesId: string };
    useEffect(() => getCurrentEmployees(trajectoriesId), [trajectoriesId]);

    return (
        <div className="h-screen w-[840px] overflow-auto">
            <div className="px-[25px] pt-[25px] xl:px-[55px] xl:pt-[30px]">
                <p className="text-xl">Пользователи профиля</p>
                <div className="mt-[25px] rounded-l-xl border-l-[5px] border-base bg-white py-[20px] xl:mt-[30px]">
                    <EmployeesList />
                    <AddEmployeeButton />
                </div>
            </div>
        </div>
    );
};

export default TrajectoryEmployees;
