import { useState } from "react";

import Popup from "../utils/Popup";
import AddFileEdProgramForm from "../forms/AddFileEdProgramForm";

const AddFileEdProgramButton: React.FC = () => {
    const [showPopup, setShowPopup] = useState<boolean>(false);

    return (
        <>
            <button
                className="p-[20px] text-base hover:text-basetext"
                onClick={() => setShowPopup(!showPopup)}
            >
                <div className="flex justify-center">
                    Добавить учебный материал
                </div>
            </button>

            <Popup showPopup={showPopup} setShowPopup={setShowPopup}>
                <AddFileEdProgramForm setShowPopup={setShowPopup} />
            </Popup>
        </>
    );
};

export default AddFileEdProgramButton;
