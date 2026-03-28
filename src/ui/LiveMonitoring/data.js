import { employeeDirectory, employeeStatusMeta } from "../../lib/employeeData";

export const monitoringStatusMeta = employeeStatusMeta.map((item) => ({
    ...item,
    change:
        item.key === "working"
            ? "+4 in 10m"
            : item.key === "idle"
              ? "+2 in 10m"
              : item.key === "distracted"
                ? "-1 in 10m"
                : "-3 in 10m",
    helper:
        item.key === "working"
            ? "Employees actively engaged in productive tasks right now."
            : item.key === "idle"
              ? "No meaningful input activity detected during the watch window."
              : item.key === "distracted"
                ? "Behavior or application usage outside expected workflow."
                : "Unavailable or disconnected from monitored workstations."
}));

export const statusFilterOptions = [
    { key: "all", label: "All Employees" },
    ...employeeStatusMeta.map((item) => ({
        key: item.key,
        label: item.label
    }))
];

export const liveEmployees = [101, 102, 103, 104, 105, 106]
    .map((employeeId) =>
        employeeDirectory.find(
            (employee) => String(employee.id) === String(employeeId)
        )
    )
    .filter(Boolean)
    .map((employee) => ({
        id: employee.id,
        name: employee.name,
        team: employee.team,
        status: employee.status,
        focus: employee.focus,
        app: employee.currentApp,
        lastActivity: employee.lastActivity,
        session: employee.session
    }));

export const liveAlerts = [
    {
        title: "Idle escalation",
        detail: "Customer Success crossed the idle threshold for 3 employees.",
        tone: "idle",
        label: "Idle",
        time: "2 min ago"
    },
    {
        title: "Distraction spike",
        detail: "Sales team reported a short burst of non-work activity.",
        tone: "distracted",
        label: "Distracted",
        time: "5 min ago"
    },
    {
        title: "Offline recovery",
        detail: "2 workstations reconnected after connectivity interruption.",
        tone: "secondary",
        label: "Recovered",
        time: "9 min ago"
    }
];

export const liveTeamPulse = [
    {
        team: "Engineering",
        active: "32 online",
        performance: "92%",
        tone: "working"
    },
    {
        team: "Design Ops",
        active: "17 online",
        performance: "87%",
        tone: "working"
    },
    {
        team: "Sales",
        active: "21 online",
        performance: "66%",
        tone: "distracted"
    },
    {
        team: "Support",
        active: "19 online",
        performance: "73%",
        tone: "idle"
    }
];
