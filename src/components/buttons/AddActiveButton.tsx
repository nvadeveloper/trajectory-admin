import { useState } from "react";
import AddButton from "./AddButton";
import AddActiveForm from "../forms/AddActiveForm";

const AddActiveButton: React.FC = () => {
    const [showPopup, setShowPopup] = useState(false);

    return (
        <div>
            <button onClick={() => setShowPopup(!showPopup)}>
                <AddButton>Добавить актив</AddButton>
            </button>

            {showPopup && <AddActiveForm setShowPopup={setShowPopup} />}
        </div>
    );
};

export default AddActiveButton;
