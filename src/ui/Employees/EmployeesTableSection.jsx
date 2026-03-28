import { Link } from "react-router-dom";
import { RiArrowRightUpLine } from "react-icons/ri";
import DataTable from "../Shared/DataTable";
import PanelCard from "../Shared/PanelCard";
import StatusBadge from "../Shared/StatusBadge";
import { getEmployeeStatusLabel } from "./data";

function EmployeeIdentity({ employee }) {
    return (
        <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-slate-100 text-sm font-semibold text-slate-700">
                {employee.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")}
            </div>
            <div className="min-w-0">
                <Link
                    to={`/employees/${employee.id}`}
                    className="truncate font-semibold text-slate-950 transition hover:text-primary"
                >
                    {employee.name}
                </Link>
                <p className="mt-1 truncate text-xs text-slate-500">
                    {employee.email}
                </p>
            </div>
        </div>
    );
}

function FocusCell({ focus }) {
    return (
        <div className="min-w-[110px]">
            <div className="flex items-center justify-between gap-3">
                <span className="text-sm font-semibold text-slate-950">
                    {focus}%
                </span>
            </div>
            <div className="mt-2 h-2 rounded-full bg-slate-100">
                <div
                    className="h-2 rounded-full bg-primary"
                    style={{ width: `${focus}%` }}
                />
            </div>
        </div>
    );
}

const columns = [
    {
        key: "name",
        label: "Employee",
        render: (employee) => <EmployeeIdentity employee={employee} />
    },
    {
        key: "team",
        label: "Team"
    },
    {
        key: "role",
        label: "Role"
    },
    {
        key: "status",
        label: "Status",
        render: (employee) => (
            <StatusBadge
                label={getEmployeeStatusLabel(employee.status)}
                tone={employee.status}
                showDot={true}
            />
        )
    },
    {
        key: "focus",
        label: "Focus",
        render: (employee) => <FocusCell focus={employee.focus} />
    },
    {
        key: "lastActivity",
        label: "Last activity"
    },
    {
        key: "actions",
        label: "Action",
        cellClassName: "text-right",
        headerClassName: "text-right",
        render: (employee) => (
            <Link
                to={`/employees/${employee.id}`}
                className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-3 py-2 text-xs font-semibold text-white transition hover:bg-primary"
            >
                View details
                <RiArrowRightUpLine className="h-4 w-4 text-secondary" />
            </Link>
        )
    }
];

export default function EmployeesTableSection({ employees }) {
    return (
        <PanelCard
            title="Employee Table"
            description="A reusable directory table view for monitored employees, current status, and focus quality."
        >
            <DataTable
                columns={columns}
                data={employees}
                rowKey="id"
                emptyTitle="No employees match the current filters"
                emptyDescription="Adjust the search, team, or status filters to reveal more employees."
            />
        </PanelCard>
    );
}
