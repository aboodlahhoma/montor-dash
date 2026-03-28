import { Navigate, Route, Routes } from "react-router-dom";
import { CommonDif } from "../lib/commonDifinitions";
import BlankPage from "../pages/BlankPage";
import EmployeeDetails from "../pages/EmployeeDetails";
import Employees from "../pages/Employees";
import LiveMonitoring from "../pages/LiveMonitoring";
import OverView from "../pages/OverView";

const routeComponents = {
    overview: <OverView />,
    monitoring: <LiveMonitoring />,
    employees: <Employees />,
    "employee-details": <EmployeeDetails />
};

export default function ApplicationRoutes() {
    return (
        <Routes>
            {CommonDif.routeDefinitions.map((route) => (
                <Route
                    key={route.key}
                    path={route.path}
                    element={routeComponents[route.key] || <BlankPage />}
                />
            ))}
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
}
