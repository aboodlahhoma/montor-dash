import {
    RiCalendarCheckLine,
    RiFlashlightLine,
    RiPulseLine
} from "react-icons/ri";
import SectionTitle from "../Shared/SectionTitle";
import StatusBadge from "../Shared/StatusBadge";

function HeroChip({ icon: Icon, label }) {
    return (
        <div className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-600 shadow-[0_18px_40px_-34px_rgba(15,23,42,0.7)]">
            <Icon className="h-4.5 w-4.5 text-primary" />
            <span>{label}</span>
        </div>
    );
}

export default function OverviewHeroSection() {
    return (
        <section className="space-y-5">
            <SectionTitle
                eyebrow="Overview"
                title="Employee Productivity Overview"
                description="Monitor workforce status, focus quality, and operational rhythm from one streamlined analytics surface."
                action={
                    <div className="flex flex-wrap gap-3">
                        <HeroChip
                            icon={RiPulseLine}
                            label="Realtime monitoring enabled"
                        />
                        <HeroChip
                            icon={RiCalendarCheckLine}
                            label="Current shift snapshot"
                        />
                    </div>
                }
            />

            <div className="flex flex-wrap items-center gap-3">
                <StatusBadge label="Working Hours" tone="primary" />
                <StatusBadge label="Live Sync" tone="secondary" />
                <div className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white">
                    <RiFlashlightLine className="h-3.5 w-3.5 text-secondary" />
                    Focus intelligence
                </div>
            </div>
        </section>
    );
}
