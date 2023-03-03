import { useState } from "react";

import Popup from "../utils/Popup";
import AddFileEdProgramForm from "../forms/AddFileEdProgramForm";

const AddFirstFileEdProgramButton: React.FC = () => {
    const [showPopup, setShowPopup] = useState(false);

    return (
        <>
            <button
                className="hover:text-textbase group group flex shrink-0 items-center justify-center rounded-md border-l-[5px] border-base bg-white p-[15px] text-base shadow-[0_0_15px_rgba(115,189,233,0.2)] hover:bg-white hover:shadow-[0_0_15px_rgba(233,165,115,0.5)]"
                onClick={() => setShowPopup(!showPopup)}
            >
                <span className="mt-[3px] flex justify-center">
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="stroke-base group-hover:stroke-base"
                    >
                        <path
                            d="M8.5 16V8.5M8.5 8.5V1M8.5 8.5H16M8.5 8.5H1"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                    </svg>
                </span>
                <div className="ml-[5px] flex justify-center">
                    Добавить учебный материал
                </div>
            </button>
            <Popup showPopup={showPopup} setShowPopup={setShowPopup}>
                <AddFileEdProgramForm setShowPopup={setShowPopup} />
            </Popup>
        </>
    );
};

export default AddFirstFileEdProgramButton;
