import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import useUser from "../../api/requests/useUser";
import { useSWRConfig } from "swr";
import { changeUser } from "../../api/requestsForm/changeUser";

type Props = {
    setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
};

const AddUserForm: React.FC<Props> = ({ setShowPopup }) => {
    const { mutate } = useSWRConfig();
    const { user, isError, isLoading } = useUser();
    const { register, handleSubmit, reset } = useForm();

    if (isError) return <div>Request Failed</div>;
    if (isLoading) return <div>Loading...</div>;

    const onSubmit = async (data: any) => {
        changeUser(data)
            .then(() => mutate("/profile/", false))
            .then(() => toast.success("Данные профиля изменились!"));

        reset();
        setShowPopup(false);
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex w-[500px] flex-col"
        >
            <p className="mb-4 text-xl font-bold">Изменить пользователя</p>
            <label htmlFor="firstname">Имя:</label>
            <div className="relative">
                <input
                    className="my-1 w-full rounded bg-[#F7FCFF] p-2 focus:outline-none"
                    id="firstname"
                    type="text"
                    defaultValue={user?.first_name}
                    {...register("firstname")}
                />
            </div>

            <label htmlFor="surname">Фамилия:</label>
            <div className="relative">
                <input
                    className="my-1 w-full rounded bg-[#F7FCFF] p-2 focus:outline-none"
                    id="surname"
                    type="text"
                    defaultValue={user?.surname}
                    {...register("surname")}
                />
            </div>

            <label htmlFor="lastname">Отчество:</label>
            <div className="relative">
                <input
                    className="my-1 w-full rounded bg-[#F7FCFF] p-2 focus:outline-none"
                    id="lastname"
                    type="text"
                    defaultValue={user?.last_name}
                    {...register("lastname")}
                />
            </div>

            <label htmlFor="position">Должность:</label>
            <div className="relative">
                <input
                    className="my-1 w-full rounded bg-[#F7FCFF] p-2 focus:outline-none"
                    id="position"
                    type="text"
                    defaultValue={user?.position}
                    {...register("position")}
                />
            </div>

            <label htmlFor="email">Email:</label>
            <div className="relative">
                <input
                    className="my-1 w-full rounded bg-[#F7FCFF] p-2 focus:outline-none"
                    id="email"
                    type="email"
                    defaultValue={user?.email}
                    {...register("email")}
                />
            </div>

            <button
                type="submit"
                className="group relative mt-6 rounded bg-base py-2 text-center text-white hover:bg-[#F7FCFF] hover:text-textblack hover:shadow-[10px_10px_25px_0_rgba(114,188,232,0.2)]"
            >
                Изменить данные
            </button>
        </form>
    );
};

export default AddUserForm;
