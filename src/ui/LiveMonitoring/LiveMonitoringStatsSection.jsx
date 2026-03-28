import {
    RiAlarmWarningLine,
    RiApps2Line,
    RiFocus3Line,
    RiUserSearchLine
} from "react-icons/ri";

function MonitoringMetric({ icon: Icon, label, value, helper, accent = "" }) {
    return (
        <div className="p-5">
            <div
                className={`flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-slate-700 ${accent}`}
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

export default function LiveMonitoringStatsSection({
    visibleCount,
    averageFocus,
    attentionCount,
    mostUsedApp,
    selectedStatus
}) {
    const filterLabel =
        selectedStatus === "all"
            ? "all monitored employees"
            : `${selectedStatus} employees`;

    return (
        <section className="overflow-hidden rounded-[32px] border border-slate-200/80 bg-white shadow-[0_25px_55px_-42px_rgba(15,23,42,0.9)]">
            <div className="grid divide-y divide-slate-200 md:grid-cols-2 md:divide-x md:divide-y-0 2xl:grid-cols-4">
                <MonitoringMetric
                    icon={RiUserSearchLine}
                    label="Visible employees"
                    value={visibleCount}
                    helper={`Currently showing ${filterLabel}.`}
                    accent="bg-primary/10 text-primary"
                />
                <MonitoringMetric
                    icon={RiFocus3Line}
                    label="Average focus"
                    value={averageFocus}
                    helper="Calculated from employees visible in the live stream."
                    accent="bg-secondary/10 text-secondary"
                />
                <MonitoringMetric
                    icon={RiAlarmWarningLine}
                    label="Attention required"
                    value={attentionCount}
                    helper="Employees who are idle, distracted, or offline."
                    accent="bg-rose-50 text-rose-600"
                />
                <MonitoringMetric
                    icon={RiApps2Line}
                    label="Most used tool"
                    value={mostUsedApp}
                    helper="Top active application across visible employees."
                    accent="bg-slate-100 text-slate-700"
                />
            </div>
        </section>
    );
}
