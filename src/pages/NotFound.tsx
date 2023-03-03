import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
    return (
        <section className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center space-y-4">
                <p className="text-3xl font-bold">Some Error</p>
                <img
                    src="https://cdn.maximonline.ru/81/29/c6/8129c628ff626e08795517e31aed9a9f/426x213_0xac120005_7813223171529048401.gif"
                    alt="gif error"
                />
                <Link
                    to="/"
                    className="rounded bg-black py-2 px-4 text-white hover:bg-gray-700"
                >
                    <span>На главную</span>
                </Link>
            </div>
        </section>
    );
};

export default NotFound;
