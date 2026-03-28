import {
    RiBarChartBoxLine,
    RiBuildingLine,
    RiDashboardLine,
    RiPulseLine,
    RiSettings4Line,
    RiTeamLine,
    RiUser3Line
} from "react-icons/ri";

const routeDefinitions = [
    {
        key: "overview",
        path: "/",
        label: "Overview",
        title: "Dashboard Overview",
        description:
            "Track workforce productivity, live presence, and operational focus from one executive control layer.",
        navDescription: "Company-wide command center",
        badge: "Live",
        icon: RiDashboardLine,
        highlights: [
            { label: "Active employees", value: "126", tone: "primary" },
            { label: "Focus score", value: "84%", tone: "secondary" },
            { label: "Idle alerts", value: "09", tone: "slate" }
        ]
    },
    {
        key: "monitoring",
        path: "/monitoring",
        label: "Live Monitoring",
        title: "Live Monitoring",
        description:
            "Watch employee status transitions in real time and identify idle, distracted, and offline patterns instantly.",
        navDescription: "Realtime activity stream",
        badge: "Realtime",
        icon: RiPulseLine,
        highlights: [
            { label: "Working now", value: "89", tone: "primary" },
            { label: "Distracted", value: "12", tone: "secondary" },
            { label: "Offline", value: "25", tone: "slate" }
        ]
    },
    {
        key: "employees",
        path: "/employees",
        label: "Employees",
        title: "Employees",
        description:
            "Browse employee-level productivity, focus consistency, and daily activity quality across the organization.",
        navDescription: "People and performance",
        badge: "Team",
        icon: RiTeamLine,
        highlights: [
            { label: "Tracked members", value: "148", tone: "primary" },
            { label: "Needs review", value: "17", tone: "secondary" },
            { label: "Top performers", value: "31", tone: "slate" }
        ]
    },
    {
        key: "reports",
        path: "/reports",
        label: "Reports",
        title: "Reports",
        description:
            "Generate daily, weekly, and monthly performance reports to uncover workforce trends and productivity shifts.",
        navDescription: "Performance analytics",
        badge: "Insights",
        icon: RiBarChartBoxLine,
        highlights: [
            { label: "Weekly exports", value: "24", tone: "primary" },
            { label: "Avg. productivity", value: "81%", tone: "secondary" },
            { label: "Trend accuracy", value: "94%", tone: "slate" }
        ]
    },
    {
        key: "teams",
        path: "/teams",
        label: "Teams",
        title: "Teams",
        description:
            "Compare departments, identify outliers, and benchmark how each team is spending its working hours.",
        navDescription: "Cross-team comparison",
        badge: "Compare",
        icon: RiBuildingLine,
        highlights: [
            { label: "Active teams", value: "08", tone: "primary" },
            { label: "Best momentum", value: "Design Ops", tone: "secondary" },
            { label: "Review flags", value: "03", tone: "slate" }
        ]
    },
    {
        key: "settings",
        path: "/settings",
        label: "Rules & Settings",
        title: "Rules and Settings",
        description:
            "Configure monitoring rules, working-hour expectations, status thresholds, and productivity policies.",
        navDescription: "Policies and thresholds",
        badge: "Config",
        icon: RiSettings4Line,
        highlights: [
            { label: "Rules active", value: "14", tone: "primary" },
            { label: "Alerts tuned", value: "06", tone: "secondary" },
            { label: "Last update", value: "Today", tone: "slate" }
        ]
    },
    {
        key: "employee-details",
        path: "/employees/:employeeId",
        label: "Employee Details",
        title: "Employee Details",
        description:
            "Review an individual employee timeline, productivity distribution, and notable workday interruptions.",
        navDescription: "Individual activity view",
        badge: "Profile",
        icon: RiUser3Line,
        navigation: false,
        highlights: [
            { label: "Focused time", value: "6.4h", tone: "primary" },
            { label: "Idle blocks", value: "04", tone: "secondary" },
            { label: "Context switches", value: "11", tone: "slate" }
        ]
    }
];
export const CommonDif = {
    brand: {
        name: "MonitorIQ",
        subtitle: "Productivity Intelligence"
    },
    header: {
        user: {
            name: "Olivia Carter",
            role: "Operations Manager",
            team: "Productivity Analytics"
        }
    },
    routeDefinitions,
    sidebarNavigation: routeDefinitions.filter(
        (route) => route.navigation !== false
    )
};
