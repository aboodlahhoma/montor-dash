import { useState } from "react";
import LiveMonitoringHeroSection from "../../ui/LiveMonitoring/LiveMonitoringHeroSection";
import LiveMonitoringStatsSection from "../../ui/LiveMonitoring/LiveMonitoringStatsSection";
import LiveMonitoringWorkspaceSection from "../../ui/LiveMonitoring/LiveMonitoringWorkspaceSection";
import {
    liveAlerts,
    liveEmployees,
    monitoringStatusMeta,
    statusFilterOptions
} from "../../ui/LiveMonitoring/data";

export default function LiveMonitoring() {
    const [selectedStatus, setSelectedStatus] = useState("all");

    const filteredEmployees =
        selectedStatus === "all"
            ? liveEmployees
            : liveEmployees.filter((item) => item.status === selectedStatus);

    const statusSummary = monitoringStatusMeta.map((item) => ({
        ...item,
        value: liveEmployees.filter((employee) => employee.status === item.key)
            .length
    }));

    const averageFocus = filteredEmployees.length
        ? `${Math.round(
              filteredEmployees.reduce((total, item) => total + item.focus, 0) /
                  filteredEmployees.length
          )}%`
        : "0%";

    const mostUsedApp =
        Object.entries(
            filteredEmployees.reduce((apps, item) => {
                if (item.app === "Disconnected") {
                    return apps;
                }

                apps[item.app] = (apps[item.app] || 0) + 1;
                return apps;
            }, {})
        ).sort((left, right) => right[1] - left[1])[0]?.[0] || "No active app";

    const attentionCount = filteredEmployees.filter((item) =>
        ["idle", "distracted", "offline"].includes(item.status)
    ).length;

    const filteredAlerts =
        selectedStatus === "all"
            ? liveAlerts
            : liveAlerts.filter(
                  (item) =>
                      item.tone === selectedStatus || item.tone === "secondary"
              );

    return (
        <div className="space-y-6">
            <LiveMonitoringHeroSection
                selectedStatus={selectedStatus}
                onSelectStatus={setSelectedStatus}
                statusFilterOptions={statusFilterOptions}
                statusSummary={statusSummary}
                visibleCount={filteredEmployees.length}
            />
            <LiveMonitoringStatsSection
                visibleCount={filteredEmployees.length}
                averageFocus={averageFocus}
                attentionCount={attentionCount}
                mostUsedApp={mostUsedApp}
                selectedStatus={selectedStatus}
            />
            <LiveMonitoringWorkspaceSection
                employees={filteredEmployees}
                alerts={filteredAlerts}
                selectedStatus={selectedStatus}
            />
        </div>
    );
}
