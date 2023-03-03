import React, { useState } from "react";

import Popup from "../utils/Popup";

type Props = {
    children: React.ReactNode;
};

const DemoButton: React.FC<Props> = ({ children }) => {
    const [showPopup, setShowPopup] = useState(false);

    return (
        <>
            <button onClick={() => setShowPopup(!showPopup)}>{children}</button>
            <Popup showPopup={showPopup} setShowPopup={setShowPopup}>
                <div className="p-y-[50px] flex flex-col items-center">
                    <p className="text-2xl font-bold text-basetext">
                        🚧 Функционал находится в разработке 🚧
                    </p>
                </div>
            </Popup>
        </>
    );
};

export default DemoButton;
