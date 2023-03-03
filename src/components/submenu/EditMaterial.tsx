import { ReactComponent as ShieldIcon } from "../../image/icon/Shield.svg";
import { ReactComponent as LargeTransparentLogoIcon } from "../../image/icon/LargeTransparentLogo.svg";
import { ReactComponent as PenIcon } from "../../image/icon/Pen.svg";
import { ReactComponent as SlashIcon } from "../../image/icon/Slash.svg";
import { ReactComponent as BasketIcon } from "../../image/icon/Basket.svg";
import DemoButton from "../buttons/DemoButton";

import api from "../../api/baseAPI";
import { toast } from "react-hot-toast";
import {
    $edMaterialListStore,
    updateEdMaterialList,
} from "../../utils/effecor/edMaterialList";
import { useStore } from "effector-react";
import {
    $selectedEdMaterialStore,
    updateSelectedEdMaterial,
} from "../../utils/effecor/selectedEdMaterial";

const EditMaterial = () => {
    const edMaterialList = useStore($edMaterialListStore);
    const edMaterial = useStore($selectedEdMaterialStore);

    return (
        <section className="shrink-0">
            <div className="relative flex h-screen w-[295px] flex-col justify-between bg-white xl:w-[295px]">
                <div className="flex flex-col">
                    <p className="pl-4 pt-6 text-[18px] font-normal text-[#B7DAEF]">
                        Учебный материал
                    </p>

                    <div className="mt-[24px] flex flex-col">
                        <div className="mt-16 flex items-center justify-between px-4">
                            <p className="mr-2">{edMaterial?.name}</p>
                            <ShieldIcon className="h-[47px] w-[38px] fill-blue" />
                        </div>
                        <p className="ml-4 mr-4 mt-[20px] break-words">
                            {edMaterial?.description}
                        </p>
                    </div>
                </div>

                <div className="absolute top-64 flex w-full justify-center">
                    <LargeTransparentLogoIcon className="w-[200px]" />
                </div>

                <div className="mb-20 flex justify-center space-x-2">
                    <DemoButton>
                        <div className="group flex h-10 w-10 items-center justify-center rounded-full border-2 border-blue hover:border-orange">
                            <PenIcon className="w-[22px] fill-blue group-hover:fill-orange" />
                        </div>
                    </DemoButton>
                    <DemoButton>
                        <div className="group flex h-10 w-10 items-center justify-center rounded-full border-2 border-blue hover:border-orange">
                            <SlashIcon className="w-[30px] fill-blue group-hover:fill-orange" />
                        </div>
                    </DemoButton>

                    <button
                        onClick={() => {
                            updateSelectedEdMaterial(null);
                            api({
                                method: "delete",
                                url: `/content/${edMaterial?.id}/delete`,
                            }).then(() => {
                                toast.success("Материал удален");
                                updateEdMaterialList(
                                    edMaterialList.filter(
                                        (item) => item.id !== edMaterial?.id
                                    )
                                );
                            });
                        }}
                    >
                        <div className="group flex h-10 w-10 items-center justify-center rounded-full border-2 border-blue hover:border-orange">
                            <BasketIcon className="w-[25px] fill-blue group-hover:fill-orange" />
                        </div>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default EditMaterial;
