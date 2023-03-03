import { Outlet } from "react-router-dom";
import Header from "../components/utils/Header";

const MainLayout: React.FC = () => {
    return (
        <div className="flex bg-lightblue text-textblack">
            <Header />
            <Outlet />
        </div>
    );
};

export default MainLayout;
