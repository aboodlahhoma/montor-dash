import Sidebar from "./ui/layout/Sidebar/Sidebar";
import Header from "./ui/layout/Header/Header";
import ApplicationRoutes from "./routes/route";

export default function AppContent() {
    return (
        <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.14),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(20,184,166,0.12),_transparent_24%),linear-gradient(180deg,_#f8fafc_0%,_#eef4ff_100%)] text-slate-950 [font-family:Manrope,Segoe_UI,sans-serif]">
            <div className="flex min-h-screen flex-col lg:flex-row">
                <div className="pt-24 lg:pt-0">
                    <Sidebar />
                </div>

                <div className="flex min-h-screen min-w-0 flex-1 flex-col pt-24">
                    <Header />

                    <main className="flex-1">
                        <div className="p-4 sm:p-6 lg:p-8 xl:p-10">
                            <ApplicationRoutes />
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}
