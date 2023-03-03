import { useState } from "react";

import AddDepsForm from "../forms/AddDepsForm";
import { ReactComponent as SlashIcon } from "../../image/icon/Slash.svg";
import BluePopup from "../utils/BluePopup";

type Props = {
    program: any;
    material: any;
};

const AddDepsButton: React.FC<Props> = ({ program, material }) => {
    const [showPopup, setShowPopup] = useState(false);

    return (
        <>
            <button
                className="group flex h-7 w-7 items-center justify-center rounded-full border-2 border-base hover:border-accent"
                onClick={() => setShowPopup(!showPopup)}
            >
                <SlashIcon className="w-[20px] fill-base group-hover:fill-accent" />
            </button>
            <BluePopup
                title={"Редактирование зависимостей"}
                showPopup={showPopup}
                setShowPopup={setShowPopup}
            >
                <AddDepsForm material={material} program={program} />
            </BluePopup>
        </>
    );
};

export default AddDepsButton;
