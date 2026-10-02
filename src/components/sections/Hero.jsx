import { ArrowRight, ArrowUpRight, ShoppingBasket } from "lucide-react";
import { siteData, content } from "../../../data/siteData.js";
import { Eyebrow, imageFallback } from "../common.jsx";

export function Hero() {
    return (
        <section
            id="home"
            className="hero-decoration relative min-h-[590px] overflow-hidden bg-[#f7f9f1] py-16 max-[640px]:min-h-0 max-[640px]:py-[38px]"
        >
            <div className="container relative z-[2] grid grid-cols-[1fr_1.02fr] items-center gap-[clamp(28px,6vw,82px)] max-[900px]:grid-cols-2 max-[900px]:gap-5 max-[640px]:flex max-[640px]:flex-col max-[640px]:items-stretch max-[640px]:gap-[22px]">
                <div className="py-5 max-[640px]:py-2">
                    <Eyebrow>{content.hero.eyebrow}</Eyebrow>
                    <h1 className="mt-[22px] max-w-[620px] text-[clamp(44px,5.1vw,68px)] font-extrabold leading-[1.07] text-[#103c2a] max-[640px]:mt-[17px] max-[640px]:mb-[13px] max-[640px]:text-[clamp(40px,11vw,55px)]">
                        {content.hero.title}
                    </h1>
                    <p className="mb-7 max-w-[465px] text-[15px] leading-[1.8] text-[#69796d] max-[640px]:mb-5 max-[640px]:text-[13px]">
                        {content.hero.body}
                    </p>
                    <div className="flex flex-wrap gap-[11px]">
                        <a
                            className="inline-flex min-h-[47px] items-center justify-center gap-3 rounded-md bg-leaf px-5 text-xs font-bold text-white shadow-[0_9px_20px_rgba(7,143,69,.17)] transition hover:-translate-y-0.5 hover:bg-[#067b3c] max-[640px]:min-h-11 max-[640px]:px-[15px] max-[640px]:text-[11px]"
                            href="#categories"
                        >
                            {content.hero.primaryCta}
                            <ArrowRight size={17} />
                        </a>
                        <a
                            className="inline-flex min-h-[47px] items-center justify-center gap-3 rounded-md border border-[#d4dfd2] bg-white px-5 text-xs font-bold text-[#255239] transition hover:-translate-y-0.5 hover:shadow-soft max-[640px]:min-h-11 max-[640px]:px-[15px] max-[640px]:text-[11px]"
                            href="#contact"
                        >
                            {content.hero.secondaryCta}
                            <ArrowUpRight size={16} />
                        </a>
                    </div>
                    <div className="mt-[38px] flex items-center gap-[11px] text-[11px] font-semibold tracking-[.015em] text-[#77857a] max-[640px]:mt-5">
                        <span className="grid h-[33px] w-[33px] place-items-center rounded-full bg-[#e8f1d6] text-[#388c4d]">
                            <ShoppingBasket size={18} />
                        </span>
                        {content.hero.note}
                    </div>
                </div>
                <div className="relative min-h-[420px] max-[900px]:min-h-[360px] max-[640px]:mx-[6px] max-[640px]:min-h-[305px]">
                    <div className="absolute inset-[15px_35px_25px_0] overflow-hidden rounded-t-[48%] rounded-b-lg bg-[#e0e9cb] shadow-[0_24px_60px_rgba(30,67,35,.16)] max-[900px]:inset-[20px_12px_25px_0] max-[640px]:inset-[4px_27px_17px_0] max-[640px]:rounded-t-[47%]">
                        <img
                            src={siteData.heroImage}
                            alt={content.hero.imageAlt}
                            fetchPriority="high"
                            onError={imageFallback}
                            className="absolute z-[2] h-full w-full object-contain p-5 max-[640px]:p-2"
                        />
                        <div className="hero-image-placeholder absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[radial-gradient(ellipse_at_65%_38%,rgba(255,255,255,.8),transparent_27%),linear-gradient(145deg,#e7efcf,#d4e4b1_54%,#b9d79b)] font-display text-sm font-bold text-[#538250]">
                            {/* <ShoppingBasket size={48} />
                            <span>{content.hero.imageCaption}</span> */}
                        </div>
                    </div>
                    <div className="absolute bottom-7 right-0 z-[3] flex h-[153px] w-[153px] rotate-[8deg] flex-col items-center justify-center rounded-full border-[7px] border-[#f7f9f1] bg-sun text-center text-[#16402c] shadow-lg max-[900px]:right-[-4px] max-[900px]:h-[125px] max-[900px]:w-[125px] max-[640px]:bottom-[13px] max-[640px]:h-[110px] max-[640px]:w-[110px] max-[640px]:border-[5px]">
                        <span className="text-[25px] leading-none max-[640px]:text-xl">{content.hero.badgeSymbol}</span>
                        <strong className="my-[5px] font-display text-base font-extrabold leading-[1.15] max-[900px]:text-[13px] max-[640px]:text-xs">
                            Goodness
                            <br />
                            for every day
                        </strong>
                        <span className="text-[6px] font-extrabold tracking-[.1em] max-[640px]:text-[5px]">
                            THOUFEEQ · VAILATHUR
                        </span>
                    </div>
                    <div className="hero-orbit orbit-one max-[900px]:h-[335px] max-[900px]:w-[335px] max-[640px]:right-3 max-[640px]:top-[-1px] max-[640px]:h-[292px] max-[640px]:w-[292px]" />
                    <div className="hero-orbit orbit-two max-[900px]:h-[380px] max-[900px]:w-[380px] max-[640px]:right-0 max-[640px]:top-[-17px] max-[640px]:h-[325px] max-[640px]:w-[325px]" />
                </div>
            </div>
        </section>
    );
}
