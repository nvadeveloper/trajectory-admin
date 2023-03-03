import { ReactComponent as HandIcon } from "../../image/icon/Hand.svg";
import { ReactComponent as LargeTransparentLogoIcon } from "../../image/icon/LargeTransparentLogo.svg";
import { ReactComponent as SlashIcon } from "../../image/icon/Slash.svg";
import DemoButton from "../buttons/DemoButton";

import useUser from "../../api/requests/useUser";
import AddUserButtonPen from "../buttons/AddUserButtonPen";
import SkeletonEditProfile from "../skeletons/SkeletonEditProfile";

const EditProfile: React.FC = () => {
    const { user, isError, isLoading } = useUser();

    if (isError || isLoading) return <SkeletonEditProfile />;

    return (
        <section id="EditElement">
            <div className="relative flex h-screen w-[236px] flex-col justify-between bg-white lg:w-[250px] xl:w-[295px]">
                <div>
                    <p className="ml-4 mt-9 text-[#B7DAEF]">Привет, Админ!</p>
                    <div className="m-4 flex items-center justify-between">
                        <p className="mr-2">
                            {user?.first_name} {user?.surname}
                        </p>
                        <div>
                            <HandIcon className="h-[40px] w-[40px]" />
                        </div>
                    </div>
                </div>

                <div className="absolute top-64 flex w-full justify-center">
                    <LargeTransparentLogoIcon className="w-[200px]" />
                </div>

                <div className="mb-20 flex justify-center space-x-2">
                    <AddUserButtonPen />

                    <DemoButton>
                        <div className="group flex h-10 w-10 items-center justify-center rounded-full border-2 border-blue hover:border-orange">
                            <SlashIcon className="w-[30px] fill-blue group-hover:fill-orange" />
                        </div>
                    </DemoButton>
                </div>
            </div>
        </section>
    );
};

export default EditProfile;
