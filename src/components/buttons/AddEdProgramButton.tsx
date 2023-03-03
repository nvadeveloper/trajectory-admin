import { useState } from "react";
import AddEdProgramForm from "../forms/AddEdProgramForm";
import AddButton from "./AddButton";

const AddEdProgramButton: React.FC = () => {
    const [showPopup, setShowPopup] = useState(false);

    return (
        <div>
            <button onClick={() => setShowPopup(!showPopup)}>
                <AddButton>Добавить учебную программу</AddButton>
            </button>

            {showPopup && <AddEdProgramForm setShowPopup={setShowPopup} />}
        </div>
    );
};

export default AddEdProgramButton;
