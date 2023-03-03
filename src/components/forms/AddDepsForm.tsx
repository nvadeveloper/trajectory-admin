import { useState } from "react";
import { toast } from "react-hot-toast";
import useSWR from "swr";
import api from "../../api/baseAPI";

function getDeps(url: string) {
    return api
        .request({
            method: "get",
            url: url,
        })
        .then((res) => res.data);
}

function useDeps(id: number | string) {
    const { data, error, mutate } = useSWR(
        `/ed_program_content/${id}/current_dependencies`,
        getDeps
    );

    return {
        data: data,
        isLoading: !error && !data,
        isError: error,
        mutate: mutate,
    };
}

type Props = {
    program: any;
    material: any;
};

function AddDepsForm({ program, material }: Props) {
    const { data: deps, isLoading, mutate } = useDeps(material.id);
    const [selected, setSelected] = useState(
        program
            .map((bound: any) => ({
                selected: false,
                id: bound.id,
                name: bound.content.name,
            }))
            .filter((bound: any) => bound.name !== material.content.name)
    );

    if (isLoading) return <p>Загрузка</p>;

    function handleAddGroup() {
        const newGroup = [];
        for (const bound of selected) {
            if (bound.selected) newGroup.push(bound.id);
        }

        api.request({
            method: "post",
            url: "/content/dependence_group/add",
            data: {
                bound: material.id,
                depends_on_bounds: newGroup,
            },
        })
            .then(() => mutate())
            .then(() => toast.success("Успешно"));
    }

    function handleRemoveGroup(groupId: any) {
        if (confirm("Вы точно хотите удалить группу?")) {
            api.request({
                method: "delete",
                url: `/content/dependence_group/${groupId}/delete`,
            })
                .then(() => mutate())
                .then(() => toast.success("Успешно"));
        }
    }

    function handleAddMaterialClick(clickedBound: any) {
        setSelected(
            selected.map((bound: any) =>
                bound.id === clickedBound.id
                    ? { ...bound, selected: !bound.selected }
                    : bound
            )
        );
    }

    return (
        <div className="max-h-[60vh] space-y-2 overflow-y-auto p-8 pt-4 text-xl">
            <p>
                Доступные группы зависимостей материала {material.content.name}:
            </p>
            {deps["current_dependencies_groups"].map((group: any, key: any) => (
                <details className="rounded-md border p-2" key={key}>
                    <summary className="flex cursor-pointer select-none justify-between">
                        Группа {key}
                        <button
                            onClick={() => handleRemoveGroup(group.id)}
                            className="text-base hover:brightness-75"
                        >
                            Удалить группу
                        </button>
                    </summary>
                    <ul className="ml-4">
                        {group["depends_on_bounds"].map(
                            (dep: any, depKey: number) => (
                                <li
                                    className="flex justify-between hover:bg-zinc-100"
                                    key={depKey}
                                >
                                    {dep.content.name}
                                </li>
                            )
                        )}
                    </ul>
                </details>
            ))}
            <div className="rounded-md border p-2">
                Создание новой группы
                <ul className="ml-4">
                    {selected.map((bound: any, key: number) => (
                        <li
                            key={key}
                            onClick={() => handleAddMaterialClick(bound)}
                            className={
                                "cursor-pointer select-none " +
                                (bound.selected && " bg-sky-100")
                            }
                        >
                            {bound.name}
                        </li>
                    ))}
                </ul>
                <button
                    onClick={handleAddGroup}
                    disabled={
                        selected.filter((bound: any) => bound.selected)
                            .length === 0
                    }
                    className="mt-2 w-full rounded-md bg-base py-2 px-4 text-white disabled:bg-zinc-200 disabled:text-zinc-700 hover:brightness-90"
                >
                    Добавить группу
                </button>
            </div>
        </div>
    );
}

export default AddDepsForm;
