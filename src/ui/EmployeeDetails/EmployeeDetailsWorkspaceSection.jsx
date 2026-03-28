import PanelCard from "../Shared/PanelCard";
import StatusBadge from "../Shared/StatusBadge";
import { getEmployeeStatusLabel } from "../../ui/Employees/data";

function MixRow({ item }) {
    return (
        <div>
            <div className="flex items-center justify-between gap-4">
                <p className="text-sm font-medium text-slate-600">
                    {item.label}
                </p>
                <span className="text-sm font-semibold text-slate-950">
                    {item.value}
                </span>
            </div>
            <div className="mt-3 h-2.5 rounded-full bg-slate-100">
                <div
                    className={`h-2.5 rounded-full ${item.tone}`}
                    style={{ width: item.width }}
                />
            </div>
        </div>
    );
}

function ToolRow({ tool }) {
    return (
        <div className="flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
            <p className="text-sm font-semibold text-slate-950">{tool.name}</p>
            <p className="text-sm font-medium text-slate-500">{tool.usage}</p>
        </div>
    );
}

function TimelineRow({ item, tone }) {
    return (
        <div className="relative pl-7">
            <span
                className={`absolute left-0 top-1.5 h-3 w-3 rounded-full ${tone}`}
            />
            <div className="rounded-2xl border border-slate-200 bg-white px-4 py-4">
                <div className="flex items-center justify-between gap-3">
                    <p className="text-sm font-semibold text-slate-950">
                        {item.title}
                    </p>
                    <span className="text-xs font-medium text-slate-400">
                        {item.time}
                    </span>
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                    {item.detail}
                </p>
            </div>
        </div>
    );
}

function WeeklyTrendBar({ value, isLast }) {
    return (
        <div className="flex flex-1 flex-col items-center gap-2">
            <div className="flex h-32 w-full items-end rounded-2xl bg-slate-100 p-2">
                <div
                    className={`w-full rounded-xl ${
                        isLast ? "bg-secondary" : "bg-primary"
                    }`}
                    style={{ height: `${value}%` }}
                />
            </div>
            <span className="text-xs font-semibold text-slate-500">
                {value}%
            </span>
        </div>
    );
}

export default function EmployeeDetailsWorkspaceSection({ employee }) {
    const statusLabel = getEmployeeStatusLabel(employee.status);

    return (
        <section className="grid gap-6 xl:grid-cols-[minmax(0,1.2fr)_minmax(360px,0.9fr)]">
            <div className="space-y-6">
                <PanelCard
                    title="Activity Distribution"
                    description="How this employee's monitored time is being distributed today."
                >
                    <div className="space-y-5">
                        {employee.activityMix.map((item) => (
                            <MixRow key={item.label} item={item} />
                        ))}
                    </div>
                </PanelCard>

                <PanelCard
                    title="Recent Activity Timeline"
                    description="Key monitored events and workday transitions."
                >
                    <div className="space-y-4">
                        {employee.timeline.map((item, index) => (
                            <TimelineRow
                                key={`${employee.id}-${item.time}-${index}`}
                                item={item}
                                tone={
                                    index === 0
                                        ? "bg-primary"
                                        : index === 1
                                          ? "bg-secondary"
                                          : "bg-slate-400"
                                }
                            />
                        ))}
                    </div>
                </PanelCard>
            </div>

            <div className="space-y-6">
                <PanelCard
                    title="Current Session"
                    description="Live context for the employee's current or latest tracked session."
                >
                    <div className="space-y-3">
                        <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                                Current app
                            </p>
                            <p className="mt-2 text-sm font-semibold text-slate-950">
                                {employee.currentApp}
                            </p>
                        </div>
                        <div className="grid gap-3 sm:grid-cols-2">
                            <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                                    Last activity
                                </p>
                                <p className="mt-2 text-sm font-semibold text-slate-950">
                                    {employee.lastActivity}
                                </p>
                            </div>
                            <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                                    Session duration
                                </p>
                                <p className="mt-2 text-sm font-semibold text-slate-950">
                                    {employee.session}
                                </p>
                            </div>
                        </div>
                        <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3">
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                                Current state
                            </p>
                            <div className="mt-2">
                                <StatusBadge
                                    label={statusLabel}
                                    tone={employee.status}
                                />
                            </div>
                        </div>
                    </div>
                </PanelCard>

                <PanelCard
                    title="Tools in Use"
                    description="Primary tools and applications active during this workday."
                >
                    <div className="space-y-3">
                        {employee.tools.map((tool) => (
                            <ToolRow
                                key={`${employee.id}-${tool.name}`}
                                tool={tool}
                            />
                        ))}
                    </div>
                </PanelCard>

                <PanelCard
                    title="Weekly Focus Trend"
                    description="A five-point focus trend for recent working days."
                >
                    <div className="flex gap-3">
                        {employee.weeklyTrend.map((value, index) => (
                            <WeeklyTrendBar
                                key={`${employee.id}-trend-${index}`}
                                value={value}
                                isLast={
                                    index === employee.weeklyTrend.length - 1
                                }
                            />
                        ))}
                    </div>
                </PanelCard>
            </div>
        </section>
    );
}
