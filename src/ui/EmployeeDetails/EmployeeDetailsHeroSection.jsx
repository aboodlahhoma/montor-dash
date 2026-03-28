import { Link } from "react-router-dom";
import {
    RiArrowLeftLine,
    RiMailLine,
    RiMapPinLine,
    RiTimeLine,
    RiUserStarLine
} from "react-icons/ri";
import { getEmployeeStatusLabel } from "../../ui/Employees/data";
import SectionTitle from "../Shared/SectionTitle";
import StatusBadge from "../Shared/StatusBadge";

function InfoChip({ icon: Icon, label, value }) {
    return (
        <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-[0_18px_40px_-34px_rgba(15,23,42,0.7)]">
            <div className="flex items-center gap-2 text-slate-500">
                <Icon className="h-4 w-4 text-primary" />
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em]">
                    {label}
                </p>
            </div>
            <p className="mt-2 text-sm font-semibold text-slate-950">{value}</p>
        </div>
    );
}

export default function EmployeeDetailsHeroSection({ employee }) {
    const statusLabel = getEmployeeStatusLabel(employee.status);

    return (
        <section className="space-y-5">
            <div>
                <Link
                    to="/employees"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600 shadow-[0_16px_35px_-30px_rgba(15,23,42,0.7)] transition hover:text-primary"
                >
                    <RiArrowLeftLine className="h-4 w-4" />
                    Back to employees
                </Link>
            </div>

            <SectionTitle
                eyebrow="Employee Details"
                title={employee.name}
                description={`${employee.role} in ${employee.team}. Review individual productivity, work rhythm, and the latest monitored activity.`}
                action={
                    <div className="flex flex-wrap items-center gap-3">
                        <StatusBadge
                            label={statusLabel}
                            tone={employee.status}
                        />
                        <div className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white">
                            Focus {employee.focus}%
                        </div>
                    </div>
                }
            />

            <div className="grid gap-3 lg:grid-cols-2 xl:grid-cols-4">
                <InfoChip
                    icon={RiMailLine}
                    label="Email"
                    value={employee.email}
                />
                <InfoChip
                    icon={RiUserStarLine}
                    label="Manager"
                    value={employee.manager}
                />
                <InfoChip
                    icon={RiTimeLine}
                    label="Shift"
                    value={employee.shift}
                />
                <InfoChip
                    icon={RiMapPinLine}
                    label="Location"
                    value={employee.location}
                />
            </div>
        </section>
    );
}
