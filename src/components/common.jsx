import { ArrowRight, ArrowUpRight } from "lucide-react";
import { siteData } from "../../data/siteData.js";

export const imageFallback = (event) => { event.currentTarget.style.display = "none"; };

export function Logo({ light = false }) {
    return (
        <a
            href="#home"
            className="flex min-w-[220px] items-center gap-[10px] max-[640px]:min-w-0"
            aria-label={`${siteData.brandName} home`}
        >
            {siteData.logo && (
                <img
                    src={siteData.logo}
                    alt={`${siteData.brandName} logo`}
                    className="h-8 w-8 object-contain max-[640px]:h-[41px] max-[640px]:w-[41px]"
                    onError={imageFallback}
                />
            )}
            <span className={`grid leading-none text-leaf ${light ? "text-white" : ""}`}>
                <strong className="font-display text-[21px] font-extrabold tracking-[.045em] max-[640px]:text-lg">
                    {siteData.brandName}
                </strong>
                <small className="mt-1 font-display text-[8px] font-bold tracking-[.115em] text-[#e23631]">
                    {siteData.descriptor}
                </small>
            </span>
        </a>
    );
}

export function Eyebrow({ children, light = false, centered = false }) {
    return (
        <div
            className={`flex items-center gap-[10px] text-[10px] font-bold uppercase leading-snug tracking-[.14em] ${light ? "text-[#c6d7a2]" : "text-[#438456]"} ${centered ? "justify-center" : ""}`}
        >
            <span className={`h-px w-[25px] ${light ? "bg-[#c9d83e]" : "bg-[#9abe46]"}`} />
            {children}
            {centered && <span className="h-px w-[25px] bg-[#9abe46]" />}
        </div>
    );
}

export function SectionHeading({ eyebrow, title, body }) {
    return (
        <div className="mb-[34px] flex items-end justify-between gap-7 max-[640px]:mb-[25px] max-[640px]:block">
            <div>
                <Eyebrow>{eyebrow}</Eyebrow>
                <h2 className="mt-3 text-[clamp(30px,3.3vw,42px)] font-extrabold leading-[1.13] text-[#143e2a] max-[640px]:text-[31px]">
                    {title}
                </h2>
            </div>
            {body && (
                <p className="mb-0 max-w-[355px] text-[13px] leading-[1.8] text-[#738076] max-[640px]:mt-3 max-[640px]:text-xs">
                    {body}
                </p>
            )}
        </div>
    );
}
