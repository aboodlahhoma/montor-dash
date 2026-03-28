import {
    RiFilter3Line,
    RiSearchLine,
    RiTeamLine,
    RiUserSearchLine
} from "react-icons/ri";
import SectionTitle from "../Shared/SectionTitle";
import StatusBadge from "../Shared/StatusBadge";

function FilterField({ icon: Icon, label, children }) {
    return (
        <label className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-[0_18px_40px_-34px_rgba(15,23,42,0.7)]">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-100 text-slate-600">
                <Icon className="h-4.5 w-4.5" />
            </div>
            <div className="min-w-0 flex-1">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                    {label}
                </p>
                <div className="mt-1">{children}</div>
            </div>
        </label>
    );
}

export default function EmployeesHeroSection({
    searchTerm,
    onSearchTermChange,
    selectedTeam,
    onSelectedTeamChange,
    selectedStatus,
    onSelectedStatusChange,
    teamOptions,
    statusOptions,
    visibleCount
}) {
    return (
        <section className="space-y-5">
            <SectionTitle
                eyebrow="Employees"
                title="Employee Directory"
                description="Browse monitored employees, compare focus quality, and narrow the workforce list by team or current status."
                action={
                    <div className="flex flex-wrap items-center gap-3">
                        <StatusBadge label="Directory View" tone="primary" />
                        <div className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white">
                            <RiUserSearchLine className="h-3.5 w-3.5 text-secondary" />
                            {visibleCount} results
                        </div>
                    </div>
                }
            />

            <div className="grid gap-3 xl:grid-cols-[minmax(0,1.4fr)_minmax(240px,0.8fr)_minmax(240px,0.8fr)]">
                <FilterField icon={RiSearchLine} label="Search">
                    <input
                        value={searchTerm}
                        onChange={(event) =>
                            onSearchTermChange(event.target.value)
                        }
                        placeholder="Find employee, email, or role"
                        className="w-full border-0 bg-transparent p-0 text-sm font-medium text-slate-700 outline-none placeholder:text-slate-400"
                    />
                </FilterField>

                <FilterField icon={RiTeamLine} label="Team">
                    <select
                        value={selectedTeam}
                        onChange={(event) =>
                            onSelectedTeamChange(event.target.value)
                        }
                        className="w-full border-0 bg-transparent p-0 text-sm font-medium text-slate-700 outline-none"
                    >
                        {teamOptions.map((team) => (
                            <option key={team} value={team}>
                                {team}
                            </option>
                        ))}
                    </select>
                </FilterField>

                <FilterField icon={RiFilter3Line} label="Status">
                    <select
                        value={selectedStatus}
                        onChange={(event) =>
                            onSelectedStatusChange(event.target.value)
                        }
                        className="w-full border-0 bg-transparent p-0 text-sm font-medium text-slate-700 outline-none"
                    >
                        {statusOptions.map((status) => (
                            <option key={status.key} value={status.key}>
                                {status.label}
                            </option>
                        ))}
                    </select>
                </FilterField>
            </div>
        </section>
    );
}
