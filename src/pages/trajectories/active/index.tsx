import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getThreatList } from "../../../api/requests/getThreatList";
import { getActive } from "../../../api/requests/getActive";
import EditActive from "../../../components/submenu/EditActive";
import Active from "../../../components/active";

const ActivePage: React.FC = () => {
    const { activeId } = useParams() as { activeId: string };
    useEffect(() => {
        getActive(activeId);
        getThreatList(activeId);
    }, [activeId]);

    return (
        <div className="flex grow">
            <EditActive />
            <Active />
        </div>
    );
};

export default ActivePage;
