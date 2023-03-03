import React, { useState } from "react";

import Popup from "../utils/Popup";
import AddUserForm from "../forms/AddUserForm";
import { ReactComponent as PenIcon } from "../../image/icon/Pen.svg";

const AddUserButtonPen: React.FC = () => {
    const [showPopup, setShowPopup] = useState(false);

    return (
        <>
            <div>
                <div
                    className="group flex h-10 w-10 items-center justify-center rounded-full border-2 border-base hover:border-accent"
                    onClick={() => setShowPopup(!showPopup)}
                >
                    <PenIcon className="w-[22px] fill-base group-hover:fill-accent" />
                </div>
            </div>
            <Popup showPopup={showPopup} setShowPopup={setShowPopup}>
                <AddUserForm setShowPopup={setShowPopup} />
            </Popup>
        </>
    );
};

export default AddUserButtonPen;
