import { useState } from "react";

import Popup from "../utils/Popup";
import AddTegForm from "../forms/AddTegForm";
import { ITag } from "../../utils/models";

type Props = {
    tagList: ITag[];
    setTagList: any;
};

const AddTegButton: React.FC<Props> = ({ tagList, setTagList }) => {
    const [showPopup, setShowPopup] = useState<boolean>(false);

    return (
        <>
            <div>
                <button
                    className="mr-[15px] min-w-[50px] cursor-pointer justify-center rounded-full border border-base bg-white px-[20px] py-[4px] text-base hover:bg-base hover:text-white"
                    onClick={() => setShowPopup(!showPopup)}
                >
                    Добавить тег
                </button>
            </div>
            <Popup showPopup={showPopup} setShowPopup={setShowPopup}>
                <AddTegForm
                    setShowPopup={setShowPopup}
                    tagList={tagList}
                    setTagList={setTagList}
                />
            </Popup>
        </>
    );
};

export default AddTegButton;
