import { useState } from "react";

import Popup from "../utils/Popup";
import AddButton from "./AddButton";
import AddThreatForm from "../forms/AddThreatForm";

const AddThreatButton: React.FC = () => {
    const [showPopup, setShowPopup] = useState<boolean>(false);

    return (
        <li key="AddRiskButton">
            <button onClick={() => setShowPopup(!showPopup)}>
                <AddButton>Добавить угрозу</AddButton>
            </button>

            <Popup showPopup={showPopup} setShowPopup={setShowPopup}>
                <AddThreatForm setShowPopup={setShowPopup} />
            </Popup>
        </li>
    );
};

export default AddThreatButton;
