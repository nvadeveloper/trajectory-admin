import { Link, useParams } from "react-router-dom";
import studentPhoto from "../../image/studentPhoto.png";

const BestEmployeeList: React.FC = () => {
    const { trajectoriesId } = useParams() as { trajectoriesId: string };

    return (
        <div>
            <Link to={`/admin/trajectories/${trajectoriesId}/employees`}>
                <p className="mb-[10px] text-[14px] ">
                    ТОП 5 сотрудников по рейтингу
                </p>
                <ul className="relative flex h-[53px]">
                    <li
                        className="absolute left-0 h-[53px] w-[53px] rounded-full border-2 border-white"
                        key={1}
                    >
                        <img
                            src={studentPhoto}
                            alt="studentPhoto"
                            className="h-full w-full"
                        />
                    </li>
                    <li
                        className="absolute left-[38px] h-[53px] w-[53px] rounded-full border-2 border-white"
                        key={2}
                    >
                        <img
                            src={studentPhoto}
                            alt="studentPhoto"
                            className="h-full w-full"
                        />
                    </li>
                    <li
                        className="absolute left-[73px] h-[53px] w-[53px] rounded-full border-2 border-white"
                        key={3}
                    >
                        <img
                            src={studentPhoto}
                            alt="studentPhoto"
                            className="h-full w-full"
                        />
                    </li>
                    <li
                        className="absolute left-[108px] h-[53px] w-[53px] rounded-full border-2 border-white"
                        key={4}
                    >
                        <img
                            src={studentPhoto}
                            alt="studentPhoto"
                            className="h-full w-full"
                        />
                    </li>
                    <li
                        className="absolute left-[143px] h-[53px] w-[53px] rounded-full border-2 border-white"
                        key={5}
                    >
                        <img
                            src={studentPhoto}
                            alt="studentPhoto"
                            className="h-full w-full"
                        />
                    </li>
                </ul>
            </Link>
        </div>
    );
};

export default BestEmployeeList;
