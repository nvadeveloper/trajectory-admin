import { useNavigate } from "react-router-dom";

import { ReactComponent as LargeTransparentLogoIcon } from "../../image/icon/LargeTransparentLogo.svg";
import { ReactComponent as EmployeeIcon } from "../../image/icon/EmployeeIcon.svg";
import { ReactComponent as BasketIcon } from "../../image/icon/Basket.svg";
import { ReactComponent as SlashIcon } from "../../image/icon/Slash.svg";
import { ReactComponent as PenIcon } from "../../image/icon/Pen.svg";
import { ReactComponent as Cross } from "../../image/icon/Cross.svg";
import DemoButton from "../../components/buttons/DemoButton";
import TrajectoryEmployees from "../../components/employees";
import { $trajectoryStore } from "../../utils/effecor/trajectory";
import { useStore } from "effector-react";
import { $currentEmployeeStore } from "../../utils/effecor/currentEmployee";

const Employees: React.FC = () => {
    const navigate = useNavigate();

    const trajectoryStore = useStore($trajectoryStore);
    const currentEmployeeStore = useStore($currentEmployeeStore);

    return (
        <div className="flex">
            <div className="relative flex h-screen w-[236px] flex-col justify-between bg-white lg:w-[250px] xl:w-[295px]">
                <div
                    className="group absolute flex h-[40px] w-[40px] cursor-pointer items-center justify-center bg-white"
                    onClick={() => navigate(-1)}
                >
                    <Cross className="h-[16px] w-[16px] fill-base group-hover:fill-accent" />
                </div>

                <div>
                    <p className="pl-4 pt-9 text-[#B7DAEF]">
                        {currentEmployeeStore !== undefined
                            ? "Сотрудник"
                            : "Траектория"}
                    </p>

                    <div className="mt-16 flex items-center justify-between px-4">
                        <p className="mr-2">
                            {currentEmployeeStore
                                ? `${currentEmployeeStore.first_name}  ${currentEmployeeStore.surname}`
                                : trajectoryStore
                                ? `${trajectoryStore?.name}`
                                : null}
                        </p>

                        {currentEmployeeStore && (
                            <div>
                                <EmployeeIcon className="fill-base" />
                            </div>
                        )}
                    </div>
                </div>

                <div className="absolute top-64 flex w-full justify-center">
                    <LargeTransparentLogoIcon className="w-[200px]" />
                </div>

                <div className="mb-20 flex justify-center space-x-2">
                    <DemoButton>
                        <div className="group flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-2 border-base hover:border-accent">
                            <PenIcon className="w-[22px] fill-base group-hover:fill-accent" />
                        </div>
                    </DemoButton>
                    <DemoButton>
                        <div className="group flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-2 border-base hover:border-accent">
                            <SlashIcon className="w-[30px] fill-base group-hover:fill-accent" />
                        </div>
                    </DemoButton>
                    <DemoButton>
                        <div className="group flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-2 border-base hover:border-accent">
                            <BasketIcon className="w-[25px] fill-base group-hover:fill-accent" />
                        </div>
                    </DemoButton>
                </div>
            </div>

            <TrajectoryEmployees />
        </div>
    );
};

export default Employees;
