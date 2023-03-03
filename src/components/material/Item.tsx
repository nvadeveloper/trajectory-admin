import { useState } from "react";
import { attachTag } from "../../api/requests/attachTag";
import { getMaterials } from "../../api/requests/getMaterials";
import { ReactComponent as PenIcon } from "../../image/icon/Pen.svg";
import { ReactComponent as StarIcon } from "../../image/icon/Star.svg";
import edProgramsListPhoto from "../../image/edProgramsListPhoto.png";
import { updateSelectedEdMaterial } from "../../utils/effecor/selectedEdMaterial";
import { IMaterial, ITag } from "../../utils/models";

type Props = {
    item: IMaterial;
    tagList: ITag[];
    selectedTag: any;
};

const MaterialsItem: React.FC<Props> = ({ item, tagList, selectedTag }) => {
    const [showTags, setShowTags] = useState(false);
    const tagsIdList = item?.tags.map((tag) => tag.id);

    return (
        <li
            key={item.id}
            onClick={() => updateSelectedEdMaterial(item)}
            className="flex h-[320px] w-[335px] flex-col justify-between rounded-2xl bg-white text-textblack shadow-[0_0_15px_0_rgba(115,189,233,0.2)] transition delay-150 ease-in-out hover:shadow-[0_0_15px_rgba(233,165,115,0.5)]"
        >
            <div>
                <div>
                    <img
                        src={edProgramsListPhoto}
                        alt="edProgramsListPhoto"
                        className="w-full"
                    />
                </div>
                <div className="p-[20px] pb-[10px]">
                    <p className="mb-[10px] break-words font-bold">
                        {item?.name}
                    </p>
                </div>
            </div>
            <div className="my-2 flex flex-wrap px-[20px]">
                <ul className="flex flex-wrap">
                    <li
                        key={0}
                        className="relative mr-2 mb-2"
                        onMouseOver={() => setShowTags(true)}
                    >
                        <div className="group flex h-7 w-7 items-center justify-center rounded-full border border-blue hover:border-orange">
                            <PenIcon className="h-[14px] w-[14px] fill-blue group-hover:fill-orange" />
                        </div>

                        {showTags && (
                            <div
                                className="absolute left-0 bottom-0 h-[160px] w-[160px] rounded-lg border border-blue bg-white p-4"
                                onMouseLeave={() => setShowTags(false)}
                            >
                                <ul className="flex h-full w-full flex-col overflow-y-scroll">
                                    {tagList
                                        .filter(
                                            (tag) =>
                                                !tagsIdList.includes(tag.id)
                                        )
                                        .map((itemTeg, keyTeg: number) => (
                                            <li key={keyTeg}>
                                                <div
                                                    className={
                                                        "text-left " +
                                                        (itemTeg === selectedTag
                                                            ? "text-black"
                                                            : "text-black")
                                                    }
                                                    onClick={() => {
                                                        attachTag(
                                                            item.id,
                                                            itemTeg.id
                                                        ).then(() =>
                                                            getMaterials()
                                                        );
                                                    }}
                                                >
                                                    <p className="cursor-pointer text-black hover:text-gray-500">
                                                        {itemTeg.name}
                                                    </p>
                                                </div>
                                            </li>
                                        ))}
                                </ul>
                            </div>
                        )}
                    </li>

                    {item?.tags?.map((tag) => (
                        <li
                            key={tag.id}
                            className="mr-2 mb-2 rounded-full bg-blue py-1 px-4 text-white"
                        >
                            {tag.name}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex justify-end p-[20px] pt-[10px]">
                <div className="flex gap-[2px]">
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                </div>
            </div>
        </li>
    );
};

export default MaterialsItem;
