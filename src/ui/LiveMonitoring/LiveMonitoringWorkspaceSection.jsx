import { Link } from "react-router-dom";
import { RiArrowRightUpLine, RiPulseLine } from "react-icons/ri";
import PanelCard from "../Shared/PanelCard";
import StatusBadge from "../Shared/StatusBadge";
import { liveTeamPulse, monitoringStatusMeta } from "./data";

function EmployeeCell({ label, value }) {
    return (
        <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                {label}
            </p>
            <p className="mt-1 text-sm font-medium text-slate-700">{value}</p>
        </div>
    );
}

function LiveEmployeeRow({ item }) {
    const statusLabel =
        monitoringStatusMeta.find((status) => status.key === item.status)
            ?.label || item.status;

    return (
        <Link
            to={`/employees/${item.id}`}
            className="block rounded-[26px] border border-slate-200 bg-white p-4 transition hover:border-primary/20 hover:shadow-[0_18px_40px_-34px_rgba(37,99,235,0.4)]"
        >
            <div className="grid gap-4 md:grid-cols-2 2xl:grid-cols-[minmax(240px,1.4fr)_repeat(4,minmax(88px,0.7fr))] 2xl:items-center">
                <div className="flex min-w-0 items-center gap-3">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-100 text-sm font-semibold text-slate-700">
                        {item.name
                            .split(" ")
                            .map((part) => part[0])
                            .join("")}
                    </div>
                    <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-semibold text-slate-950">
                            {item.name}
                        </p>
                        <p className="mt-1 text-xs text-slate-500">
                            {item.team}
                        </p>
                    </div>
                    <StatusBadge label={statusLabel} tone={item.status} />
                </div>

                <div className="grid gap-4 sm:grid-cols-2 2xl:contents">
                    <EmployeeCell label="Focus" value={`${item.focus}%`} />
                    <EmployeeCell label="Current app" value={item.app} />
                    <EmployeeCell
                        label="Last activity"
                        value={item.lastActivity}
                    />
                    <EmployeeCell label="Session" value={item.session} />
                </div>
            </div>
        </Link>
    );
}

function AlertRow({ item }) {
    return (
        <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4">
            <div className="flex items-start justify-between gap-3">
                <div>
                    <div className="flex items-center gap-3">
                        <p className="text-sm font-semibold text-slate-950">
                            {item.title}
                        </p>
                        <StatusBadge label={item.label} tone={item.tone} />
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-500">
                        {item.detail}
                    </p>
                </div>
                <span className="text-xs font-medium text-slate-400">
                    {item.time}
                </span>
            </div>
        </div>
    );
}

function TeamPulseRow({ item }) {
    return (
        <div className="flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white px-4 py-3">
            <div>
                <p className="text-sm font-semibold text-slate-950">
                    {item.team}
                </p>
                <p className="mt-1 text-xs text-slate-500">{item.active}</p>
            </div>
            <div className="flex items-center gap-3">
                <p className="text-sm font-semibold text-slate-950">
                    {item.performance}
                </p>
                <StatusBadge label="Live" tone={item.tone} />
            </div>
        </div>
    );
}

export default function LiveMonitoringWorkspaceSection({
    employees,
    alerts,
    selectedStatus
}) {
    const selectedStatusLabel =
        selectedStatus === "all"
            ? "All statuses"
            : monitoringStatusMeta.find((item) => item.key === selectedStatus)
                  ?.label;

    return (
        <section className="grid gap-6 xl:grid-cols-[minmax(0,1.45fr)_minmax(340px,0.9fr)]">
            <PanelCard
                title="Live Employee Stream"
                description="A watchlist of employees, activity status, current tools, and latest tracked interaction."
                action={
                    <button
                        type="button"
                        className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-3 py-1.5 text-xs font-semibold text-white"
                    >
                        View details
                        <RiArrowRightUpLine className="h-4 w-4 text-secondary" />
                    </button>
                }
            >
                <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-3 rounded-[26px] border border-slate-200 bg-slate-50 px-4 py-3">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                                Active filter
                            </p>
                            <p className="mt-1 text-sm font-semibold text-slate-950">
                                {selectedStatusLabel}
                            </p>
                        </div>
                        <StatusBadge
                            label={`${employees.length} employees`}
                            tone={
                                selectedStatus === "all"
                                    ? "primary"
                                    : selectedStatus
                            }
                        />
                    </div>

                    <div className="hidden rounded-[26px] border border-slate-200 bg-slate-50 px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400 2xl:grid 2xl:grid-cols-[minmax(240px,1.4fr)_repeat(4,minmax(88px,0.7fr))] 2xl:gap-4">
                        <span>Employee</span>
                        <span>Focus</span>
                        <span>Current app</span>
                        <span>Last activity</span>
                        <span>Session</span>
                    </div>

                    {employees.length ? (
                        <div className="space-y-3">
                            {employees.map((item) => (
                                <LiveEmployeeRow key={item.name} item={item} />
                            ))}
                        </div>
                    ) : (
                        <div className="rounded-[26px] border border-dashed border-slate-300 bg-slate-50 px-6 py-10 text-center">
                            <p className="text-sm font-semibold text-slate-900">
                                No employees match this status
                            </p>
                            <p className="mt-2 text-sm text-slate-500">
                                Change the status filter to view another live
                                employee set.
                            </p>
                        </div>
                    )}
                </div>
            </PanelCard>

            <div className="space-y-6">
                <PanelCard
                    title="Live Alerts"
                    description="Attention items requiring quick manager review."
                    action={
                        <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary">
                            <RiPulseLine className="h-4 w-4" />
                            Watching now
                        </div>
                    }
                >
                    <div className="space-y-3">
                        {alerts.map((item) => (
                            <AlertRow key={item.title} item={item} />
                        ))}
                    </div>
                </PanelCard>

                <PanelCard
                    title="Team Pulse"
                    description="Live team-by-team snapshot of online activity and performance quality."
                >
                    <div className="space-y-3">
                        {liveTeamPulse.map((item) => (
                            <TeamPulseRow key={item.team} item={item} />
                        ))}
                    </div>
                </PanelCard>
            </div>
        </section>
    );
}
