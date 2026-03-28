function joinClasses(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function SectionTitle({
    eyebrow,
    title,
    description,
    action,
    className = ""
}) {
    return (
        <div
            className={joinClasses(
                "flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between",
                className
            )}
        >
            <div className="max-w-3xl">
                {eyebrow ? (
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                        {eyebrow}
                    </p>
                ) : null}
                <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 xl:text-3xl">
                    {title}
                </h1>
                {description ? (
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                        {description}
                    </p>
                ) : null}
            </div>

            {action ? <div className="shrink-0">{action}</div> : null}
        </div>
    );
}
