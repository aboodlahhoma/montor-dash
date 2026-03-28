import { useState } from "react";
import EmployeesHeroSection from "../../ui/Employees/EmployeesHeroSection";
import EmployeesStatsSection from "../../ui/Employees/EmployeesStatsSection";
import EmployeesTableSection from "../../ui/Employees/EmployeesTableSection";
import {
    employeeDirectory,
    employeeStatusOptions
} from "../../ui/Employees/data";

export default function Employees() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedTeam, setSelectedTeam] = useState("All teams");
    const [selectedStatus, setSelectedStatus] = useState("all");

    const teamOptions = [
        "All teams",
        ...Array.from(new Set(employeeDirectory.map((item) => item.team)))
    ];

    const filteredEmployees = employeeDirectory.filter((employee) => {
        const matchesSearch =
            searchTerm.trim() === "" ||
            [employee.name, employee.email, employee.role]
                .join(" ")
                .toLowerCase()
                .includes(searchTerm.toLowerCase());

        const matchesTeam =
            selectedTeam === "All teams" || employee.team === selectedTeam;

        const matchesStatus =
            selectedStatus === "all" || employee.status === selectedStatus;

        return matchesSearch && matchesTeam && matchesStatus;
    });

    const averageFocus = filteredEmployees.length
        ? `${Math.round(
              filteredEmployees.reduce((total, item) => total + item.focus, 0) /
                  filteredEmployees.length
          )}%`
        : "0%";

    const workingNow = filteredEmployees.filter(
        (item) => item.status === "working"
    ).length;

    const teamCoverage = new Set(filteredEmployees.map((item) => item.team))
        .size;

    return (
        <div className="space-y-6">
            <EmployeesHeroSection
                searchTerm={searchTerm}
                onSearchTermChange={setSearchTerm}
                selectedTeam={selectedTeam}
                onSelectedTeamChange={setSelectedTeam}
                selectedStatus={selectedStatus}
                onSelectedStatusChange={setSelectedStatus}
                teamOptions={teamOptions}
                statusOptions={employeeStatusOptions}
                visibleCount={filteredEmployees.length}
            />
            <EmployeesStatsSection
                totalEmployees={filteredEmployees.length}
                averageFocus={averageFocus}
                workingNow={workingNow}
                teamCoverage={teamCoverage}
            />
            <EmployeesTableSection employees={filteredEmployees} />
        </div>
    );
}
