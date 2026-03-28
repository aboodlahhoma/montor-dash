export const employeeStatusMeta = [
    { key: "working", label: "Working", tone: "working" },
    { key: "idle", label: "Idle", tone: "idle" },
    { key: "distracted", label: "Distracted", tone: "distracted" },
    { key: "offline", label: "Offline", tone: "offline" }
];

export const employeeStatusOptions = [
    { key: "all", label: "All statuses" },
    ...employeeStatusMeta.map((item) => ({
        key: item.key,
        label: item.label
    }))
];

export const employeeDirectory = [
    {
        id: 101,
        name: "Ava Morgan",
        email: "ava.morgan@monitoriq.io",
        role: "Frontend Engineer",
        team: "Engineering",
        status: "working",
        focus: 94,
        lastActivity: "Just now",
        currentApp: "VS Code",
        session: "3h 12m",
        manager: "Olivia Carter",
        shift: "08:30 - 17:30",
        location: "San Francisco",
        productiveHours: "6h 08m",
        idleTime: "24m",
        distractedTime: "18m",
        weeklyTrend: [82, 86, 89, 91, 94],
        activityMix: [
            {
                label: "Focused work",
                value: "68%",
                width: "68%",
                tone: "bg-primary"
            },
            {
                label: "Meetings",
                value: "19%",
                width: "19%",
                tone: "bg-secondary"
            },
            {
                label: "Context switching",
                value: "13%",
                width: "13%",
                tone: "bg-slate-300"
            }
        ],
        tools: [
            { name: "VS Code", usage: "2h 14m" },
            { name: "GitHub", usage: "1h 08m" },
            { name: "Linear", usage: "42m" }
        ],
        timeline: [
            {
                time: "08:31",
                title: "Signed in and launched VS Code",
                detail: "Began sprint work on the dashboard shell."
            },
            {
                time: "10:02",
                title: "Design review sync",
                detail: "Joined product and design meeting for 28 minutes."
            },
            {
                time: "13:18",
                title: "Focus block resumed",
                detail: "Returned to implementation work after lunch."
            }
        ]
    },
    {
        id: 102,
        name: "Mason Reed",
        email: "mason.reed@monitoriq.io",
        role: "Product Designer",
        team: "Design Ops",
        status: "working",
        focus: 88,
        lastActivity: "1 min ago",
        currentApp: "Figma",
        session: "2h 45m",
        manager: "Olivia Carter",
        shift: "09:00 - 18:00",
        location: "Austin",
        productiveHours: "5h 41m",
        idleTime: "32m",
        distractedTime: "21m",
        weeklyTrend: [78, 81, 84, 86, 88],
        activityMix: [
            {
                label: "Focused work",
                value: "61%",
                width: "61%",
                tone: "bg-primary"
            },
            {
                label: "Collaboration",
                value: "27%",
                width: "27%",
                tone: "bg-secondary"
            },
            {
                label: "Context switching",
                value: "12%",
                width: "12%",
                tone: "bg-slate-300"
            }
        ],
        tools: [
            { name: "Figma", usage: "2h 02m" },
            { name: "FigJam", usage: "36m" },
            { name: "Notion", usage: "28m" }
        ],
        timeline: [
            {
                time: "09:06",
                title: "Opened product design workspace",
                detail: "Started revision pass on the live monitoring page."
            },
            {
                time: "11:15",
                title: "Prototype review",
                detail: "Shared handoff updates with the frontend team."
            },
            {
                time: "14:04",
                title: "UI polishing block",
                detail: "Focused on system consistency and spacing cleanup."
            }
        ]
    },
    {
        id: 103,
        name: "Chloe Bennett",
        email: "chloe.bennett@monitoriq.io",
        role: "Support Specialist",
        team: "Support",
        status: "idle",
        focus: 63,
        lastActivity: "11 min ago",
        currentApp: "Zendesk",
        session: "1h 58m",
        manager: "Daniel Brooks",
        shift: "08:00 - 16:00",
        location: "Phoenix",
        productiveHours: "4h 19m",
        idleTime: "1h 04m",
        distractedTime: "22m",
        weeklyTrend: [71, 69, 67, 65, 63],
        activityMix: [
            {
                label: "Focused work",
                value: "49%",
                width: "49%",
                tone: "bg-primary"
            },
            {
                label: "Customer handling",
                value: "35%",
                width: "35%",
                tone: "bg-secondary"
            },
            {
                label: "Idle gaps",
                value: "16%",
                width: "16%",
                tone: "bg-amber-300"
            }
        ],
        tools: [
            { name: "Zendesk", usage: "1h 27m" },
            { name: "Slack", usage: "31m" },
            { name: "Knowledge Base", usage: "18m" }
        ],
        timeline: [
            {
                time: "08:10",
                title: "Customer queue triage",
                detail: "Reviewed incoming support requests."
            },
            {
                time: "11:47",
                title: "Idle threshold warning",
                detail: "No activity detected for more than 9 minutes."
            },
            {
                time: "13:02",
                title: "Session resumed",
                detail: "Returned to support dashboard after interruption."
            }
        ]
    },
    {
        id: 104,
        name: "Ethan Cooper",
        email: "ethan.cooper@monitoriq.io",
        role: "Sales Executive",
        team: "Sales",
        status: "distracted",
        focus: 42,
        lastActivity: "3 min ago",
        currentApp: "Browser",
        session: "4h 06m",
        manager: "Priya Nair",
        shift: "09:00 - 18:00",
        location: "Chicago",
        productiveHours: "3h 11m",
        idleTime: "38m",
        distractedTime: "1h 17m",
        weeklyTrend: [61, 58, 54, 48, 42],
        activityMix: [
            {
                label: "Focused work",
                value: "38%",
                width: "38%",
                tone: "bg-primary"
            },
            {
                label: "Calls and outreach",
                value: "29%",
                width: "29%",
                tone: "bg-secondary"
            },
            {
                label: "Distracted activity",
                value: "33%",
                width: "33%",
                tone: "bg-rose-300"
            }
        ],
        tools: [
            { name: "CRM", usage: "1h 02m" },
            { name: "Browser", usage: "1h 44m" },
            { name: "Slack", usage: "24m" }
        ],
        timeline: [
            {
                time: "09:14",
                title: "Outbound lead session",
                detail: "Started daily outreach sequence."
            },
            {
                time: "12:08",
                title: "Distraction spike detected",
                detail: "Extended non-work browsing crossed alert threshold."
            },
            {
                time: "14:26",
                title: "Returned to CRM",
                detail: "Resumed account update workflow."
            }
        ]
    },
    {
        id: 105,
        name: "Sophia Grant",
        email: "sophia.grant@monitoriq.io",
        role: "Backend Engineer",
        team: "Engineering",
        status: "working",
        focus: 91,
        lastActivity: "Just now",
        currentApp: "Postman",
        session: "2h 21m",
        manager: "Olivia Carter",
        shift: "08:30 - 17:30",
        location: "Seattle",
        productiveHours: "5h 58m",
        idleTime: "19m",
        distractedTime: "15m",
        weeklyTrend: [85, 87, 88, 90, 91],
        activityMix: [
            {
                label: "Focused work",
                value: "66%",
                width: "66%",
                tone: "bg-primary"
            },
            {
                label: "Testing",
                value: "22%",
                width: "22%",
                tone: "bg-secondary"
            },
            {
                label: "Context switching",
                value: "12%",
                width: "12%",
                tone: "bg-slate-300"
            }
        ],
        tools: [
            { name: "Postman", usage: "1h 09m" },
            { name: "Terminal", usage: "58m" },
            { name: "DataGrip", usage: "44m" }
        ],
        timeline: [
            {
                time: "08:38",
                title: "API validation block",
                detail: "Verified service contracts for the dashboard feed."
            },
            {
                time: "10:44",
                title: "Database sync check",
                detail: "Reviewed event ingestion timing and latency."
            },
            {
                time: "13:56",
                title: "Testing resumed",
                detail: "Continued backend verification after lunch."
            }
        ]
    },
    {
        id: 106,
        name: "Noah Hayes",
        email: "noah.hayes@monitoriq.io",
        role: "Support Lead",
        team: "Support",
        status: "offline",
        focus: 0,
        lastActivity: "22 min ago",
        currentApp: "Disconnected",
        session: "0h 00m",
        manager: "Daniel Brooks",
        shift: "07:30 - 15:30",
        location: "Remote",
        productiveHours: "3h 52m",
        idleTime: "41m",
        distractedTime: "0m",
        weeklyTrend: [74, 73, 72, 71, 69],
        activityMix: [
            {
                label: "Focused work",
                value: "54%",
                width: "54%",
                tone: "bg-primary"
            },
            {
                label: "Team coordination",
                value: "29%",
                width: "29%",
                tone: "bg-secondary"
            },
            {
                label: "Offline time",
                value: "17%",
                width: "17%",
                tone: "bg-slate-300"
            }
        ],
        tools: [
            { name: "Helpdesk", usage: "1h 36m" },
            { name: "Slack", usage: "38m" },
            { name: "Disconnected", usage: "Current" }
        ],
        timeline: [
            {
                time: "07:42",
                title: "Support standup",
                detail: "Reviewed escalation queue and staffing coverage."
            },
            {
                time: "11:53",
                title: "Connectivity interruption",
                detail: "Workstation disconnected from the monitoring agent."
            },
            {
                time: "12:12",
                title: "Offline state persisted",
                detail: "Awaiting reconnection to resume visibility."
            }
        ]
    },
    {
        id: 107,
        name: "Lina Brooks",
        email: "lina.brooks@monitoriq.io",
        role: "Operations Analyst",
        team: "Operations",
        status: "working",
        focus: 86,
        lastActivity: "2 min ago",
        currentApp: "Looker",
        session: "2h 09m",
        manager: "Olivia Carter",
        shift: "09:00 - 18:00",
        location: "Denver",
        productiveHours: "5h 12m",
        idleTime: "28m",
        distractedTime: "17m",
        weeklyTrend: [79, 82, 84, 85, 86],
        activityMix: [
            {
                label: "Focused work",
                value: "59%",
                width: "59%",
                tone: "bg-primary"
            },
            {
                label: "Data review",
                value: "26%",
                width: "26%",
                tone: "bg-secondary"
            },
            {
                label: "Switching",
                value: "15%",
                width: "15%",
                tone: "bg-slate-300"
            }
        ],
        tools: [
            { name: "Looker", usage: "1h 18m" },
            { name: "Sheets", usage: "46m" },
            { name: "Slack", usage: "21m" }
        ],
        timeline: [
            {
                time: "09:11",
                title: "Opened analytics dashboard",
                detail: "Started reviewing workforce performance trends."
            },
            {
                time: "11:04",
                title: "Data export review",
                detail: "Validated reporting accuracy for leadership metrics."
            },
            {
                time: "14:18",
                title: "Ops planning block",
                detail: "Prepared notes for operations health sync."
            }
        ]
    },
    {
        id: 108,
        name: "Nora Patel",
        email: "nora.patel@monitoriq.io",
        role: "Account Manager",
        team: "Sales",
        status: "distracted",
        focus: 51,
        lastActivity: "5 min ago",
        currentApp: "Browser",
        session: "3h 27m",
        manager: "Priya Nair",
        shift: "09:00 - 18:00",
        location: "New York",
        productiveHours: "4h 03m",
        idleTime: "27m",
        distractedTime: "54m",
        weeklyTrend: [63, 61, 59, 55, 51],
        activityMix: [
            {
                label: "Focused work",
                value: "44%",
                width: "44%",
                tone: "bg-primary"
            },
            {
                label: "Client work",
                value: "32%",
                width: "32%",
                tone: "bg-secondary"
            },
            {
                label: "Distracted activity",
                value: "24%",
                width: "24%",
                tone: "bg-rose-300"
            }
        ],
        tools: [
            { name: "CRM", usage: "1h 12m" },
            { name: "Browser", usage: "58m" },
            { name: "Email", usage: "34m" }
        ],
        timeline: [
            {
                time: "09:19",
                title: "Client portfolio review",
                detail: "Prepared follow-ups for open sales accounts."
            },
            {
                time: "12:34",
                title: "Distraction warning",
                detail: "Non-work browsing increased beyond expected threshold."
            },
            {
                time: "15:03",
                title: "Returned to client planning",
                detail: "Resumed account check-ins and outreach preparation."
            }
        ]
    }
];

export function getEmployeeById(employeeId) {
    return employeeDirectory.find(
        (employee) => String(employee.id) === String(employeeId)
    );
}

export function getEmployeeStatusLabel(statusKey) {
    return (
        employeeStatusMeta.find((item) => item.key === statusKey)?.label ||
        statusKey
    );
}
