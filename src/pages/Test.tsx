import { useState } from "react";

const Test: React.FC = () => {
    const [step, setStep] = useState(1);

    return (
        <main className="container px-[25px] xl:px-[55px] xl:py-[30px]">
            {step === 1 && (
                <section className="flex h-full w-[1038px] rounded-[10px]">
                    <div className="h-full w-[150px] rounded-l-[10px] bg-blue"></div>
                    <div className="flex flex-col justify-between rounded-r-[10px] bg-white p-[25px]">
                        <div>
                            <p className="mb-[25px]">Создание траектории</p>
                            <div className="w-[695px] rounded-[5px] border border-blue">
                                <div className="bg-blue px-[30px] py-[5px] font-bold text-white">
                                    <p>Добавление траектории</p>
                                </div>
                                <div className="rounded-[5px] bg-white p-[20px]">
                                    <label htmlFor="name">
                                        Название траектории
                                    </label>
                                    <div className="relative">
                                        <input
                                            className="my-1 w-full rounded bg-[#F7FCFF] p-2 focus:outline-none"
                                            id="name"
                                            // {...register("name", {
                                            //     required: "Обязательно для заполнения",
                                            // })}
                                            type="text"
                                        />
                                    </div>

                                    <label htmlFor="description">
                                        Название траектории:
                                    </label>
                                    <div className="relative">
                                        <textarea
                                            className="my-1 w-full rounded bg-[#F7FCFF] p-2 focus:outline-none"
                                            id="description"
                                            rows={4}
                                            // {...register("description", {
                                            //     required: "Обязательно для заполнения",
                                            // })}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-[80px] flex w-full justify-end">
                                <button
                                    // type="submit"
                                    className="group relative rounded bg-base py-3 px-10 text-center text-white hover:bg-[#F7FCFF] hover:text-basetext hover:shadow-[10px_10px_25px_0_rgba(114,188,232,0.2)]"
                                >
                                    Создать траектоию
                                </button>
                            </div>
                        </div>
                        <div className="mx-auto flex">
                            <div className="flex space-x-[30px]">
                                <div className="h-[30px] w-[30px] rounded-full bg-base"></div>
                                <div
                                    className="h-[30px] w-[30px] rounded-full bg-base"
                                    onClick={() => setStep(2)}
                                ></div>
                            </div>
                        </div>
                    </div>
                </section>
            )}
            {step === 2 && (
                <section className="flex h-full w-[1038px] rounded-[10px]">
                    <div className="h-full w-[150px] rounded-l-[10px] bg-blue"></div>
                    <div className="flex flex-col justify-between rounded-r-[10px] bg-white p-[25px]">
                        <div>
                            <p className="mb-[25px]">Создание актива</p>
                            <div className="w-[695px] rounded-[5px] border border-blue">
                                <div className="bg-blue px-[30px] py-[5px] font-bold text-white">
                                    <p>Добавление актива</p>
                                </div>
                                <div className="rounded-[5px] bg-white p-[20px]">
                                    <label htmlFor="name">
                                        Название актива
                                    </label>
                                    <div className="relative">
                                        <input
                                            className="my-1 w-full rounded bg-[#F7FCFF] p-2 focus:outline-none"
                                            id="name"
                                            // {...register("name", {
                                            //     required: "Обязательно для заполнения",
                                            // })}
                                            type="text"
                                        />
                                    </div>

                                    <label htmlFor="description">
                                        Название траектории:
                                    </label>
                                    <div className="relative">
                                        <textarea
                                            className="my-1 w-full rounded bg-[#F7FCFF] p-2 focus:outline-none"
                                            id="description"
                                            rows={4}
                                            // {...register("description", {
                                            //     required: "Обязательно для заполнения",
                                            // })}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-[80px] flex w-full justify-end">
                                <button
                                    // type="submit"
                                    className="group relative rounded bg-base py-3 px-10 text-center text-white hover:bg-[#F7FCFF] hover:text-basetext hover:shadow-[10px_10px_25px_0_rgba(114,188,232,0.2)]"
                                >
                                    Создать траектоию
                                </button>
                            </div>
                        </div>
                        <div className="mx-auto flex">
                            <div className="flex space-x-[30px]">
                                <div
                                    className="h-[30px] w-[30px] rounded-full bg-base"
                                    onClick={() => setStep(1)}
                                ></div>
                                <div
                                    className="h-[30px] w-[30px] rounded-full bg-base"
                                    onClick={() => setStep(3)}
                                ></div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {step === 3 && (
                <section className="flex h-full w-[1038px] rounded-[10px]">
                    <div className="h-full w-[150px] rounded-l-[10px] bg-blue"></div>
                    <div className="flex flex-col justify-between rounded-r-[10px] bg-white p-[25px]">
                        <div>
                            <p className="mb-[25px]">Пользователи</p>
                            <div className="w-[695px] rounded-[5px] border border-blue">
                                <div className="bg-blue px-[30px] py-[5px] font-bold text-white">
                                    <p>Добавление актива</p>
                                </div>
                                <div className="rounded-[5px] bg-white p-[20px]">
                                    <label htmlFor="name">
                                        Название актива
                                    </label>
                                    <div className="relative">
                                        <input
                                            className="my-1 w-full rounded bg-[#F7FCFF] p-2 focus:outline-none"
                                            id="name"
                                            // {...register("name", {
                                            //     required: "Обязательно для заполнения",
                                            // })}
                                            type="text"
                                        />
                                    </div>

                                    <label htmlFor="description">
                                        Название траектории:
                                    </label>
                                    <div className="relative">
                                        <textarea
                                            className="my-1 w-full rounded bg-[#F7FCFF] p-2 focus:outline-none"
                                            id="description"
                                            rows={4}
                                            // {...register("description", {
                                            //     required: "Обязательно для заполнения",
                                            // })}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-[80px] flex w-full justify-end">
                                <button
                                    // type="submit"
                                    className="group relative rounded bg-base py-3 px-10 text-center text-white hover:bg-[#F7FCFF] hover:text-basetext hover:shadow-[10px_10px_25px_0_rgba(114,188,232,0.2)]"
                                >
                                    Создать траектоию
                                </button>
                            </div>
                        </div>
                        <div className="mx-auto flex">
                            <div className="flex space-x-[30px]">
                                <div
                                    className="h-[30px] w-[30px] rounded-full bg-base"
                                    onClick={() => setStep(2)}
                                ></div>
                                <div className="h-[30px] w-[30px] rounded-full bg-base"></div>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </main>
    );
};

export default Test;
