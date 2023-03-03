import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { addRisk } from "../../api/requestsForm/addRisk";
import {
    $threatListStore,
    updateThreatList,
} from "../../utils/effecor/threatList";
import { useStore } from "effector-react";
import { useParams } from "react-router-dom";

type Props = {
    setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
};

type FormValues = {
    name: string;
    description: string;
};

const AddThreatForm: React.FC<Props> = ({ setShowPopup }) => {
    const { activeId } = useParams() as { activeId: string };
    const threatList = useStore($threatListStore);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormValues>();

    const onSubmit = (data: FormValues) => {
        addRisk(activeId, data.name, data.description).then((res) => {
            toast.success("Угроза добавлена!");
            updateThreatList([...threatList, res.data]);
        });

        reset();
        setShowPopup(false);
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex w-[500px] flex-col"
        >
            <p className="mb-4 text-xl font-bold">Добавление угрозы</p>
            <label htmlFor="name">Название угрозы:</label>
            <div className="relative">
                <input
                    className="my-1 w-full rounded bg-[#F7FCFF] p-2 focus:outline-none"
                    id="name"
                    {...register("name", {
                        required: "Обязательно для заполнения",
                    })}
                    type="text"
                />
            </div>
            {errors.name && (
                <span role="alert" className="text-sm text-gray-500">
                    {errors.name.message}
                </span>
            )}

            <label htmlFor="description">Описание угрозы:</label>
            <div className="relative">
                <textarea
                    className="my-1 w-full rounded bg-[#F7FCFF] p-2 focus:outline-none"
                    id="description"
                    rows={4}
                    {...register("description", {
                        required: "Обязательно для заполнения",
                    })}
                />
            </div>
            {errors.description && (
                <span role="alert" className="text-sm text-gray-500">
                    {errors.description.message}
                </span>
            )}

            <button
                type="submit"
                className="group relative mt-6 rounded bg-base py-2 text-center text-white hover:bg-[#F7FCFF] hover:text-basetext hover:shadow-[10px_10px_25px_0_rgba(114,188,232,0.2)]"
            >
                Добавить угрозу
            </button>
        </form>
    );
};

export default AddThreatForm;
