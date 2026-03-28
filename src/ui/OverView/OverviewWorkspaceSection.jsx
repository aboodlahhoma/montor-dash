import { Link } from "react-router-dom";
import { RiArrowRightUpLine, RiPulseLine } from "react-icons/ri";
import PanelCard from "../Shared/PanelCard";
import StatusBadge from "../Shared/StatusBadge";
import {
    alertFeed,
    liveEmployees,
    productivityBreakdown,
    teamPerformance
} from "./data";

function ProductivityRow({ item }) {
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

function TeamRow({ item }) {
    return (
        <div className="flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
            <div>
                <p className="text-sm font-semibold text-slate-950">
                    {item.team}
                </p>
                <p className="mt-1 text-xs text-slate-500">
                    Productivity score {item.productivity}
                </p>
            </div>
            <StatusBadge label={item.status} tone={item.tone} />
        </div>
    );
}

function LiveEmployeeRow({ item }) {
    return (
        <Link
            to={`/employees/${item.id}`}
            className="flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white px-4 py-3 transition hover:border-primary/20 hover:shadow-[0_18px_40px_-34px_rgba(37,99,235,0.35)]"
        >
            <div className="flex min-w-0 items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-sm font-semibold text-slate-700">
                    {item.name
                        .split(" ")
                        .map((part) => part[0])
                        .join("")}
                </div>
                <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-slate-950">
                        {item.name}
                    </p>
                    <p className="mt-1 text-xs text-slate-500">{item.team}</p>
                </div>
            </div>

            <div className="flex items-center gap-3">
                <div className="hidden text-right sm:block">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                        Focus
                    </p>
                    <p className="mt-1 text-sm font-semibold text-slate-950">
                        {item.focus}
                    </p>
                </div>
                <StatusBadge label={item.status} tone={item.tone} />
            </div>
        </Link>
    );
}

function AlertRow({ item }) {
    return (
        <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4">
            <div className="flex items-start justify-between gap-3">
                <div>
                    <p className="text-sm font-semibold text-slate-950">
                        {item.title}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-500">
                        {item.detail}
                    </p>
                </div>
                <StatusBadge label={item.tone} tone={item.tone} />
            </div>
        </div>
    );
}

export default function OverviewWorkspaceSection() {
    return (
        <section className="grid gap-6 xl:grid-cols-[minmax(0,1.25fr)_minmax(360px,0.95fr)]">
            <div className="space-y-6">
                <PanelCard
                    title="Productivity Distribution"
                    description="A quick read on how tracked time is being spent across the workday."
                    action={
                        <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary">
                            <RiPulseLine className="h-4 w-4" />
                            Live signal
                        </div>
                    }
                >
                    <div className="space-y-5">
                        {productivityBreakdown.map((item) => (
                            <ProductivityRow key={item.label} item={item} />
                        ))}
                    </div>
                </PanelCard>

                <PanelCard
                    title="Team Momentum"
                    description="Compare how different teams are performing during the current working window."
                >
                    <div className="space-y-3">
                        {teamPerformance.map((item) => (
                            <TeamRow key={item.team} item={item} />
                        ))}
                    </div>
                </PanelCard>
            </div>

            <div className="space-y-6">
                <PanelCard
                    title="Live Employee Status"
                    description="Realtime employee presence and focus indicators."
                    action={
                        <button
                            type="button"
                            className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-3 py-1.5 text-xs font-semibold text-white"
                        >
                            Open feed
                            <RiArrowRightUpLine className="h-4 w-4 text-secondary" />
                        </button>
                    }
                >
                    <div className="space-y-3">
                        {liveEmployees.map((item) => (
                            <LiveEmployeeRow key={item.name} item={item} />
                        ))}
                    </div>
                </PanelCard>

                <PanelCard
                    title="Attention Alerts"
                    description="Operational flags that need a manager review."
                >
                    <div className="space-y-3">
                        {alertFeed.map((item) => (
                            <AlertRow key={item.title} item={item} />
                        ))}
                    </div>
                </PanelCard>
            </div>
        </section>
    );
}
