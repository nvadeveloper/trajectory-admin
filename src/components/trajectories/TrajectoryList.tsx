import { Link } from "react-router-dom";
import useTrajectoriesList from "../../api/requests/useTrajectoriesList";
import SkeletonTrajectoriesList from "../skeletons/SkeletonTrajectoriesList";
import { ReactComponent as PulsIcon } from "../../image/icon/Puls.svg";
import { ReactComponent as MediumLogoIcon } from "../../image/icon/MediumLogo.svg";
import BestEmployeeList from "./BestEmployeeList";

const TrajectoryList: React.FC = () => {
    const { trajectoriesList, isError, isLoading } = useTrajectoriesList();
    if (isError || isLoading) return <SkeletonTrajectoriesList />;

    return (
        <ul className="thin-scrollbar flex h-full w-full flex-col space-y-[25px] overflow-y-scroll px-[25px] pt-[30px] pb-[25px] xl:px-[55px]">
            {trajectoriesList !== undefined &&
                trajectoriesList.map((item) => (
                    <li key={item.id}>
                        <Link
                            to={`/admin/trajectories/${item.id}`}
                            className="group flex h-full min-h-[165px] w-full flex-row justify-between rounded-xl bg-white text-[16px] font-bold text-textblack hover:shadow-[0_0_15px_0_rgba(115,189,233,0.2)]"
                        >
                            <div className="h-full rounded-l-xl border-r-2 border-l-2 border-blue bg-blue p-4 text-white group-hover:bg-white group-hover:text-textblack">
                                <div className="flex h-full w-[250px] flex-col justify-between xl:w-[336px]">
                                    <p>{item.name}</p>
                                    <BestEmployeeList />
                                </div>
                            </div>

                            <div className="box-border w-full border-y-2 border-y-blue p-4 group-hover:border-y-white">
                                <p className="mb-[10px] flex">
                                    <PulsIcon className="mr-[5px] mt-[3px] stroke-blue" />
                                    Активность профиля
                                </p>
                                <div className="grid grid-cols-4 text-[14px]">
                                    <div className="flex flex-row gap-[12px]">
                                        <div className="h-full w-[10px] rounded-full shadow-[0_0_5px_0_rgba(115,189,233,0.2)]" />
                                        <div className="flex flex-col gap-[12px]">
                                            <svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M21.8382 11.1263C22.0182 9.2137 22.1082 8.25739 21.781 7.86207C21.604 7.64823 21.3633 7.5172 21.106 7.4946C20.6303 7.45282 20.0329 8.1329 18.8381 9.49307C18.2202 10.1965 17.9113 10.5482 17.5666 10.6027C17.3757 10.6328 17.1811 10.6018 17.0047 10.5131C16.6865 10.3529 16.4743 9.91812 16.0499 9.04851L13.8131 4.46485C13.0112 2.82162 12.6102 2 12 2C11.3898 2 10.9888 2.82162 10.1869 4.46486L7.95007 9.04852C7.5257 9.91812 7.31351 10.3529 6.99526 10.5131C6.81892 10.6018 6.62434 10.6328 6.43337 10.6027C6.08872 10.5482 5.77977 10.1965 5.16187 9.49307C3.96708 8.1329 3.36968 7.45282 2.89399 7.4946C2.63666 7.5172 2.39598 7.64823 2.21899 7.86207C1.8918 8.25739 1.9818 9.2137 2.16181 11.1263L2.391 13.5616C2.76865 17.5742 2.95748 19.5805 4.14009 20.7902C5.32271 22 7.09517 22 10.6401 22H13.3599C16.9048 22 18.6773 22 19.8599 20.7902C20.7738 19.8553 21.0942 18.4447 21.367 16"
                                                    stroke="#73BDE9"
                                                    stroke-width="1.5"
                                                    stroke-linecap="round"
                                                />
                                                <path
                                                    d="M9 18H15"
                                                    stroke="#E9A573"
                                                    stroke-width="1.5"
                                                    stroke-linecap="round"
                                                />
                                            </svg>
                                            <p>
                                                <span className="text-[20px] text-[#EC6158]">
                                                    35
                                                </span>
                                                /328
                                            </p>
                                            <p className="text-blue">
                                                Достижения
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex flex-row gap-[12px]">
                                        <div className="h-full w-[10px] rounded-full shadow-[0_0_5px_0_rgba(115,189,233,0.2)]" />
                                        <div className="flex flex-col gap-[12px]">
                                            <svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M21.8382 11.1263C22.0182 9.2137 22.1082 8.25739 21.781 7.86207C21.604 7.64823 21.3633 7.5172 21.106 7.4946C20.6303 7.45282 20.0329 8.1329 18.8381 9.49307C18.2202 10.1965 17.9113 10.5482 17.5666 10.6027C17.3757 10.6328 17.1811 10.6018 17.0047 10.5131C16.6865 10.3529 16.4743 9.91812 16.0499 9.04851L13.8131 4.46485C13.0112 2.82162 12.6102 2 12 2C11.3898 2 10.9888 2.82162 10.1869 4.46486L7.95007 9.04852C7.5257 9.91812 7.31351 10.3529 6.99526 10.5131C6.81892 10.6018 6.62434 10.6328 6.43337 10.6027C6.08872 10.5482 5.77977 10.1965 5.16187 9.49307C3.96708 8.1329 3.36968 7.45282 2.89399 7.4946C2.63666 7.5172 2.39598 7.64823 2.21899 7.86207C1.8918 8.25739 1.9818 9.2137 2.16181 11.1263L2.391 13.5616C2.76865 17.5742 2.95748 19.5805 4.14009 20.7902C5.32271 22 7.09517 22 10.6401 22H13.3599C16.9048 22 18.6773 22 19.8599 20.7902C20.7738 19.8553 21.0942 18.4447 21.367 16"
                                                    stroke="#73BDE9"
                                                    stroke-width="1.5"
                                                    stroke-linecap="round"
                                                />
                                                <path
                                                    d="M9 18H15"
                                                    stroke="#E9A573"
                                                    stroke-width="1.5"
                                                    stroke-linecap="round"
                                                />
                                            </svg>
                                            <p>
                                                <span className="text-[20px] text-[#0B7052]">
                                                    2
                                                </span>
                                                /22
                                            </p>
                                            <p className="text-blue">
                                                Метрика 2
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex flex-row gap-[12px]">
                                        <div className="h-full w-[10px] rounded-full shadow-[0_0_5px_0_rgba(115,189,233,0.2)]" />
                                        <div className="flex flex-col gap-[12px]">
                                            <svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M8 9H16"
                                                    stroke="#E9A473"
                                                    stroke-width="1.5"
                                                    stroke-linecap="round"
                                                />
                                                <path
                                                    d="M8 13H14"
                                                    stroke="#E9A473"
                                                    stroke-width="1.5"
                                                    stroke-linecap="round"
                                                />
                                                <path
                                                    d="M13.0867 21.3877L13.7321 21.7697L13.7321 21.7697L13.0867 21.3877ZM13.6288 20.4718L12.9833 20.0898L12.9833 20.0898L13.6288 20.4718ZM10.3712 20.4718L9.72579 20.8539L9.72579 20.8539L10.3712 20.4718ZM10.9133 21.3877L11.5587 21.0057L11.5587 21.0057L10.9133 21.3877ZM1.25 10.5C1.25 10.9142 1.58579 11.25 2 11.25C2.41421 11.25 2.75 10.9142 2.75 10.5H1.25ZM3.07351 15.6264C2.915 15.2437 2.47627 15.062 2.09359 15.2205C1.71091 15.379 1.52918 15.8177 1.68769 16.2004L3.07351 15.6264ZM7.78958 18.9915L7.77666 19.7413L7.77666 19.7413L7.78958 18.9915ZM5.08658 18.6194L4.79957 19.3123L4.79957 19.3123L5.08658 18.6194ZM21.6194 15.9134L22.3123 16.2004L22.3123 16.2004L21.6194 15.9134ZM16.2104 18.9915L16.1975 18.2416L16.1975 18.2416L16.2104 18.9915ZM18.9134 18.6194L19.2004 19.3123L19.2004 19.3123L18.9134 18.6194ZM19.6125 2.7368L19.2206 3.37628L19.2206 3.37628L19.6125 2.7368ZM21.2632 4.38751L21.9027 3.99563L21.9027 3.99563L21.2632 4.38751ZM4.38751 2.7368L3.99563 2.09732L3.99563 2.09732L4.38751 2.7368ZM2.7368 4.38751L2.09732 3.99563L2.09732 3.99563L2.7368 4.38751ZM9.40279 19.2098L9.77986 18.5615L9.77986 18.5615L9.40279 19.2098ZM13.7321 21.7697L14.2742 20.8539L12.9833 20.0898L12.4412 21.0057L13.7321 21.7697ZM9.72579 20.8539L10.2679 21.7697L11.5587 21.0057L11.0166 20.0898L9.72579 20.8539ZM12.4412 21.0057C12.2485 21.3313 11.7515 21.3313 11.5587 21.0057L10.2679 21.7697C11.0415 23.0767 12.9585 23.0767 13.7321 21.7697L12.4412 21.0057ZM10.5 2.75H13.5V1.25H10.5V2.75ZM21.25 10.5V11.5H22.75V10.5H21.25ZM7.8025 18.2416C6.54706 18.2199 5.88923 18.1401 5.37359 17.9265L4.79957 19.3123C5.60454 19.6457 6.52138 19.7197 7.77666 19.7413L7.8025 18.2416ZM1.68769 16.2004C2.27128 17.6093 3.39066 18.7287 4.79957 19.3123L5.3736 17.9265C4.33223 17.4951 3.50486 16.6678 3.07351 15.6264L1.68769 16.2004ZM21.25 11.5C21.25 12.6751 21.2496 13.5189 21.2042 14.1847C21.1592 14.8438 21.0726 15.2736 20.9265 15.6264L22.3123 16.2004C22.5468 15.6344 22.6505 15.0223 22.7007 14.2868C22.7504 13.5581 22.75 12.6546 22.75 11.5H21.25ZM16.2233 19.7413C17.4786 19.7197 18.3955 19.6457 19.2004 19.3123L18.6264 17.9265C18.1108 18.1401 17.4529 18.2199 16.1975 18.2416L16.2233 19.7413ZM20.9265 15.6264C20.4951 16.6678 19.6678 17.4951 18.6264 17.9265L19.2004 19.3123C20.6093 18.7287 21.7287 17.6093 22.3123 16.2004L20.9265 15.6264ZM13.5 2.75C15.1512 2.75 16.337 2.75079 17.2619 2.83873C18.1757 2.92561 18.7571 3.09223 19.2206 3.37628L20.0044 2.09732C19.2655 1.64457 18.4274 1.44279 17.4039 1.34547C16.3915 1.24921 15.1222 1.25 13.5 1.25V2.75ZM22.75 10.5C22.75 8.87781 22.7508 7.6085 22.6545 6.59611C22.5572 5.57256 22.3554 4.73445 21.9027 3.99563L20.6237 4.77938C20.9078 5.24291 21.0744 5.82434 21.1613 6.73809C21.2492 7.663 21.25 8.84876 21.25 10.5H22.75ZM19.2206 3.37628C19.7925 3.72672 20.2733 4.20752 20.6237 4.77938L21.9027 3.99563C21.4286 3.22194 20.7781 2.57144 20.0044 2.09732L19.2206 3.37628ZM10.5 1.25C8.87781 1.25 7.6085 1.24921 6.59611 1.34547C5.57256 1.44279 4.73445 1.64457 3.99563 2.09732L4.77938 3.37628C5.24291 3.09223 5.82434 2.92561 6.73809 2.83873C7.663 2.75079 8.84876 2.75 10.5 2.75V1.25ZM2.75 10.5C2.75 8.84876 2.75079 7.663 2.83873 6.73809C2.92561 5.82434 3.09223 5.24291 3.37628 4.77938L2.09732 3.99563C1.64457 4.73445 1.44279 5.57256 1.34547 6.59611C1.24921 7.6085 1.25 8.87781 1.25 10.5H2.75ZM3.99563 2.09732C3.22194 2.57144 2.57144 3.22194 2.09732 3.99563L3.37628 4.77938C3.72672 4.20752 4.20752 3.72672 4.77938 3.37628L3.99563 2.09732ZM11.0166 20.0898C10.8136 19.7468 10.6354 19.4441 10.4621 19.2063C10.2795 18.9559 10.0702 18.7304 9.77986 18.5615L9.02572 19.8582C9.07313 19.8857 9.13772 19.936 9.24985 20.0898C9.37122 20.2564 9.50835 20.4865 9.72579 20.8539L11.0166 20.0898ZM7.77666 19.7413C8.21575 19.7489 8.49387 19.7545 8.70588 19.7779C8.90399 19.7999 8.98078 19.832 9.02572 19.8582L9.77986 18.5615C9.4871 18.3912 9.18246 18.3215 8.87097 18.287C8.57339 18.2541 8.21375 18.2487 7.8025 18.2416L7.77666 19.7413ZM14.2742 20.8539C14.4916 20.4865 14.6287 20.2564 14.7501 20.0898C14.8622 19.936 14.9268 19.8857 14.9742 19.8582L14.2201 18.5615C13.9298 18.7304 13.7204 18.9559 13.5379 19.2063C13.3646 19.4441 13.1864 19.7468 12.9833 20.0898L14.2742 20.8539ZM16.1975 18.2416C15.7862 18.2487 15.4266 18.2541 15.129 18.287C14.8175 18.3215 14.5129 18.3912 14.2201 18.5615L14.9742 19.8582C15.0192 19.832 15.096 19.7999 15.2941 19.7779C15.5061 19.7545 15.7842 19.7489 16.2233 19.7413L16.1975 18.2416Z"
                                                    fill="#73BDE9"
                                                />
                                            </svg>
                                            <p>
                                                <span className="text-[20px] text-blue">
                                                    21
                                                </span>
                                            </p>
                                            <p className="text-blue">
                                                Метрика 3
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex flex-row gap-[12px]">
                                        <div className="h-full w-[10px] rounded-full shadow-[0_0_5px_0_rgba(115,189,233,0.2)]" />
                                        <div className="flex flex-col gap-[12px]">
                                            <svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M8 9H16"
                                                    stroke="#E9A473"
                                                    stroke-width="1.5"
                                                    stroke-linecap="round"
                                                />
                                                <path
                                                    d="M8 13H14"
                                                    stroke="#E9A473"
                                                    stroke-width="1.5"
                                                    stroke-linecap="round"
                                                />
                                                <path
                                                    d="M13.0867 21.3877L13.7321 21.7697L13.7321 21.7697L13.0867 21.3877ZM13.6288 20.4718L12.9833 20.0898L12.9833 20.0898L13.6288 20.4718ZM10.3712 20.4718L9.72579 20.8539L9.72579 20.8539L10.3712 20.4718ZM10.9133 21.3877L11.5587 21.0057L11.5587 21.0057L10.9133 21.3877ZM1.25 10.5C1.25 10.9142 1.58579 11.25 2 11.25C2.41421 11.25 2.75 10.9142 2.75 10.5H1.25ZM3.07351 15.6264C2.915 15.2437 2.47627 15.062 2.09359 15.2205C1.71091 15.379 1.52918 15.8177 1.68769 16.2004L3.07351 15.6264ZM7.78958 18.9915L7.77666 19.7413L7.77666 19.7413L7.78958 18.9915ZM5.08658 18.6194L4.79957 19.3123L4.79957 19.3123L5.08658 18.6194ZM21.6194 15.9134L22.3123 16.2004L22.3123 16.2004L21.6194 15.9134ZM16.2104 18.9915L16.1975 18.2416L16.1975 18.2416L16.2104 18.9915ZM18.9134 18.6194L19.2004 19.3123L19.2004 19.3123L18.9134 18.6194ZM19.6125 2.7368L19.2206 3.37628L19.2206 3.37628L19.6125 2.7368ZM21.2632 4.38751L21.9027 3.99563L21.9027 3.99563L21.2632 4.38751ZM4.38751 2.7368L3.99563 2.09732L3.99563 2.09732L4.38751 2.7368ZM2.7368 4.38751L2.09732 3.99563L2.09732 3.99563L2.7368 4.38751ZM9.40279 19.2098L9.77986 18.5615L9.77986 18.5615L9.40279 19.2098ZM13.7321 21.7697L14.2742 20.8539L12.9833 20.0898L12.4412 21.0057L13.7321 21.7697ZM9.72579 20.8539L10.2679 21.7697L11.5587 21.0057L11.0166 20.0898L9.72579 20.8539ZM12.4412 21.0057C12.2485 21.3313 11.7515 21.3313 11.5587 21.0057L10.2679 21.7697C11.0415 23.0767 12.9585 23.0767 13.7321 21.7697L12.4412 21.0057ZM10.5 2.75H13.5V1.25H10.5V2.75ZM21.25 10.5V11.5H22.75V10.5H21.25ZM7.8025 18.2416C6.54706 18.2199 5.88923 18.1401 5.37359 17.9265L4.79957 19.3123C5.60454 19.6457 6.52138 19.7197 7.77666 19.7413L7.8025 18.2416ZM1.68769 16.2004C2.27128 17.6093 3.39066 18.7287 4.79957 19.3123L5.3736 17.9265C4.33223 17.4951 3.50486 16.6678 3.07351 15.6264L1.68769 16.2004ZM21.25 11.5C21.25 12.6751 21.2496 13.5189 21.2042 14.1847C21.1592 14.8438 21.0726 15.2736 20.9265 15.6264L22.3123 16.2004C22.5468 15.6344 22.6505 15.0223 22.7007 14.2868C22.7504 13.5581 22.75 12.6546 22.75 11.5H21.25ZM16.2233 19.7413C17.4786 19.7197 18.3955 19.6457 19.2004 19.3123L18.6264 17.9265C18.1108 18.1401 17.4529 18.2199 16.1975 18.2416L16.2233 19.7413ZM20.9265 15.6264C20.4951 16.6678 19.6678 17.4951 18.6264 17.9265L19.2004 19.3123C20.6093 18.7287 21.7287 17.6093 22.3123 16.2004L20.9265 15.6264ZM13.5 2.75C15.1512 2.75 16.337 2.75079 17.2619 2.83873C18.1757 2.92561 18.7571 3.09223 19.2206 3.37628L20.0044 2.09732C19.2655 1.64457 18.4274 1.44279 17.4039 1.34547C16.3915 1.24921 15.1222 1.25 13.5 1.25V2.75ZM22.75 10.5C22.75 8.87781 22.7508 7.6085 22.6545 6.59611C22.5572 5.57256 22.3554 4.73445 21.9027 3.99563L20.6237 4.77938C20.9078 5.24291 21.0744 5.82434 21.1613 6.73809C21.2492 7.663 21.25 8.84876 21.25 10.5H22.75ZM19.2206 3.37628C19.7925 3.72672 20.2733 4.20752 20.6237 4.77938L21.9027 3.99563C21.4286 3.22194 20.7781 2.57144 20.0044 2.09732L19.2206 3.37628ZM10.5 1.25C8.87781 1.25 7.6085 1.24921 6.59611 1.34547C5.57256 1.44279 4.73445 1.64457 3.99563 2.09732L4.77938 3.37628C5.24291 3.09223 5.82434 2.92561 6.73809 2.83873C7.663 2.75079 8.84876 2.75 10.5 2.75V1.25ZM2.75 10.5C2.75 8.84876 2.75079 7.663 2.83873 6.73809C2.92561 5.82434 3.09223 5.24291 3.37628 4.77938L2.09732 3.99563C1.64457 4.73445 1.44279 5.57256 1.34547 6.59611C1.24921 7.6085 1.25 8.87781 1.25 10.5H2.75ZM3.99563 2.09732C3.22194 2.57144 2.57144 3.22194 2.09732 3.99563L3.37628 4.77938C3.72672 4.20752 4.20752 3.72672 4.77938 3.37628L3.99563 2.09732ZM11.0166 20.0898C10.8136 19.7468 10.6354 19.4441 10.4621 19.2063C10.2795 18.9559 10.0702 18.7304 9.77986 18.5615L9.02572 19.8582C9.07313 19.8857 9.13772 19.936 9.24985 20.0898C9.37122 20.2564 9.50835 20.4865 9.72579 20.8539L11.0166 20.0898ZM7.77666 19.7413C8.21575 19.7489 8.49387 19.7545 8.70588 19.7779C8.90399 19.7999 8.98078 19.832 9.02572 19.8582L9.77986 18.5615C9.4871 18.3912 9.18246 18.3215 8.87097 18.287C8.57339 18.2541 8.21375 18.2487 7.8025 18.2416L7.77666 19.7413ZM14.2742 20.8539C14.4916 20.4865 14.6287 20.2564 14.7501 20.0898C14.8622 19.936 14.9268 19.8857 14.9742 19.8582L14.2201 18.5615C13.9298 18.7304 13.7204 18.9559 13.5379 19.2063C13.3646 19.4441 13.1864 19.7468 12.9833 20.0898L14.2742 20.8539ZM16.1975 18.2416C15.7862 18.2487 15.4266 18.2541 15.129 18.287C14.8175 18.3215 14.5129 18.3912 14.2201 18.5615L14.9742 19.8582C15.0192 19.832 15.096 19.7999 15.2941 19.7779C15.5061 19.7545 15.7842 19.7489 16.2233 19.7413L16.1975 18.2416Z"
                                                    fill="#73BDE9"
                                                />
                                            </svg>
                                            <p>
                                                <span className="text-[20px] text-blue">
                                                    21
                                                </span>
                                            </p>
                                            <p className="text-blue">
                                                Метрика 3
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="relative rounded-r-xl border-r-2 border-l-2 border-blue bg-blue p-4 text-white group-hover:bg-white group-hover:text-textblack">
                                <div className="flex h-full w-[250px] flex-col justify-between xl:w-[336px]">
                                    <p className="flex">
                                        <PulsIcon className="mr-[5px] mt-[3px] stroke-white group-hover:stroke-blue" />
                                        Сотрудников онлайн
                                    </p>
                                    <p className="text-[48px]">{item.online}</p>
                                </div>
                                <MediumLogoIcon className="absolute bottom-[10px] right-[10px] fill-white group-hover:fill-blue" />
                            </div>
                        </Link>
                    </li>
                ))}
        </ul>
    );
};

export default TrajectoryList;
