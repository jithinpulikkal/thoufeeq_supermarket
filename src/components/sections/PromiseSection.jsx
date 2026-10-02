import { Leaf, Tag, ShieldCheck, HeartHandshake, CarFront } from "lucide-react";
import { content } from "../../../data/siteData.js";
import { Eyebrow } from "../common.jsx";

const promises = content.promises;
const icons = { Tag, ShieldCheck, Leaf, HeartHandshake, CarFront };

export function PromiseSection() {
    return (
        <section id="promise" className="bg-[#f8faf5] py-[94px] max-[640px]:py-[65px]">
            <div className="container">
                <div className="mx-auto mb-[38px] max-w-[620px] text-center max-[640px]:mb-[27px]">
                    <Eyebrow centered>{content.sections.promiseEyebrow}</Eyebrow>
                    <h2 className="mb-0 mt-[13px] text-[clamp(30px,3.3vw,42px)] font-extrabold leading-[1.13] text-[#143e2a] max-[640px]:text-[31px]">
                        {content.sections.promiseTitle}
                    </h2>
                    <p className="mb-0 mt-3 text-[13px] text-[#758277] max-[640px]:text-xs max-[640px]:leading-[1.7]">
                        {content.sections.promiseBody}
                    </p>
                </div>
                <div className="grid grid-cols-5 gap-[14px] max-[900px]:grid-cols-3 max-[640px]:grid-cols-2 max-[640px]:gap-[10px]">
                    {promises.map((feature, index) => {
                        const Icon = icons[feature.icon] || Leaf;
                        return (
                            <article
                                key={feature.title}
                                style={{ "--card-index": index }}
                                className={`animate-fade-up rounded-lg border border-[#edf0e8] bg-white px-[19px] pb-[21px] pt-[23px] max-[640px]:px-[13px] max-[640px]:pb-4 max-[640px]:pt-4 ${index === promises.length - 1 ? "max-[640px]:col-span-2" : ""}`}
                            >
                                <span
                                    className={`mb-[17px] grid h-11 w-11 place-items-center rounded-full bg-[#edf5dc] text-[#218044] max-[640px]:mb-[13px] max-[640px]:h-[38px] max-[640px]:w-[38px] ${index % 2 ? "!bg-[#fff7ce] !text-[#a08a0c]" : ""}`}
                                >
                                    <Icon size={23} strokeWidth={1.8} />
                                </span>
                                <h3 className="mb-2 font-display text-[13px] font-bold leading-[1.4] text-[#1b432e] max-[640px]:text-xs">
                                    {feature.title}
                                </h3>
                                <p className="mb-0 text-[11px] leading-[1.65] text-[#7a887d] max-[640px]:text-[10px]">
                                    {feature.description}
                                </p>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
