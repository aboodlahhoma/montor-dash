const toneClasses = {
    working: "border-emerald-200 bg-emerald-50 text-emerald-700",
    idle: "border-amber-200 bg-amber-50 text-amber-700",
    distracted: "border-rose-200 bg-rose-50 text-rose-700",
    offline: "border-slate-200 bg-slate-100 text-slate-600",
    primary: "border-primary/15 bg-primary/10 text-primary",
    secondary: "border-secondary/15 bg-secondary/10 text-secondary"
};

const dotClasses = {
    working: "bg-emerald-500",
    idle: "bg-amber-500",
    distracted: "bg-rose-500",
    offline: "bg-slate-400",
    primary: "bg-primary",
    secondary: "bg-secondary"
};

export default function StatusBadge({
    label,
    tone = "primary",
    showDot = true
}) {
    return (
        <span
            className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] ${
                toneClasses[tone] || toneClasses.primary
            }`}
        >
            {showDot ? (
                <span
                    className={`h-2 w-2 rounded-full ${
                        dotClasses[tone] || dotClasses.primary
                    }`}
                />
            ) : null}
            {label}
        </span>
    );
}
