const toneClasses = {
    working: {
        icon: "bg-emerald-50 text-emerald-600",
        badge: "bg-emerald-50 text-emerald-700"
    },
    idle: {
        icon: "bg-amber-50 text-amber-600",
        badge: "bg-amber-50 text-amber-700"
    },
    distracted: {
        icon: "bg-rose-50 text-rose-600",
        badge: "bg-rose-50 text-rose-700"
    },
    offline: {
        icon: "bg-slate-100 text-slate-600",
        badge: "bg-slate-100 text-slate-600"
    },
    primary: {
        icon: "bg-primary/10 text-primary",
        badge: "bg-primary/10 text-primary"
    },
    secondary: {
        icon: "bg-secondary/10 text-secondary",
        badge: "bg-secondary/10 text-secondary"
    }
};

export default function StatCard({
    icon: Icon,
    label,
    value,
    helper,
    change,
    tone = "primary"
}) {
    const style = toneClasses[tone] || toneClasses.primary;

    return (
        <article className="rounded-[28px] border border-slate-200/80 bg-white p-5 shadow-[0_22px_50px_-40px_rgba(15,23,42,0.85)]">
            <div className="flex items-start justify-between gap-4">
                <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl ${style.icon}`}
                >
                    <Icon className="h-5 w-5" />
                </div>
                {change ? (
                    <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${style.badge}`}
                    >
                        {change}
                    </span>
                ) : null}
            </div>

            <p className="mt-6 text-sm font-medium text-slate-500">{label}</p>
            <p className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">
                {value}
            </p>
            {helper ? (
                <p className="mt-2 text-sm leading-6 text-slate-500">
                    {helper}
                </p>
            ) : null}
        </article>
    );
}
