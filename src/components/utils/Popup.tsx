import { ReactComponent as Cross } from "../../image/icon/Cross.svg";

type Props = {
    children: React.ReactNode;
    showPopup: boolean;
    setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
};

const Popup: React.FC<Props> = ({ children, showPopup, setShowPopup }) => {
    return (
        <>
            {showPopup && (
                <section className="absolute z-50">
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    <div className="fixed inset-0 z-10">
                        <div className="mt-20 flex justify-center">
                            <div className="relative min-w-[500px] rounded-lg bg-white p-10 shadow-lg">
                                <div
                                    className="group absolute right-2 top-2 cursor-pointer p-3"
                                    onClick={() => setShowPopup(false)}
                                >
                                    <Cross className="fill-blue group-hover:fill-orange" />
                                </div>
                                {children}
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
};

export default Popup;
