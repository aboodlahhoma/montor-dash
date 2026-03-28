import {
    RiCheckboxCircleLine,
    RiFocus3Line,
    RiGroupLine,
    RiTeamLine
} from "react-icons/ri";

function MetricBlock({ icon: Icon, label, value, helper, toneClass }) {
    return (
        <div className="p-5">
            <div
                className={`flex h-11 w-11 items-center justify-center rounded-2xl ${toneClass}`}
            >
                <Icon className="h-5 w-5" />
            </div>
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                {label}
            </p>
            <p className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">
                {value}
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-500">{helper}</p>
        </div>
    );
}

export default function EmployeesStatsSection({
    totalEmployees,
    averageFocus,
    workingNow,
    teamCoverage
}) {
    return (
        <section className="overflow-hidden rounded-[32px] border border-slate-200/80 bg-white shadow-[0_25px_55px_-42px_rgba(15,23,42,0.9)]">
            <div className="grid divide-y divide-slate-200 md:grid-cols-2 md:divide-x md:divide-y-0 2xl:grid-cols-4">
                <MetricBlock
                    icon={RiGroupLine}
                    label="Visible employees"
                    value={totalEmployees}
                    helper="Employees currently matching the active filters."
                    toneClass="bg-primary/10 text-primary"
                />
                <MetricBlock
                    icon={RiFocus3Line}
                    label="Average focus"
                    value={averageFocus}
                    helper="Average focus score across the visible employee set."
                    toneClass="bg-secondary/10 text-secondary"
                />
                <MetricBlock
                    icon={RiCheckboxCircleLine}
                    label="Working now"
                    value={workingNow}
                    helper="Employees currently in a productive working state."
                    toneClass="bg-emerald-50 text-emerald-600"
                />
                <MetricBlock
                    icon={RiTeamLine}
                    label="Teams covered"
                    value={teamCoverage}
                    helper="Distinct teams represented by the current result set."
                    toneClass="bg-slate-100 text-slate-700"
                />
            </div>
        </section>
    );
}
