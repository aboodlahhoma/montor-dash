import { Link, NavLink } from "react-router-dom";
import { RiPulseLine } from "react-icons/ri";
import { CommonDif } from "../../../lib/commonDifinitions";

function SidebarNavItem({ item }) {
    const Icon = item.icon;

    return (
        <NavLink
            to={item.path}
            end={item.path === "/"}
            className={({ isActive }) =>
                `group flex items-start gap-3 rounded-2xl border px-4 py-3 transition-all duration-200 ${
                    isActive
                        ? "border-primary/20 bg-primary/10 text-slate-950 shadow-[0_18px_45px_-28px_rgba(37,99,235,0.7)]"
                        : "border-transparent text-slate-600 hover:border-slate-200 hover:bg-white hover:text-slate-950"
                }`
            }
        >
            {({ isActive }) => (
                <>
                    <div
                        className={`mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border transition-colors ${
                            isActive
                                ? "border-primary/20 bg-white text-primary"
                                : "border-slate-200 bg-slate-50 text-slate-500 group-hover:border-primary/15 group-hover:text-primary"
                        }`}
                    >
                        <Icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                            <span className="text-sm font-semibold tracking-tight">
                                {item.label}
                            </span>
                            <span
                                className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] ${
                                    isActive
                                        ? "bg-white text-primary"
                                        : "bg-slate-100 text-slate-500"
                                }`}
                            >
                                {item.badge}
                            </span>
                        </div>
                        <p className="mt-1 text-xs leading-5 text-slate-500">
                            {item.navDescription}
                        </p>
                    </div>
                </>
            )}
        </NavLink>
    );
}

export default function Sidebar() {
    const { brand, sidebarNavigation } = CommonDif;

    return (
        <aside className="w-full border-b border-slate-200/80 bg-white/85 backdrop-blur-xl lg:h-screen lg:w-[320px] lg:border-b-0 lg:border-r">
            <div className="flex h-full flex-col p-4 sm:p-5">
                <Link
                    to="/"
                    className="rounded-[28px] border border-slate-200/80 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 p-5 text-white shadow-[0_30px_60px_-35px_rgba(15,23,42,0.9)]"
                >
                    <div className="flex items-start justify-between gap-4">
                        <div className="space-y-3">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-secondary ring-1 ring-white/15">
                                <RiPulseLine className="h-6 w-6" />
                            </div>
                            <div>
                                <p className="text-lg font-semibold tracking-tight">
                                    {brand.name}
                                </p>
                                <p className="mt-1 text-sm text-slate-300">
                                    {brand.subtitle}
                                </p>
                            </div>
                        </div>
                        <div className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-secondary">
                            Admin
                        </div>
                    </div>

                    <div className="mt-6 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                        <span className="relative flex h-3 w-3">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary/70"></span>
                            <span className="relative inline-flex h-3 w-3 rounded-full bg-secondary"></span>
                        </span>
                        <div>
                            <p className="text-sm font-medium text-white">
                                Realtime sync active
                            </p>
                            <p className="text-xs text-slate-300">
                                Workforce statuses are updating live
                            </p>
                        </div>
                    </div>
                </Link>

                <div className="mt-6">
                    <p className="px-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                        Workspace
                    </p>
                    <nav className="mt-3 space-y-2">
                        {sidebarNavigation.map((item) => (
                            <SidebarNavItem key={item.key} item={item} />
                        ))}
                    </nav>
                </div>
            </div>
        </aside>
    );
}
