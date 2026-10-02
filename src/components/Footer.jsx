import { ArrowUpRight } from "lucide-react";
import { siteData, content } from "../../data/siteData.js";
import { Logo } from "./common.jsx";

const navigation = content.navigation;
const contact = { ...siteData, directionsLabel: content.labels.directions };

export function Footer() {
    return (
        <footer className="bg-[#062f20] text-[#cfddd2]">
            <div className="container grid grid-cols-[1.35fr_.7fr_1fr_.8fr] gap-[38px] pb-[43px] pt-[51px] max-[900px]:grid-cols-2 max-[640px]:gap-x-[17px] max-[640px]:gap-y-7 max-[640px]:pb-[29px] max-[640px]:pt-[37px]">
                <div className="max-[640px]:col-span-2">
                    <Logo light />
                    <p className="mb-0 mt-4 text-[11px] text-[#9bb4a2] max-[640px]:mt-[9px]">{siteData.tagline}</p>
                </div>
                <div className="flex flex-col items-start gap-[11px] text-[10px] leading-[1.6] max-[640px]:text-[9px]">
                    <strong className="mb-[3px] font-display text-[11px] text-white">{content.footer.explore}</strong>
                    {navigation.map((item) => (
                        <a className="hover:text-sun" key={item.href} href={item.href}>
                            {item.label}
                        </a>
                    ))}
                </div>
                <div className="flex flex-col items-start gap-[11px] text-[10px] leading-[1.6] max-[640px]:text-[9px]">
                    <strong className="mb-[3px] font-display text-[11px] text-white">{content.footer.visit}</strong>
                    <span>{contact.address}</span>
                    <span>{contact.branch}</span>
                    <a href={`tel:${contact.phone}`}>{contact.phoneDisplay}</a>
                </div>
                <div className="flex flex-col gap-[13px] font-display text-[13px] font-bold text-white">
                    <span>{content.footer.invitation}</span>
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-[7px] font-sans text-[11px] font-semibold text-[#e9d63b]"
                    >
                        {content.footer.planVisit}
                        <ArrowUpRight size={16} />
                    </a>
                </div>
                <div className="flex flex-col items-start gap-[11px] text-[10px] leading-[1.6] max-[900px]:col-span-2 max-[640px]:text-[9px]">
                    <strong className="mb-[3px] font-display text-[11px] text-white">{content.footer.policies}</strong>
                    {content.footer.links.map((link) => (
                        <a className="hover:text-sun" key={link.href} href={link.href}>
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>
            <div className="container flex min-h-[49px] items-center justify-between border-t border-white/10 text-[9px] text-[#87a18e] max-[640px]:min-h-[45px] max-[640px]:text-[8px]">
                <span>
                    © {new Date().getFullYear()} {siteData.copyright}
                </span>
                <a href="#home" className="hover:text-sun">
                    Back to top ↑
                </a>
            </div>
        </footer>
    );
}
