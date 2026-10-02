import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { siteData, content } from "../../data/siteData.js";
import { Logo } from "./common.jsx";

const navigation = content.navigation;
const contact = { ...siteData, directionsLabel: content.labels.directions };

export function Header() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const update = () => setScrolled(window.scrollY > 16);
        window.addEventListener("scroll", update, { passive: true });
        return () => window.removeEventListener("scroll", update);
    }, []);
    return (
        <header
            className={`sticky top-0 z-50 h-[82px] border-b border-forest/[.08] bg-white/95 backdrop-blur-xl transition-all duration-300 max-[640px]:h-[69px] ${scrolled ? "h-[72px] shadow-[0_7px_28px_rgba(6,61,40,.08)] max-[640px]:h-16" : ""}`}
        >
            <div className="container flex h-full items-center justify-between gap-[30px]">
                <Logo />
                <nav
                    id="primary-navigation"
                    className={`mobile-nav relative flex items-center gap-[clamp(18px,2.6vw,36px)] ${open ? "is-open" : ""}`}
                    aria-label={content.labels.mainNavigation}
                >
                    {navigation.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            onClick={() => setOpen(false)}
                            className="text-[13px] font-semibold text-[#56685f] transition-colors hover:text-leaf"
                        >
                            {item.label}
                        </a>
                    ))}
                    {/* <a className="mobile-phone text-[13px] font-semibold" href={`tel:${contact.phone}`}>
                        {contact.phoneDisplay}
                    </a> */}
                </nav>
                <a
                    className="inline-flex items-center gap-[9px] rounded-full bg-[#f0f6e8] px-[17px] py-3 text-xs font-bold text-[#0a713a] max-[900px]:hidden"
                    href={`tel:${contact.phone}`}
                >
                    <Phone size={16} /> {content.labels.callStore}
                </a>
                <button
                    className="hidden h-[41px] w-[41px] place-items-center rounded-full border-0 bg-[#f0f5e8] text-[#145032] max-[640px]:grid"
                    type="button"
                    aria-label={open ? content.labels.closeMenu : content.labels.openMenu}
                    aria-expanded={open}
                    aria-controls="primary-navigation"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <X /> : <Menu />}
                </button>
            </div>
        </header>
    );
}
