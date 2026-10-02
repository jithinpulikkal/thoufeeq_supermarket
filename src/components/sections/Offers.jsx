import { ArrowRight } from "lucide-react";
import { content } from "../../../data/siteData.js";
import { offers } from "../../../data/offers.js";
import { Eyebrow, SectionHeading } from "../common.jsx";

export function Offers() {
    if (!offers.length)
        return (
            <section className="value-decoration relative overflow-hidden bg-[#073e29] py-[53px] text-white max-[640px]:py-9">
                <div className="container relative z-[1] flex items-center gap-[35px] max-[640px]:grid max-[640px]:grid-cols-[1fr_auto] max-[640px]:gap-[18px]">
                    <div className="flex-1 max-[640px]:col-span-2">
                        <Eyebrow light>{content.sections.offersEyebrow}</Eyebrow>
                        <h2 className="mb-2 mt-[10px] font-display text-[clamp(25px,3vw,36px)] font-extrabold leading-[1.15] tracking-[-.035em] text-white max-[640px]:text-[28px]">
                            {content.sections.offersTitle}
                        </h2>
                        <p className="mb-0 text-xs text-[#c5d3c9] max-[640px]:text-[11px] max-[640px]:leading-relaxed">
                            {content.sections.offersBody}
                        </p>
                    </div>
                    <div className="flex h-[116px] w-[116px] shrink-0 rotate-[-8deg] flex-col items-center justify-center rounded-full border border-lime text-center text-sun max-[640px]:h-[90px] max-[640px]:w-[90px]">
                        <span className="text-[21px]">{content.hero.badgeSymbol}</span>
                        <strong className="font-display text-sm font-extrabold leading-[1.15] max-[640px]:text-[11px]">
                            {content.sections.offersBadgeTitle}
                            <br />
                            {content.sections.offersBadgeSubtitle}
                        </strong>
                        <small className="text-[8px] tracking-[.08em] max-[640px]:text-[7px]">
                            {content.sections.offersBadgeCaption}
                        </small>
                    </div>
                    <a
                        href="#contact"
                        className="inline-flex min-h-[47px] items-center justify-center gap-3 whitespace-nowrap rounded-md bg-sun px-5 text-xs font-bold text-[#183f29] transition hover:-translate-y-0.5 hover:bg-[#ffea53] max-[640px]:px-[13px] max-[640px]:text-[10px]"
                    >
                        {content.sections.offersCta}
                        <ArrowRight size={17} />
                    </a>
                </div>
            </section>
        );
    return (
        <section id="offers" className="py-[94px] max-[640px]:py-[65px]">
            <div className="container">
                <SectionHeading
                    eyebrow={content.sections.offersEyebrow}
                    title={content.sections.offersTitle}
                    body={content.sections.offersBody}
                />
                <div className="grid grid-cols-[repeat(auto-fit,minmax(190px,1fr))] gap-[18px]">
                    {offers.map((offer) => (
                        <article
                            className="grid grid-cols-[.9fr_1.1fr] items-center gap-[17px] overflow-hidden rounded-lg border border-[#edf0e8] p-3 max-[640px]:grid-cols-1"
                            key={offer.title}
                        >
                            <img
                                src={offer.image}
                                alt={offer.imageAlt || offer.title}
                                loading="lazy"
                                className="aspect-square w-full rounded-md bg-[#eef3e2] object-cover max-[640px]:aspect-[1.7]"
                            />
                            <div>
                                <span className="rounded-sm bg-[#eff5e2] px-2 py-[5px] text-[9px] font-bold text-[#39814b]">
                                    {offer.badge}
                                </span>
                                <h3 className="my-2 font-display font-bold">{offer.title}</h3>
                                <p className="text-xs text-[#77857a]">{offer.description}</p>
                                {offer.buttonText && (
                                    <a
                                        className="inline-flex items-center gap-[7px] text-[11px] font-bold text-[#128049]"
                                        href={offer.href || "#contact"}
                                    >
                                        {offer.buttonText}
                                        <ArrowRight size={15} />
                                    </a>
                                )}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
