import { ReactComponent as LargeTransparentLogoIcon } from "../../image/icon/LargeTransparentLogo.svg";

const SkeletonEditProfile: React.FC = () => (
    <section>
        <div className="relative flex h-screen w-[236px] flex-col justify-between bg-white lg:w-[250px] xl:w-[295px]">
            <div className="animate-pulse">
                <div className="mx-4 mt-9 h-6 rounded bg-slate-100"></div>
                <div className="mx-4 mt-4 h-10 rounded bg-slate-100"></div>
            </div>

            <div className="absolute top-64 flex w-full justify-center">
                <LargeTransparentLogoIcon className="w-[200px]" />
            </div>

            <div className="mb-20 flex animate-pulse justify-center space-x-2">
                <div className="flex h-10 w-10 rounded-full border-2 border-slate-100 bg-slate-100"></div>
                <div className="flex h-10 w-10 rounded-full border-2 border-slate-100 bg-slate-100"></div>
                {/* <div className="flex h-10 w-10 rounded-full border-2 border-slate-100 bg-slate-100"></div> */}
            </div>
        </div>
    </section>
);

export default SkeletonEditProfile;
