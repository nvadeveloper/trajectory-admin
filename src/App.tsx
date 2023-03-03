import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Trajectories from "./pages/trajectories";
import Active from "./pages/trajectories/active";
import NotFound from "./pages/NotFound";
import Trajectory from "./pages/trajectories/Trajectory";
import Employees from "./pages/trajectories/Employees";

import Materials from "./pages/Materials";
import Curriculum from "./pages/trajectories/curriculum";

import IsMobileLayout from "./layouts/IsMobileLayout";
import MainLayout from "./layouts/MainLayout";

import { Toaster } from "react-hot-toast";
import useVerification from "./api/requests/useVerification";
import Test from "./pages/Test";
import { getVerification } from "./api/requests/getVerification";

const App: React.FC = () => {
    const { isError } = useVerification();
    if (isError) return <div>Request Failed</div>;

    // useEffect(() => {
    //     getVerification();
    // }, []);

    return (
        <IsMobileLayout>
            <Routes>
                <Route path="/admin/" element={<MainLayout />}>
                    <Route index element={<Trajectories />} />
                    <Route path="test" element={<Test />} />
                    <Route path="edprograms" element={<Materials />} />
                    <Route path="trajectories" element={<Trajectories />} />
                    <Route
                        path="trajectories/:trajectoriesId"
                        element={<Trajectory />}
                    />
                    <Route
                        path="trajectories/:trajectoriesId/Employees"
                        element={<Employees />}
                    />
                    <Route
                        path="trajectories/:trajectoriesId/active/:activeId"
                        element={<Active />}
                    />
                    <Route
                        path="trajectories/:trajectoriesId/curriculum/:curriculumId"
                        element={<Curriculum />}
                    />
                    <Route path="NotFound" element={<NotFound />} />
                </Route>

                <Route path="*" element={<NotFound />} />
            </Routes>
            <Toaster />
        </IsMobileLayout>
    );
};

export default App;
