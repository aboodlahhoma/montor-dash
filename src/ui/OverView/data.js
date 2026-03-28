import { employeeDirectory, employeeStatusMeta } from "../../lib/employeeData";

export const overviewStats = [
    {
        key: "working",
        label: "Working",
        value: "86",
        change: "+6%",
        helper: "Employees currently active on productive work."
    },
    {
        key: "idle",
        label: "Idle",
        value: "18",
        change: "-2%",
        helper: "No keyboard or mouse activity in the last 10 minutes."
    },
    {
        key: "distracted",
        label: "Distracted",
        value: "11",
        change: "+3%",
        helper: "Detected non-work behavior or context drift during shift time."
    },
    {
        key: "offline",
        label: "Offline",
        value: "21",
        change: "-5%",
        helper: "Away from workstation or outside scheduled monitoring hours."
    }
];

export const productivityBreakdown = [
    {
        label: "Deep work blocks",
        value: "62%",
        width: "62%",
        tone: "bg-primary"
    },
    {
        label: "Meetings and collaboration",
        value: "24%",
        width: "24%",
        tone: "bg-secondary"
    },
    {
        label: "Context switching",
        value: "14%",
        width: "14%",
        tone: "bg-slate-300"
    }
];

export const teamPerformance = [
    {
        team: "Design Ops",
        productivity: "91%",
        status: "Working",
        tone: "working"
    },
    {
        team: "Engineering",
        productivity: "88%",
        status: "Working",
        tone: "working"
    },
    {
        team: "Support",
        productivity: "74%",
        status: "Idle",
        tone: "idle"
    },
    {
        team: "Sales",
        productivity: "69%",
        status: "Distracted",
        tone: "distracted"
    }
];

export const liveEmployees = [107, 101, 108, 106]
    .map((employeeId) =>
        employeeDirectory.find(
            (employee) => String(employee.id) === String(employeeId)
        )
    )
    .filter(Boolean)
    .map((employee) => {
        const status =
            employeeStatusMeta.find((item) => item.key === employee.status)
                ?.label || employee.status;

        return {
            id: employee.id,
            name: employee.name,
            team: employee.team,
            status,
            tone: employee.status,
            focus: `${employee.focus}%`
        };
    });

export const alertFeed = [
    {
        title: "Idle threshold triggered",
        detail: "3 employees have been idle for more than 18 minutes.",
        tone: "idle"
    },
    {
        title: "Distracted session spike",
        detail: "Sales team crossed distraction threshold during the last hour.",
        tone: "distracted"
    },
    {
        title: "Offline sync completed",
        detail: "Morning attendance reconciliation is now up to date.",
        tone: "secondary"
    }
];
