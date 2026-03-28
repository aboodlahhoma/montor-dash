import OverviewHeroSection from "../../ui/OverView/OverviewHeroSection";
import OverviewStatsSection from "../../ui/OverView/OverviewStatsSection";
import OverviewWorkspaceSection from "../../ui/OverView/OverviewWorkspaceSection";

export default function OverView() {
    return (
        <div className="space-y-6">
            <OverviewHeroSection />
            <OverviewStatsSection />
            <OverviewWorkspaceSection />
        </div>
    );
}
