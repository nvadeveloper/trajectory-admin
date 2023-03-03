import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as ProfileIcon } from "../../image/icon/UserId.svg";
import { ReactComponent as LogoutIcon } from "../../image/icon/Logout.svg";
import { ReactComponent as HomeIcon } from "../../image/icon/Home.svg";
import { ReactComponent as Logo } from "../../image/icon/Logo.svg";

type MenuItemType = {
    link: string;
    text: string;
    logo: React.ReactElement;
};

const style = {
    icon: "mx-auto h-[30px] group-hover:opacity-70",
};

const MenuItem: MenuItemType[] = [
    {
        link: "trajectories",
        text: "Главная",
        logo: <HomeIcon className={style.icon} />,
    },
    {
        link: "edprograms",
        text: "Учебные материаллы",
        logo: <ProfileIcon className={style.icon} />,
    },
];

const Header: React.FC = () => {
    return (
        <header className="sticky top-0 z-10 h-screen">
            <nav className="flex h-full w-[75px] flex-col bg-white xl:w-[100px]">
                <div className="mx-auto mt-6 mb-10">
                    <Link to="/admin">
                        <Logo className="cursor-pointer hover:opacity-70" />
                    </Link>
                </div>

                <ul className="flex grow flex-col">
                    {MenuItem.map((item: MenuItemType, key: number) => (
                        <li
                            className="group relative flex cursor-pointer flex-col hover:bg-[#F9FDFF]"
                            key={key}
                        >
                            <Link
                                className="inline h-full w-full p-4"
                                to={`/admin/${item.link}`}
                            >
                                <>{item.logo}</>
                                <div className="absolute left-20 top-5 hidden group-hover:flex">
                                    <div className="rounded bg-gray-900 py-2 px-4 text-center text-xs text-white shadow-lg">
                                        {item.text}
                                    </div>
                                </div>
                            </Link>
                        </li>
                    ))}
                    <li className="w-full grow" key="empty" />
                    <li
                        className="group relative cursor-pointer hover:bg-[#F9FDFF]"
                        key="LogoutIcon"
                    >
                        <div
                            className="w-full p-4"
                            onClick={() => {
                                localStorage.clear();
                                window.location.replace("/login");
                            }}
                        >
                            <LogoutIcon className={style.icon} />

                            <div className="absolute left-20 top-5 hidden group-hover:flex">
                                <div className="rounded bg-gray-900 py-2 px-4 text-center text-xs text-white shadow-lg">
                                    Выход
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
