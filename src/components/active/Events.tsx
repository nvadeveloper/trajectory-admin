import React, { useEffect, useState } from "react";
import { IEvent } from "../../utils/models";
import { getEvent } from "../../api/requests/getEvent";

function Events() {
    const [events, setEvents] = useState<IEvent[]>([]);

    useEffect(() => {
        getEvent().then((res) => setEvents(res.data.results));
    }, []);

    return (
        <div className="relative w-[300px] rounded-r-xl border-l-[5px] border-blue bg-white shadow-[0_0_15px_rgba(115,189,233,0.2)] xl:w-[455px] ">
            <p className="p-[20px] pb-[10px] text-[18px] font-medium">
                События
            </p>
            <ul className="thin-scrollbar ml-[-5px] mr-[5px] h-[790px] w-auto">
                {events.map((event) => {
                    return (
                        <div className="group cursor-pointer border-l-[5px] border-blue bg-white py-[15px] pl-[20px] pr-[30px] text-sm hover:border-orange">
                            <p className="relative font-bold text-blue group-hover:text-orange">
                                <span className="absolute top-2 left-[-25px] h-[10px] w-[10px] rounded-full bg-blue group-hover:bg-orange" />
                                <p className="relative pt-[4px] text-[12px] font-medium text-blue group-hover:text-orange">
                                    {new Date(
                                        event.time_create
                                    ).toLocaleString()}
                                </p>
                            </p>
                            <p className="mt-[10px] text-justify text-[14px] font-normal">
                                {event.content}
                            </p>
                        </div>
                    );
                })}
            </ul>
        </div>
    );
}

export default Events;
