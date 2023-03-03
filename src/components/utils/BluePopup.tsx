import { ReactComponent as Cross } from "../../image/icon/Cross.svg";

type Props = {
    title: string;
    children: React.ReactNode;
    showPopup: boolean;
    setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
};

const BluePopup: React.FC<Props> = ({
    title,
    children,
    showPopup,
    setShowPopup,
}) => {
    if (!showPopup) return null;
    return (
        <section
            onClick={(e) => {
                if (e.target === e.currentTarget) setShowPopup(false);
            }}
            className="fixed inset-0 z-10 !mx-0 grow bg-gray-500 bg-opacity-75 transition-opacity"
        >
            <div className="mx-auto mt-20 w-fit rounded-lg bg-white shadow-lg">
                <div className="rounded-t-lg bg-blue py-4 px-8">
                    <p className="flex min-w-[700px] justify-between text-2xl font-bold text-white">
                        {title}
                        <button onClick={() => setShowPopup(false)}>
                            <Cross className="fill-white hover:fill-orange" />
                        </button>
                    </p>
                    <p className="text-xl text-white">Текст</p>
                </div>
                {children}
            </div>
        </section>
    );
};

export default BluePopup;
