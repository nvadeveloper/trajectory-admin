import React, { useEffect } from "react";

import { useState } from "react";
import { useParams } from "react-router-dom";

import { ReactComponent as AddEmployeeButtonIcon } from "../../image/icon/AddEmployeeButtonIcon.svg";
import { ReactComponent as AddEmployeeFromEmailButtonIcon } from "../../image/icon/AddEmployeeFromEmailButtonIcon.svg";
import { ReactComponent as AddEmployeeIcon } from "../../image/icon/AddEmployeeIcon.svg";

import { attachEmployee } from "../../api/requests/attachEmployee";
import { searchEmployeesByEmail } from "../../api/requests/searchEmployeesByEmail";
import { attachRandomEmployee } from "../../api/requests/attachRandomEmployee";

// import { Employee } from "../../api/types";
import { toast } from "react-hot-toast";
import { clearInput } from "../../utils/func/clearInput";

// import Popup from "../utils/Popup";
import AddButton from "./AddButton";
import { updateCurrentEmployeeList } from "../../utils/effecor/currentEmployeeList";
import { $currentEmployeeListStore } from "../../utils/effecor/currentEmployeeList";
import { useStore } from "effector-react";
import Modal from "../utils/Modal";
import { IEmployee } from "../../utils/models";

const AddEmployeeButton: React.FC = () => {
    const [modal, setModal] = useState<boolean>(false);
    const [formType, setFormType] = useState<
        "noSelected" | "fromEmail" | "fromPlatform"
    >("noSelected");

    const { trajectoriesId } = useParams();
    const [emaiList, setEmaiList] = useState<IEmployee[]>([]);
    const [searchEmail, setSearchEmail] = useState("");
    const [attachEmail, setAttachEmail] = useState("");

    const currentEmployeeList = useStore($currentEmployeeListStore);

    useEffect(() => setFormType("noSelected"), [modal]);

    return (
        <div>
            <button onClick={() => setModal(true)}>
                <AddButton>Добавить сотрудника</AddButton>
            </button>
            {modal && (
                <Modal
                    setModal={setModal}
                    title="Добавить сотрудника"
                    description="Выберите сотрудника"
                >
                    {formType === "noSelected" && (
                        <div className="flex w-full justify-between space-x-[90px] px-[120px] pt-[60px] pb-[90px] text-center font-medium">
                            <div
                                onClick={() => setFormType("fromPlatform")}
                                className="flex cursor-pointer flex-col items-center"
                            >
                                <AddEmployeeButtonIcon />
                                <p className="w-[280px]">
                                    Добавить сотрудника <br /> из системы
                                </p>
                            </div>
                            <div
                                onClick={() => setFormType("fromEmail")}
                                className="flex cursor-pointer flex-col items-center"
                            >
                                <AddEmployeeFromEmailButtonIcon />
                                <p className="w-[280px]">
                                    Пригласить сотрудника <br /> по электронной
                                    почте
                                </p>
                            </div>
                        </div>
                    )}

                    {formType === "fromPlatform" && (
                        <div className="flex w-full p-[60px] pl-[40px]">
                            <div className="mr-[40px]">
                                <AddEmployeeIcon />
                            </div>
                            <form className="relative w-full">
                                <label className="mb-[10px]">
                                    Добавить сотрудника из системы
                                </label>
                                <input
                                    className="mt-4 w-full rounded-md bg-[#F7FCFF] p-2 shadow-[10px_10px_25px_0_rgba(114,188,232,0.2)] ring-1 ring-transparent focus:outline-none focus:ring-[#73BDE9] hover:ring-2"
                                    id="emailFirst"
                                    type="email"
                                    autoComplete="off"
                                    onChange={(e) => {
                                        if (e.target.value !== "") {
                                            setSearchEmail(e.target.value);

                                            searchEmployeesByEmail(
                                                e.target.value
                                            ).then((res) => {
                                                setEmaiList(res.data);
                                            });
                                        } else {
                                            setSearchEmail("");
                                            setEmaiList([]);
                                        }
                                    }}
                                />

                                <div className="absolute top-[90px] w-full">
                                    <div className="rounded bg-white shadow-[0_0_15px_0_rgba(115,189,233,0.2)]">
                                        {searchEmail !== "" && (
                                            <>
                                                {emaiList?.length > 0 ? (
                                                    <ul className="p-2">
                                                        {emaiList.map(
                                                            (item) => (
                                                                <li
                                                                    key={
                                                                        item.id
                                                                    }
                                                                    className="cursor-pointer hover:text-base"
                                                                    onClick={() => {
                                                                        if (
                                                                            trajectoriesId !==
                                                                            undefined
                                                                        ) {
                                                                            attachEmployee(
                                                                                item.id,
                                                                                trajectoriesId
                                                                            ).then(
                                                                                () => {
                                                                                    toast.success(
                                                                                        "Пользователь добавлен!"
                                                                                    );
                                                                                    updateCurrentEmployeeList(
                                                                                        [
                                                                                            ...currentEmployeeList,
                                                                                            item,
                                                                                        ]
                                                                                    );
                                                                                }
                                                                            );
                                                                        }

                                                                        setEmaiList(
                                                                            []
                                                                        );
                                                                        setSearchEmail(
                                                                            ""
                                                                        );
                                                                        clearInput(
                                                                            "emailFirst"
                                                                        );
                                                                    }}
                                                                >
                                                                    {item.email}
                                                                </li>
                                                            )
                                                        )}
                                                    </ul>
                                                ) : (
                                                    <p className="p-2">
                                                        Нет сотрудника
                                                    </p>
                                                )}
                                            </>
                                        )}
                                    </div>
                                </div>
                            </form>
                        </div>
                    )}

                    {formType === "fromEmail" && (
                        <div className="flex w-full p-[60px] pl-[40px]">
                            <div className="mr-[40px]">
                                <AddEmployeeIcon />
                            </div>
                            <form className="relative w-full">
                                <label className="mb-[10px]">
                                    Пригласить сотрудника по электронной почте
                                </label>
                                <input
                                    className="mt-4 w-[300px] rounded-md bg-[#F7FCFF] p-2 shadow-[10px_10px_25px_0_rgba(114,188,232,0.2)] ring-1 ring-transparent focus:outline-none focus:ring-[#73BDE9] hover:ring-2"
                                    id="emailSecond"
                                    type="email"
                                    autoComplete="off"
                                    onChange={(e) => {
                                        setAttachEmail(e.target.value);
                                    }}
                                />
                                <button
                                    className="ml-2 rounded-lg bg-base px-4 py-2 text-white hover:opacity-80"
                                    onClick={() => {
                                        if (trajectoriesId !== undefined) {
                                            attachRandomEmployee(
                                                trajectoriesId,
                                                attachEmail
                                            )
                                                .then(() =>
                                                    toast.success(
                                                        "Приглашение отправлено"
                                                    )
                                                )
                                                .catch(() =>
                                                    toast.error(
                                                        "Возникла ошибка"
                                                    )
                                                );
                                        }

                                        setAttachEmail("");
                                        clearInput("emailSecond");
                                    }}
                                >
                                    Добавить сотрудника
                                </button>
                            </form>
                        </div>
                    )}
                </Modal>
            )}
        </div>
    );
};

export default AddEmployeeButton;
