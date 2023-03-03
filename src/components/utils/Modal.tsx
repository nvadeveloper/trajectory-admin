import { ReactComponent as Cross } from "../../image/icon/Cross.svg";

type Props = {
    children: React.ReactNode;
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
    title: string;
    description: string;
};

const Modal: React.FC<Props> = ({ children, setModal, title, description }) => {
    return (
        <section className="absolute z-50">
            <div
                className="fixed inset-0 bg-base opacity-30 transition-opacity"
                onClick={() => setModal(false)}
            />
            <div className="fixed inset-0 z-10">
                <div className="mt-20 flex justify-center">
                    <div className="w-[865px] rounded-xl bg-white">
                        <div className="relative rounded-t-xl bg-base p-[20px] text-white">
                            <div>
                                <p className="text-[24px] font-bold">{title}</p>
                                <p>{description}</p>
                            </div>
                            <div
                                className="group absolute right-2 top-2 cursor-pointer p-2"
                                onClick={() => setModal(false)}
                            >
                                <Cross className="fill-white group-hover:fill-[#d4efff]" />
                            </div>
                        </div>
                        {children}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Modal;
