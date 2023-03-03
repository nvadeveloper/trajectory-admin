import { useStore } from "effector-react";
import DemoButton from "../buttons/DemoButton";
import studentPhoto from "./../../image/studentPhoto.png";
import { ReactComponent as PenIcon } from "../../image/icon/Pen.svg";
import { ReactComponent as SlashIcon } from "../../image/icon/Slash.svg";
import { ReactComponent as BasketIcon } from "../../image/icon/Basket.svg";
import { $currentEmployeeListStore } from "../../utils/effecor/currentEmployeeList";
import { updateCurrentEmployee } from "../../utils/effecor/currentEmployee";

const EmployeesList: React.FC = () => {
    const currentEmployeeList = useStore($currentEmployeeListStore);
    
    return (
        <>
            {currentEmployeeList?.length > 0 ? (
                <ul className="flex flex-col">
                    {currentEmployeeList.map((item) => (
                        <li
                            key={item.id}
                            onClick={() => updateCurrentEmployee(item)}
                            className="relative flex items-center justify-between py-5 px-5 text-sm hover:text-textbrown"
                        >
                            <div className="group flex items-center justify-between">
                                <img
                                    src={studentPhoto}
                                    alt="manIcon"
                                    className="mr-[15px] h-[45px] w-[45px] rounded-full border  border-base bg-gray-100 group-hover:border-accent"
                                />
                                <div>
                                    <p className="font-bold">{item?.surname}</p>
                                    <p>
                                        {item?.first_name} {item?.last_name}
                                    </p>
                                </div>
                            </div>
                            <div className="space-x-[8px]">
                                <DemoButton>
                                    <div className="group flex h-7 w-7 items-center justify-center rounded-full border border-base hover:border-accent">
                                        <PenIcon className="h-[14px] w-[14px] fill-base group-hover:fill-accent" />
                                    </div>
                                </DemoButton>

                                <DemoButton>
                                    <div className="group flex h-7 w-7 items-center justify-center rounded-full border border-base hover:border-accent">
                                        <SlashIcon className="h-[14px] w-[20px] fill-base group-hover:fill-accent" />
                                    </div>
                                </DemoButton>
                                <DemoButton>
                                    <div className="group flex h-7 w-7 items-center justify-center rounded-full border border-base hover:border-accent">
                                        <BasketIcon className="h-[16px] w-[16px] fill-base group-hover:fill-accent" />
                                    </div>
                                </DemoButton>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="py-5 px-5">
                    Еще нет сотрудников, добавьте их в траекторию!
                </p>
            )}
        </>
    );
};

export default EmployeesList;
