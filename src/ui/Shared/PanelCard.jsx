function joinClasses(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function PanelCard({
    title,
    description,
    action,
    children,
    className = "",
    contentClassName = ""
}) {
    return (
        <section
            className={joinClasses(
                "rounded-[32px] border border-slate-200/80 bg-white p-6 shadow-[0_25px_55px_-42px_rgba(15,23,42,0.9)]",
                className
            )}
        >
            {title || description || action ? (
                <div className="flex items-start justify-between gap-4">
                    <div>
                        {title ? (
                            <h2 className="text-base font-semibold tracking-tight text-slate-950">
                                {title}
                            </h2>
                        ) : null}
                        {description ? (
                            <p className="mt-2 text-sm leading-6 text-slate-500">
                                {description}
                            </p>
                        ) : null}
                    </div>

                    {action ? <div className="shrink-0">{action}</div> : null}
                </div>
            ) : null}

            <div
                className={joinClasses(
                    title || description || action ? "mt-6" : "",
                    contentClassName
                )}
            >
                {children}
            </div>
        </section>
    );
}
