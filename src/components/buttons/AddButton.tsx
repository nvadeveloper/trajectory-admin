import { ReactComponent as AddButtonIcon } from "../../image/icon/AddButtonIcon.svg";

type Props = {
    children: React.ReactNode;
};

const AddButton: React.FC<Props> = ({ children }) => {
    return (
        <div className="group relative flex cursor-pointer items-center justify-between px-5 py-3">
            <div className="mr-5 flex items-center">
                <div className="mr-5 rounded-full border border-base group-hover:border-accent">
                    <div className="flex h-10 w-10 items-center justify-center stroke-base group-hover:stroke-accent">
                        <AddButtonIcon />
                    </div>
                </div>
                <p className="text-left text-base group-hover:text-basetext">
                    {children}
                </p>
            </div>
        </div>
    );
};

export default AddButton;
