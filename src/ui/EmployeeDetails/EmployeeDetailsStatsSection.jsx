import {
    RiAlarmWarningLine,
    RiCheckboxCircleLine,
    RiFocus3Line,
    RiTimeLine
} from "react-icons/ri";

function EmployeeMetric({ icon: Icon, label, value, helper, toneClass }) {
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

export default function EmployeeDetailsStatsSection({ employee }) {
    return (
        <section className="overflow-hidden rounded-[32px] border border-slate-200/80 bg-white shadow-[0_25px_55px_-42px_rgba(15,23,42,0.9)]">
            <div className="grid divide-y divide-slate-200 md:grid-cols-2 md:divide-x md:divide-y-0 2xl:grid-cols-4">
                <EmployeeMetric
                    icon={RiFocus3Line}
                    label="Focus score"
                    value={`${employee.focus}%`}
                    helper="Current focus quality based on monitored activity."
                    toneClass="bg-primary/10 text-primary"
                />
                <EmployeeMetric
                    icon={RiCheckboxCircleLine}
                    label="Productive hours"
                    value={employee.productiveHours}
                    helper="Tracked productive time for the current working day."
                    toneClass="bg-secondary/10 text-secondary"
                />
                <EmployeeMetric
                    icon={RiTimeLine}
                    label="Idle time"
                    value={employee.idleTime}
                    helper="Total idle duration detected during the workday."
                    toneClass="bg-amber-50 text-amber-600"
                />
                <EmployeeMetric
                    icon={RiAlarmWarningLine}
                    label="Distracted time"
                    value={employee.distractedTime}
                    helper="Time flagged outside expected work context."
                    toneClass="bg-rose-50 text-rose-600"
                />
            </div>
        </section>
    );
}
