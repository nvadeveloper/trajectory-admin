import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { addTeg } from "../../api/requestsForm/addTeg";

type Props = {
    setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
    tagList: any;
    setTagList: React.Dispatch<React.SetStateAction<any>>;
};

type FormValues = {
    name: string;
    description: string;
};

const AddUserForm: React.FC<Props> = ({
    setShowPopup,
    tagList,
    setTagList,
}) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormValues>();

    const onSubmit = async (data: FormValues) => {
        addTeg(data.name, data.description).then((res) => {
            toast.success("Тег добавлен");
            setTagList([...tagList, res.data]);
            console.log("ТЕГИ ", res.data);
        });

        reset();
        setShowPopup(false);
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex w-[500px] flex-col"
        >
            <p className="mb-4 text-xl font-bold">Добавление тега</p>
            <label htmlFor="name">Название тега:</label>
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

            <label htmlFor="description">Описание тега:</label>
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
                Добавить тег
            </button>
        </form>
    );
};

export default AddUserForm;
