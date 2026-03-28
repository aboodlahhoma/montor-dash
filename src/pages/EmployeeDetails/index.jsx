import { useParams } from "react-router-dom";
import EmployeeDetailsHeroSection from "../../ui/EmployeeDetails/EmployeeDetailsHeroSection";
import EmployeeDetailsStatsSection from "../../ui/EmployeeDetails/EmployeeDetailsStatsSection";
import EmployeeDetailsWorkspaceSection from "../../ui/EmployeeDetails/EmployeeDetailsWorkspaceSection";
import { getEmployeeById } from "../../ui/Employees/data";

export default function EmployeeDetails() {
    const { employeeId } = useParams();
    const employee = getEmployeeById(employeeId);

    if (!employee) {
        return (
            <div className="rounded-[32px] border border-dashed border-slate-300 bg-slate-50 px-6 py-14 text-center">
                <p className="text-base font-semibold text-slate-950">
                    Employee not found
                </p>
                <p className="mt-2 text-sm text-slate-500">
                    The selected employee profile could not be loaded from the
                    current dataset.
                </p>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <EmployeeDetailsHeroSection employee={employee} />
            <EmployeeDetailsStatsSection employee={employee} />
            <EmployeeDetailsWorkspaceSection employee={employee} />
        </div>
    );
}
