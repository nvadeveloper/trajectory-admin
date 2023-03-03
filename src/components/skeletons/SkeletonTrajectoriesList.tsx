const SkeletonTrajectoriesList: React.FC = () => (
    <section>
        <div className="px-[25px] pt-[30px] pb-[25px] xl:px-[55px]">
            <div className="flex min-h-[165px] w-full flex-row justify-between rounded-xl bg-white text-[16px] font-bold text-textblack shadow-[0_0_15px_0_rgba(115,189,233,0.2)]">
                <div className="rounded-l-xl border-r-2 border-l-2 border-blue p-4">
                    <div className="flex h-full w-[250px] animate-pulse flex-col justify-between xl:w-[336px]">
                        <div className="h-6 rounded bg-slate-100" />
                        <div className="h-[95px] rounded bg-slate-100" />
                    </div>
                </div>

                <div className="flex w-full animate-pulse flex-col justify-between p-4">
                    <div className="h-6 rounded bg-slate-100" />
                    <div className="h-[95px] rounded bg-slate-100" />
                </div>

                <div className="rounded-r-xl border-r-2 border-l-2 border-blue p-4">
                    <div className="flex h-full w-[250px] animate-pulse flex-col justify-between xl:w-[336px]">
                        <div className="h-6 rounded bg-slate-100" />
                        <div className="h-[95px] rounded bg-slate-100" />
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default SkeletonTrajectoriesList;
