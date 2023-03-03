import { useState } from "react";
import Popup from "../utils/Popup";
import AddTrajectoryForm from "../forms/AddTrajectoryForm";
import { ReactComponent as CrossAddTrajectoryIcon } from "../../image/icon/CrossAddTrajectory.svg";

const AddTrajectoryButton: React.FC = () => {
    const [showPopup, setShowPopup] = useState(false);

    return (
        <>
            <button
                className="relative cursor-pointer rounded-full bg-base py-[16px] px-[80px] text-center text-white hover:opacity-80"
                onClick={() => setShowPopup(!showPopup)}
            >
                Добавить траекторию
                <CrossAddTrajectoryIcon className="fill-white stroke-white absolute top-[11px] left-[20px]" />
            </button>
            <Popup showPopup={showPopup} setShowPopup={setShowPopup}>
                <AddTrajectoryForm setShowPopup={setShowPopup} />
            </Popup>
        </>
    );
};

export default AddTrajectoryButton;
