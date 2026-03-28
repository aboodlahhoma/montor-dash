import {
    RiAlarmWarningLine,
    RiCheckboxCircleLine,
    RiTimeLine,
    RiWifiOffLine
} from "react-icons/ri";
import StatCard from "../Shared/StatCard";
import { overviewStats } from "./data";

const overviewIcons = {
    working: RiCheckboxCircleLine,
    idle: RiTimeLine,
    distracted: RiAlarmWarningLine,
    offline: RiWifiOffLine
};

export default function OverviewStatsSection() {
    return (
        <section className="grid gap-4 md:grid-cols-2 2xl:grid-cols-4">
            {overviewStats.map((item) => (
                <StatCard
                    key={item.key}
                    icon={overviewIcons[item.key]}
                    label={item.label}
                    value={item.value}
                    helper={item.helper}
                    change={item.change}
                    tone={item.key}
                />
            ))}
        </section>
    );
}
