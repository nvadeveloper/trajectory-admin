import { addActive } from "../../api/requestsForm/addActive";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import { ReactComponent as Cross } from "../../image/icon/Cross.svg";
import { ReactComponent as ActiveBigLogo } from "../../image/icon/ActiveBigLogo.svg";
import { useStore } from "effector-react";
import {
    $activeListStore,
    updateActiveList,
} from "../../utils/effecor/activeList";

type Props = {
    setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
};

type FormValues = {
    name: string;
    description: string;
};

const AddActiveForm: React.FC<Props> = ({ setShowPopup }) => {
    const { trajectoriesId } = useParams() as { trajectoriesId: string };
    const activesList = useStore($activeListStore);
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormValues>();

    const onSubmit = (data: FormValues) => {
        addActive(trajectoriesId, data.name, data.description).then((res) => {
            updateActiveList([...activesList, res.data]);
            toast.success("Актив добавлен!");
        });

        reset();
        setShowPopup(false);
    };

    return (
        <section className="absolute z-50">
            <div
                className="fixed inset-0 bg-base opacity-30 transition-opacity"
                onClick={() => setShowPopup(false)}
            />
            <div className="fixed inset-0 z-10">
                <div className="mt-20 flex justify-center">
                    <div className="w-[865px] rounded-xl bg-white">
                        <div className="relative rounded-t-xl bg-base p-[20px] text-white">
                            <div>
                                <p className="text-[24px] font-bold">Активы</p>
                                <p>Добавление актива</p>
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
                                <ActiveBigLogo className="mr-[40px]" />
                            </div>
                            <form
                                onSubmit={handleSubmit(onSubmit)}
                                className="flex w-full flex-col justify-between"
                            >
                                <div className="flex flex-col">
                                    <label htmlFor="name">
                                        Название актива
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
                                        Описание актива
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
                                        Добавить актив
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

export default AddActiveForm;
