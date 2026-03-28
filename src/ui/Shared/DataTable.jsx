function joinClasses(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function DataTable({
    columns,
    data,
    rowKey = "id",
    emptyTitle = "No data found",
    emptyDescription = "Try changing the active filters.",
    tableClassName = ""
}) {
    if (!data.length) {
        return (
            <div className="rounded-[28px] border border-dashed border-slate-300 bg-slate-50 px-6 py-12 text-center">
                <p className="text-sm font-semibold text-slate-900">
                    {emptyTitle}
                </p>
                <p className="mt-2 text-sm text-slate-500">
                    {emptyDescription}
                </p>
            </div>
        );
    }

    return (
        <div className="overflow-hidden rounded-[28px] border border-slate-200/80 bg-white">
            <div className="overflow-x-auto">
                <table
                    className={joinClasses(
                        "min-w-[980px] w-full border-collapse",
                        tableClassName
                    )}
                >
                    <thead className="bg-slate-50">
                        <tr>
                            {columns.map((column) => (
                                <th
                                    key={column.key}
                                    className={joinClasses(
                                        "px-5 py-4 text-left text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400",
                                        column.headerClassName
                                    )}
                                >
                                    {column.label}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) => {
                            const resolvedRowKey =
                                typeof rowKey === "function"
                                    ? rowKey(row)
                                    : row[rowKey];

                            return (
                                <tr
                                    key={resolvedRowKey ?? index}
                                    className="border-t border-slate-200/80 align-top"
                                >
                                    {columns.map((column) => (
                                        <td
                                            key={column.key}
                                            className={joinClasses(
                                                "px-5 py-4 text-sm text-slate-700",
                                                column.cellClassName
                                            )}
                                        >
                                            {column.render
                                                ? column.render(row)
                                                : row[column.key]}
                                        </td>
                                    ))}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
