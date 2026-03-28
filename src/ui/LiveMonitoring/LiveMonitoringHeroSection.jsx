import {
    RiPulseLine,
    RiRadarLine,
    RiShieldCheckLine,
    RiSignalTowerLine
} from "react-icons/ri";
import SectionTitle from "../Shared/SectionTitle";
import StatusBadge from "../Shared/StatusBadge";

const dotStyles = {
    all: "bg-secondary",
    working: "bg-emerald-400",
    idle: "bg-amber-400",
    distracted: "bg-rose-400",
    offline: "bg-slate-400"
};

const activeStyles = {
    all: "border-secondary/30 bg-secondary text-slate-950 shadow-[0_18px_40px_-34px_rgba(20,184,166,0.75)]",
    working:
        "border-emerald-400/35 bg-emerald-500 text-white shadow-[0_18px_40px_-34px_rgba(16,185,129,0.7)]",
    idle: "border-amber-400/35 bg-amber-500 text-slate-950 shadow-[0_18px_40px_-34px_rgba(245,158,11,0.7)]",
    distracted:
        "border-rose-400/35 bg-rose-500 text-white shadow-[0_18px_40px_-34px_rgba(244,63,94,0.7)]",
    offline:
        "border-slate-500/35 bg-slate-700 text-white shadow-[0_18px_40px_-34px_rgba(51,65,85,0.85)]"
};

function getFilterHelper(key) {
    switch (key) {
        case "working":
            return "Productive now";
        case "idle":
            return "Needs review";
        case "distracted":
            return "Attention";
        case "offline":
            return "Unavailable";
        default:
            return "Entire workforce";
    }
}

function StatusFilterPill({ item, count, isActive, onClick }) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`flex items-center justify-between gap-4 rounded-2xl border px-4 py-3 text-left transition ${
                isActive
                    ? activeStyles[item.key] || activeStyles.all
                    : "border-white/10 bg-white/[0.06] text-white hover:border-white/20 hover:bg-white/[0.10]"
            }`}
        >
            <div className="min-w-0">
                <div className="flex items-center gap-2">
                    <span
                        className={`h-2.5 w-2.5 rounded-full ${
                            dotStyles[item.key] || dotStyles.all
                        }`}
                    />
                    <p className="truncate text-sm font-semibold">
                        {item.label}
                    </p>
                </div>
                <span
                    className={`mt-2 block text-[10px] font-semibold uppercase tracking-[0.18em] ${
                        isActive ? "text-white/70" : "text-slate-400"
                    }`}
                >
                    {getFilterHelper(item.key)}
                </span>
            </div>

            <span
                className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${
                    isActive
                        ? "bg-white/15 text-white"
                        : "bg-white/10 text-white"
                }`}
            >
                {count}
            </span>
        </button>
    );
}

export default function LiveMonitoringHeroSection({
    selectedStatus,
    onSelectStatus,
    statusFilterOptions,
    statusSummary,
    visibleCount
}) {
    const totalEmployees = statusSummary.reduce(
        (total, current) => total + current.value,
        0
    );

    const summaryMap = statusSummary.reduce((result, item) => {
        result[item.key] = item.value;
        return result;
    }, {});

    return (
        <section className="space-y-5">
            <SectionTitle
                eyebrow="Monitoring"
                title="Live Workforce Monitoring"
                description="Track employee activity as it happens, identify interruptions fast, and keep managers focused on what needs attention now."
                action={
                    <div className="flex flex-wrap items-center gap-3">
                        <StatusBadge label="Realtime" tone="secondary" />
                        <div className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white">
                            <RiSignalTowerLine className="h-3.5 w-3.5 text-secondary" />
                            {visibleCount} visible now
                        </div>
                    </div>
                }
            />

            <div className="rounded-[32px] border border-slate-200/80 bg-[linear-gradient(135deg,rgba(15,23,42,0.98),rgba(30,41,59,0.96))] p-5 text-white shadow-[0_30px_60px_-42px_rgba(15,23,42,0.95)]">
                <div className="grid gap-6 xl:grid-cols-[minmax(0,0.9fr)_minmax(420px,1.1fr)] xl:items-start">
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-secondary">
                            <RiPulseLine className="h-3.5 w-3.5" />
                            Monitoring Control
                        </div>

                        <p className="text-sm leading-7 text-slate-300">
                            Filter the live stream by employee status to focus
                            on the exact set of users you need to review right
                            now.
                        </p>

                        <div className="grid gap-3 sm:grid-cols-2">
                            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                                    Current feed
                                </p>
                                <p className="mt-2 text-sm font-semibold text-white">
                                    Live session health
                                </p>
                                <p className="mt-1 text-sm text-slate-300">
                                    Stream updates continuously as tracked
                                    status changes happen.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                                <div className="flex items-center gap-2 text-secondary">
                                    <RiShieldCheckLine className="h-4 w-4" />
                                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em]">
                                        Monitoring scope
                                    </p>
                                </div>
                                <p className="mt-2 text-sm font-semibold text-white">
                                    Workforce status filtering
                                </p>
                                <p className="mt-1 text-sm text-slate-300">
                                    Use the controls to isolate interruptions,
                                    offline users, or productive teams.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-3 backdrop-blur">
                        <div className="mb-3 flex flex-wrap items-center justify-between gap-3 px-1">
                            <div className="flex items-center gap-2 text-slate-300">
                                <RiRadarLine className="h-4 w-4 text-secondary" />
                                <div>
                                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                                        Status Filter
                                    </p>
                                    <p className="mt-1 text-sm font-semibold text-white">
                                        Choose a live employee segment
                                    </p>
                                </div>
                            </div>
                            <div className="rounded-full bg-white/8 px-3 py-1 text-xs font-semibold text-slate-200">
                                {visibleCount} of {totalEmployees} shown
                            </div>
                        </div>

                        <div className="grid gap-2 sm:grid-cols-2 xl:grid-cols-3">
                            {statusFilterOptions.map((item) => (
                                <StatusFilterPill
                                    key={item.key}
                                    item={item}
                                    count={
                                        item.key === "all"
                                            ? totalEmployees
                                            : summaryMap[item.key] || 0
                                    }
                                    isActive={selectedStatus === item.key}
                                    onClick={() => onSelectStatus(item.key)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
