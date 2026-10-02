import { ArrowRight } from "lucide-react";
import { siteData, content } from "../../../data/siteData.js";
import { Eyebrow } from "../common.jsx";

export function About() {
    return (
        <section id="about" className="py-[102px] max-[640px]:py-[68px]">
            <div className="container grid grid-cols-2 items-center gap-[clamp(45px,8vw,105px)] max-[640px]:grid-cols-1 max-[640px]:gap-[34px]">
                <div className="relative max-w-[480px] pb-[26px] pr-[25px]">
                    <div className="relative aspect-[1.08] overflow-hidden rounded-lg bg-[#e7efd7]">
                        <div className="about-photo-placeholder absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[linear-gradient(145deg,#e7efd7,#cadfae)] font-display text-sm font-bold text-[#538250]">
                            <img
                                src={siteData.aboutImage}
                                alt="Shopping cart filled with groceries"
                                loading="lazy"
                                className="absolute inset-0 z-[1] h-full w-full object-contain p-7"
                            />
                        </div>
                    </div>
                    <div className="absolute bottom-0 right-0 flex items-center gap-[9px] rounded-md bg-white px-[19px] py-[15px] text-[11px] font-bold text-[#355643] shadow-soft">
                        <span className="h-2 w-2 rounded-full bg-[#eacb2e]" />
                        {siteData.branch}
                    </div>
                </div>
                <div>
                    <Eyebrow>{content.about.eyebrow}</Eyebrow>
                    <h2 className="mb-4 mt-[13px] text-[clamp(32px,3.8vw,46px)] font-extrabold leading-[1.13] text-[#143e2a] max-[640px]:text-[34px]">
                        {content.about.title}
                    </h2>
                    <p className="text-[13px] leading-[1.9] text-[#758277] max-[640px]:text-xs">{content.about.body}</p>
                    <ul className="my-[23px] grid list-none gap-[13px] p-0">
                        {content.about.points.map((point) => (
                            <li
                                key={point}
                                className="flex items-center gap-[11px] text-xs font-semibold text-[#46614e] max-[640px]:text-[11px]"
                            >
                                <span className="grid h-5 w-5 place-items-center rounded-full bg-[#edf5dc] text-xs text-[#24834a]">
                                    ✓
                                </span>
                                {point}
                            </li>
                        ))}
                    </ul>
                    <a href="#contact" className="inline-flex items-center gap-[10px] text-xs font-bold text-[#128049]">
                        {content.about.visitLink}
                        <ArrowRight size={17} />
                    </a>
                </div>
            </div>
        </section>
    );
}
