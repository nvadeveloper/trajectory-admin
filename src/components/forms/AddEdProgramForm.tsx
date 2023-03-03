import { useForm } from "react-hook-form";
import { addEdProgram } from "../../api/requestsForm/addEdProgram";
import { $activeStore } from "../../utils/effecor/active";
import { $edProgramListStore } from "../../utils/effecor/edProgramList";
import { useStore } from "effector-react";
import { ReactComponent as Cross } from "../../image/icon/Cross.svg";
import { ReactComponent as EdProgramBigLogo } from "../../image/icon/EdProgramBigLogo.svg";
import { IActive } from "../../utils/models";

type Props = {
    setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
};

type FormValues = {
    name: string;
    description: string;
};

const AddEdProgramForm: React.FC<Props> = ({ setShowPopup }) => {
    const active = useStore($activeStore) as IActive;
    const edProgramList = useStore($edProgramListStore);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormValues>();

    const onSubmit = (data: FormValues) => {
        addEdProgram(data.name, data.description, active, edProgramList);
        reset();
        setShowPopup(false);
    };

    return (
        <section className="absolute z-50">
            <div className="fixed inset-0 bg-base opacity-30 transition-opacity" />
            <div className="fixed inset-0 z-10">
                <div className="mt-20 flex justify-center">
                    <div className="w-[865px] rounded-xl bg-white">
                        <div className="relative rounded-t-xl bg-base p-[20px] text-white">
                            <div>
                                <p className="text-[24px] font-bold">
                                    Учебная программа
                                </p>
                                <p>Добавление учебной программы</p>
                            </div>
                            <div
                                className="group absolute right-2 top-2 cursor-pointer p-2"
                                onClick={() => setShowPopup(false)}
                            >
                                <Cross className="fill-white group-hover:fill-[#d4efff]" />
                            </div>
                        </div>

                        <div className="flex p-[40px]">
                            <div className="mr-[40px] h-[200px] w-[200px]">
                                <EdProgramBigLogo className="mr-[40px]" />
                            </div>
                            <form
                                onSubmit={handleSubmit(onSubmit)}
                                className="flex w-full flex-col justify-between"
                            >
                                <div className="flex flex-col">
                                    <label htmlFor="name">
                                        Название учебной программы
                                    </label>
                                    <div className="relative">
                                        <input
                                            className="my-1 w-full rounded bg-[#F7FCFF] p-2 focus:outline-none"
                                            id="name"
                                            {...register("name", {
                                                required:
                                                    "Обязательно для заполнения",
                                            })}
                                            type="text"
                                        />
                                    </div>
                                    {errors.name && (
                                        <span
                                            role="alert"
                                            className="text-sm text-gray-500"
                                        >
                                            {errors.name.message}
                                        </span>
                                    )}

                                    <label htmlFor="description">
                                        Описание учебной программы
                                    </label>
                                    <div className="relative">
                                        <textarea
                                            className="my-1 w-full rounded bg-[#F7FCFF] p-2 focus:outline-none"
                                            id="description"
                                            rows={4}
                                            {...register("description", {
                                                required:
                                                    "Обязательно для заполнения",
                                            })}
                                        />
                                    </div>
                                    {errors.description && (
                                        <span
                                            role="alert"
                                            className="text-sm text-gray-500"
                                        >
                                            {errors.description.message}
                                        </span>
                                    )}
                                </div>
                                <div className="flex justify-end">
                                    <button
                                        type="submit"
                                        className="rounded bg-base py-[10px] px-[40px] text-white hover:bg-[#c0e8ff]"
                                    >
                                        Добавить учебную программу
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddEdProgramForm;
