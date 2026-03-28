import { CommonDif } from "../../../lib/commonDifinitions";
import mainLogo from "../../../assets/shared/MainLogo.png";
import avatarPlaceholder from "../../../assets/shared/avatar-placeholder.svg";

export default function Header() {
    const { header, brand } = CommonDif;

    return (
        <header className="fixed top-0 left-0 right-0 z-30 border-b border-slate-200/80 bg-white/85 backdrop-blur-xl lg:left-[320px]">
            <div className="flex h-24 items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-[22px] border border-slate-200/80 bg-white shadow-[0_20px_45px_-36px_rgba(15,23,42,0.75)]">
                    <img
                        src={mainLogo}
                        alt={`${brand.name} logo`}
                        className="h-9 w-9 object-contain"
                    />
                </div>

                <div className="flex items-center gap-3">
                    <p className="text-sm font-semibold text-slate-900">
                        {header.user.name}
                    </p>
                    <img
                        src={avatarPlaceholder}
                        alt={header.user.name}
                        className="h-14 w-14 rounded-[22px] border border-slate-200/80 bg-white object-cover shadow-[0_20px_45px_-36px_rgba(15,23,42,0.75)]"
                    />
                </div>
            </div>
        </header>
    );
}
