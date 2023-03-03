import React, { useState } from "react";

import Popup from "../utils/Popup";
import AddUserForm from "../forms/AddUserForm";

const AddUserButton: React.FC = () => {
    const [showPopup, setShowPopup] = useState(false);

    return (
        <>
            <div>
                <button
                    className="rounded bg-base px-4 py-2 text-center text-white hover:bg-[#F7FCFF] hover:text-accenttext  hover:shadow-[10px_10px_25px_0_rgba(114,188,232,0.2)]"
                    onClick={() => setShowPopup(!showPopup)}
                >
                    Изменить пользователя
                </button>
            </div>
            <Popup showPopup={showPopup} setShowPopup={setShowPopup}>
                <AddUserForm setShowPopup={setShowPopup} />
            </Popup>
        </>
    );
};

export default AddUserButton;
