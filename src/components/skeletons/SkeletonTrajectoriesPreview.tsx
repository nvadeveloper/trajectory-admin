const SkeletonTrajectoriesPreview: React.FC = () => (
    <>
        <section>
            <div className="px-[25px] pt-[30px] xl:px-[55px]">
                <div className="flex min-h-[165px] w-full flex-row justify-between rounded-t-xl bg-white text-[16px] font-bold text-textblack shadow-[0_0_15px_0_rgba(115,189,233,0.2)]">
                    <div className="rounded-tl-xl border-r-2 border-l-2 border-blue p-4">
                        <div className="flex h-full w-[250px] animate-pulse flex-col justify-between xl:w-[336px]">
                            <div className="h-6 rounded bg-slate-100" />
                            <div className="h-[95px] rounded bg-slate-100" />
                        </div>
                    </div>

                    <div className="flex w-full animate-pulse flex-col justify-between p-4">
                        <div className="h-6 rounded bg-slate-100" />
                        <div className="h-[95px] rounded bg-slate-100" />
                    </div>

                    <div className="rounded-tr-xl border-r-2 border-l-2 border-blue p-4">
                        <div className="flex h-full w-[250px] animate-pulse flex-col justify-between xl:w-[336px]">
                            <div className="h-6 rounded bg-slate-100" />
                            <div className="h-[95px] rounded bg-slate-100" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className="flex justify-between px-[25px] xl:px-[55px]">
                <div className="grid min-h-[450px] w-full grid-cols-2 border-2 border-b-0 border-blue shadow-[0_0_15px_0_rgba(115,189,233,0.2)]">
                    <section>
                        <div className="relative h-full bg-white">
                            <div className="p-5 pt-4">
                                <div className="h-6 animate-pulse rounded bg-slate-100"></div>
                            </div>

                            <div className="mx-5 my-3 h-[66px] animate-pulse rounded bg-slate-100"></div>
                        </div>
                    </section>

                    <section>
                        <div className="relative h-full border-l-2 border-blue bg-white">
                            <div className="p-5 pt-4">
                                <div className="h-6 animate-pulse rounded bg-slate-100"></div>
                            </div>

                            <div className="mx-5 my-3 h-[66px] animate-pulse rounded bg-slate-100"></div>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    </>
);

export default SkeletonTrajectoriesPreview;
