import React, { useState, useEffect, useMemo } from "react";
import AddTegButton from "../components/buttons/AddTegButton";
import MaterialsItem from "../components/material/Item";
import { ReactComponent as Magnifier } from "../image/icon/Magnifier.svg";
import EditMaterial from "../components/submenu/EditMaterial";
import { getTagList } from "../api/requests/getTagList";
import { getMaterials } from "../api/requests/getMaterials";
import { useStore } from "effector-react";
import { $edMaterialListStore } from "../utils/effecor/edMaterialList";
import { ITag } from "../utils/models";

const TYPES = [
    {
        title: "Все",
        type: "all",
    },
    {
        title: "Видео",
        type: "videocontent",
    },
    {
        title: "Статья",
        type: "articlecontent",
    },
    {
        title: "Scorm",
        type: "scormpackage",
    },
    {
        title: "PDF",
        type: "pdfcontent",
    },
    {
        title: "Веб-ресурс",
        type: "webresourcecontent",
    },
    {
        title: "Meeting",
        type: "meetingrecordcontent",
    },
    {
        title: "Квиз",
        type: "quiz",
    },
];

const Materials: React.FC = () => {
    const edMaterialList = useStore($edMaterialListStore);
    const [tags, setTags] = useState<ITag[]>([]);

    const [selectedType, setSelectedType] = useState({
        title: "Все",
        type: "all",
    });
    const [selectedTag, setSelectedTag] = useState<ITag | null>(null);
    const [searchText, setSearchText] = useState("");

    // когда будет много материалов нужно будет делать поиск на стороне сервера
    // через debounce и забирать материалы с пагинацией
    const getFilteredList = () => {
        const searchTextLC = searchText.toLowerCase();
        let filteredList = edMaterialList;

        if (selectedType.type !== "all")
            filteredList = edMaterialList.filter(
                (item) => item.content_type === selectedType.type
            );

        if (selectedTag)
            filteredList = filteredList.filter((item) => {
                for (const tag of item.tags)
                    if (tag.id === selectedTag.id) return true;
                return false;
            });

        if (searchText)
            filteredList = filteredList.filter((item) =>
                item.name.toLowerCase().includes(searchTextLC)
            );

        return filteredList;
    };

    const filteredList = useMemo(getFilteredList, [
        selectedType,
        selectedTag,
        searchText,
        edMaterialList,
    ]);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value);
        e.preventDefault();
    };

    useEffect(() => {
        getMaterials();
        getTagList(setTags);
    }, []);

    return (
        <>
            {edMaterialList && (
                <main className="flex grow">
                    <section className="thin-scrollbar flex h-screen grow overflow-y-scroll  pt-[25px] ">
                        <div className="flex grow flex-col">
                            <div>
                                <div className="flex justify-between px-[55px] pr-0 xl:pl-[55px]">
                                    <p className="text-xl">
                                        Список всех учебных материалов
                                    </p>

                                    <div className="mr-[55px] flex w-[455px] justify-end rounded-full border-[1px] border-solid border-base bg-white">
                                        <Magnifier className="my-[6px] ml-[16px] flex" />
                                        <input
                                            className="mx-[15px] flex grow resize-none bg-white py-[6px] text-[11px] leading-[11px] focus:outline-none"
                                            type="text"
                                            id="card-name"
                                            name="card-name"
                                            placeholder="Название материала..."
                                            size={30}
                                            onChange={handleSearch}
                                            // onChange={(e) => {console.log(e)}}
                                        />
                                    </div>
                                </div>

                                <section className="mt-[10px] px-[55px] pr-0 xl:pl-[55px]">
                                    <ul className="flex w-full scroll-pb-[5px] flex-row overflow-x-auto	pb-[15px]">
                                        {TYPES.map((item, key) => (
                                            <li
                                                key={key}
                                                className={
                                                    "mr-[10px] cursor-pointer border-b-4 p-2 first:pl-0 last:pr-0 " +
                                                    (item.title ===
                                                    selectedType.title
                                                        ? "border-base text-base"
                                                        : "border-transparent text-textblack")
                                                }
                                                onClick={() => {
                                                    setSelectedType(item);
                                                }}
                                            >
                                                <p>{item.title}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </section>

                                {tags && (
                                    <section className="px-[55px] pb-[10px] pr-0 xl:pl-[55px]">
                                        <p className="py-2">
                                            Теги учебных материалов
                                        </p>
                                        <ul className="flex w-full scroll-pb-[5px] flex-row flex-wrap pb-[15px]">
                                            <AddTegButton
                                                tagList={tags}
                                                setTagList={setTags}
                                            />
                                            {tags.map((item) => (
                                                <li key={item.id}>
                                                    <div
                                                        className={
                                                            "mr-[15px] min-w-[50px] cursor-pointer justify-center rounded-full px-[20px] py-[4px] " +
                                                            (item ===
                                                            selectedTag
                                                                ? "bg-accent text-white"
                                                                : "bg-base text-white")
                                                        }
                                                        onClick={() => {
                                                            if (
                                                                item ===
                                                                selectedTag
                                                            ) {
                                                                setSelectedTag(
                                                                    null
                                                                );
                                                            } else {
                                                                setSelectedTag(
                                                                    item
                                                                );
                                                            }
                                                        }}
                                                    >
                                                        <p className="text-center">
                                                            {item.name}
                                                        </p>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </section>
                                )}
                            </div>

                            {filteredList?.length ? (
                                <section className="">
                                    <ul className="flex flex-row flex-wrap gap-x-[25px] gap-y-[30px] pl-[55px] pt-[5px] pb-[30px] pr-0">
                                        {filteredList.map((item) => (
                                            <MaterialsItem
                                                item={item}
                                                tagList={tags}
                                                selectedTag={selectedTag}
                                            />
                                        ))}
                                    </ul>
                                </section>
                            ) : (
                                <p className="px-[25px] xl:pl-[50px]">
                                    Нет учебных материалов
                                </p>
                            )}
                        </div>
                    </section>

                    <EditMaterial />
                </main>
            )}
        </>
    );
};

export default Materials;
