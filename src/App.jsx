import { useEffect, useState } from "react";
import {
    ArrowDown,
    ArrowRight,
    ArrowUpRight,
    Menu,
    X,
    MapPin,
    Phone,
    ShoppingBasket,
    Leaf,
    Tag,
    ShieldCheck,
    HeartHandshake,
    CarFront,
} from "lucide-react";
import { siteData, content } from "../data/siteData.js";
import { offers } from "../data/offers.js";
import { products } from "../data/products.js";
const navigation = content.navigation;
const categories = content.categories;
const promises = content.promises;
const contact = { ...siteData, directionsLabel: content.labels.directions };

const icons = { Tag, ShieldCheck, Leaf, HeartHandshake, CarFront };
const imageFallback = (event) => {
    event.currentTarget.style.display = "none";
};

function Logo({ light = false }) {
    return (
        <a
            href="#home"
            className="flex min-w-[220px] items-center gap-[10px] max-[640px]:min-w-0"
            aria-label={`${siteData.brandName} home`}
        >
            <img
                src={siteData.logo}
                alt={`${siteData.brandName} logo`}
                className="h-12 w-12 object-contain max-[640px]:h-[41px] max-[640px]:w-[41px]"
                onError={imageFallback}
            />
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

function Header() {
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
                    className={`mobile-nav relative flex items-center gap-[clamp(18px,2.6vw,36px)] ${open ? "nav-open" : ""}`}
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
                    <a className="mobile-phone text-[13px] font-semibold" href={`tel:${contact.phone}`}>
                        {contact.phoneDisplay}
                    </a>
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
                    onClick={() => setOpen(!open)}
                >
                    {open ? <X /> : <Menu />}
                </button>
            </div>
        </header>
    );
}

function Eyebrow({ children, light = false, centered = false }) {
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

function Hero() {
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
                            <ShoppingBasket size={48} />
                            <span>{content.hero.imageCaption}</span>
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
            <a
                className="absolute bottom-[19px] left-1/2 grid h-[31px] w-[31px] -translate-x-1/2 place-items-center rounded-full border border-[#d9e4d4] text-[#508450] max-[640px]:hidden"
                href="#categories"
                aria-label={content.labels.scrollToCategories}
            >
                <ArrowDown size={16} />
            </a>
        </section>
    );
}

function SectionHeading({ eyebrow, title, body }) {
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

function Categories() {
    const tones = {
        green: "bg-[#edf3dd] text-[#4f8950]",
        orange: "bg-[#fff0df] text-[#d58435]",
        blue: "bg-[#e5f0f8] text-[#5187ac]",
        purple: "bg-[#f1eafa] text-[#9275ae]",
        red: "bg-[#fce9e2] text-[#c65e4a]",
    };
    return (
        <section id="categories" className="py-[94px] max-[640px]:py-[65px]">
            <div className="container">
                <SectionHeading
                    eyebrow={content.sections.categoriesEyebrow}
                    title={content.sections.categoriesTitle}
                    body={content.sections.categoriesBody}
                />
                <div className="grid grid-cols-5 gap-[15px] max-[900px]:grid-cols-3 max-[640px]:grid-cols-2 max-[640px]:gap-[11px]">
                    {categories.map((category, index) => (
                        <a
                            href="#contact"
                            key={category.title}
                            style={{ "--card-index": index }}
                            className={`animate-fade-up rounded-[9px] border border-[#edf0e8] bg-white p-[11px] transition duration-300 hover:-translate-y-[5px] hover:shadow-[0_15px_34px_rgba(6,61,40,.09)] max-[640px]:p-2 ${index === categories.length - 1 ? "mobile-card-last" : ""}`}
                        >
                            <div
                                className={`relative grid aspect-[1.17] place-items-center overflow-hidden rounded-md ${tones[category.tone] || tones.green} max-[640px]:aspect-[1.15]`}
                            >
                                <img
                                    src={category.image}
                                    alt={category.alt}
                                    loading="lazy"
                                    onError={imageFallback}
                                    className="relative z-[1] h-full w-full object-cover"
                                />
                            </div>
                            <div className="flex items-center justify-between gap-2 px-1 pb-[5px] pt-[14px] max-[640px]:px-[2px] max-[640px]:pb-[3px] max-[640px]:pt-[10px]">
                                <div>
                                    <h3 className="mb-[5px] font-display text-sm font-bold text-[#1b432e] max-[640px]:text-xs">
                                        {category.title}
                                    </h3>
                                    <p className="mb-0 text-[10px] text-[#859087] max-[640px]:text-[9px]">
                                        {category.subtitle}
                                    </p>
                                </div>
                                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#f1f6e8] text-[#4b8d49] max-[640px]:h-[25px] max-[640px]:w-[25px]">
                                    <ArrowUpRight size={16} />
                                </span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}

function Offers() {
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

function PromiseSection() {
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

function Products() {
    if (!products.length) return null;
    return (
        <section id="products" className="py-[94px] max-[640px]:py-[65px]">
            <div className="container">
                <SectionHeading eyebrow="Shop the range" title="Popular picks" />
                <div className="grid grid-cols-[repeat(auto-fit,minmax(190px,1fr))] gap-[18px]">
                    {products.map((product) => (
                        <article
                            className="overflow-hidden rounded-lg border border-[#edf0e8] pb-[18px]"
                            key={product.name}
                        >
                            <img
                                src={product.image}
                                alt={product.alt || product.name}
                                loading="lazy"
                                className="aspect-[1.35] w-full bg-[#eef3e2] object-cover"
                            />
                            <h3 className="mx-[17px] mb-[5px] mt-[14px] text-sm font-bold">{product.name}</h3>
                            <p className="mx-[17px] text-[11px] text-[#829087]">{product.category}</p>
                            {product.price && <strong className="mx-[17px]">{product.price}</strong>}
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

function About() {
    return (
        <section id="about" className="py-[102px] max-[640px]:py-[68px]">
            <div className="container grid grid-cols-2 items-center gap-[clamp(45px,8vw,105px)] max-[640px]:grid-cols-1 max-[640px]:gap-[34px]">
                <div className="relative max-w-[480px] pb-[26px] pr-[25px]">
                    <div className="relative aspect-[1.08] overflow-hidden rounded-lg bg-[#e7efd7]">
                        <div className="about-photo-placeholder absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[linear-gradient(145deg,#e7efd7,#cadfae)] font-display text-sm font-bold text-[#538250]">
                            <img
                                src="/data/images/family_shopping.png"
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

function Contact() {
    return (
        <section id="contact" className="pb-[88px] max-[640px]:pb-[60px]">
            <div className="container">
                <div className="contact-decoration relative grid grid-cols-[.9fr_1.1fr] gap-[55px] overflow-hidden rounded-[10px] bg-[#0b482e] px-[clamp(28px,5vw,65px)] py-12 text-white max-[900px]:gap-[30px] max-[640px]:grid-cols-1 max-[640px]:gap-[26px] max-[640px]:px-[22px] max-[640px]:py-[31px]">
                    <div className="relative z-[1]">
                        <Eyebrow light>{content.sections.visitEyebrow}</Eyebrow>
                        <h2 className="mb-3 mt-[14px] text-[clamp(31px,3.5vw,43px)] font-extrabold leading-[1.13] text-white max-[640px]:text-[32px]">
                            {content.sections.visitTitle}
                        </h2>
                        <p className="mb-0 max-w-[330px] text-xs leading-[1.8] text-[#c5d4c9]">
                            {content.sections.visitBody}
                        </p>
                    </div>
                    <div className="relative z-[1] grid grid-cols-2 content-center gap-[23px] max-[640px]:gap-[19px_11px]">
                        {[
                            [MapPin, content.labels.findUs, contact.address, contact.branch],
                            [Phone, content.labels.callUs, contact.phoneDisplay, content.labels.tapToCall],
                        ].map(([Icon, label, value, detail]) => (
                            <div key={label} className="flex items-start gap-3 text-white max-[640px]:gap-[9px]">
                                <span className="grid h-[38px] w-[38px] shrink-0 place-items-center rounded-full border border-[#e9d53c]/35 text-[#e8d43c] max-[640px]:h-8 max-[640px]:w-8">
                                    <Icon size={19} />
                                </span>
                                <div className="grid gap-1">
                                    <small className="text-[9px] font-bold uppercase tracking-[.13em] text-[#a8c6ad]">
                                        {label}
                                    </small>
                                    <strong className="text-xs leading-[1.5] max-[640px]:text-[10px]">
                                        {label === content.labels.callUs ? (
                                            <a href={`tel:${contact.phone}`}>{value}</a>
                                        ) : (
                                            value
                                        )}
                                    </strong>
                                    <span className="text-[10px] text-[#b7cbbc] max-[640px]:text-[9px]">{detail}</span>
                                </div>
                            </div>
                        ))}
                        <div className="col-span-full flex items-baseline gap-2 border-t border-white/10 pt-3 text-[10px] text-[#b7cbbc]">
                            <span className="font-bold uppercase tracking-[.12em] text-[#a8c6ad]">
                                {content.labels.gstin}
                            </span>
                            <span className="font-semibold tracking-[.08em] text-white">{contact.gstin}</span>
                        </div>
                        {contact.mapUrl && (
                            <a
                                className="col-span-full ml-[50px] inline-flex min-h-10 items-center justify-center gap-3 justify-self-start rounded-md bg-sun px-5 text-[11px] font-bold text-[#183f29] max-[640px]:ml-[41px]"
                                href={contact.mapUrl}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {contact.directionsLabel}
                                <ArrowUpRight size={16} />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

function Footer() {
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

function PolicyPage({ type }) {
    const { title } = content.policy.pages[type];
    useEffect(() => {
        document.title = `${title} | ${siteData.brandName}`;
        const meta = document.querySelector('meta[name="description"]');
        if (meta) meta.content = `${title} for ${siteData.brandName} Wholesale Supermarket.`;
    }, [title]);
    return (
        <>
            <Header />
            <main className="min-h-[65vh] bg-[#f7f9f1] py-[72px] max-[640px]:py-12">
                <article className="container max-w-[850px] rounded-xl bg-white p-[clamp(24px,5vw,56px)] shadow-soft">
                    <Eyebrow>
                        {siteData.brandName} {siteData.descriptor}
                    </Eyebrow>
                    <h1 className="mb-3 mt-5 text-[clamp(34px,5vw,52px)] font-extrabold leading-tight text-[#103c2a]">
                        {title}
                    </h1>
                    <p className="mb-8 text-sm text-[#758277]">Last updated: {content.policy.lastUpdated}</p>
                    {content.policy.pages[type].sections.map((section) => (
                        <PolicySection key={section.title} title={section.title}>
                            {section.body}
                        </PolicySection>
                    ))}
                    <p className="mb-0 mt-8 border-t border-[#edf0e8] pt-5 text-sm text-[#758277]">
                        {content.labels.contactPrompt}{" "}
                        <a className="font-semibold text-[#078f45]" href={`tel:${contact.phone}`}>
                            {contact.phoneDisplay}
                        </a>{" "}
                        or visit us at {contact.address}, {contact.branch}.
                    </p>
                    <a className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#078f45]" href="/">
                        {content.labels.backHome} <ArrowRight size={16} />
                    </a>
                </article>
            </main>
            <Footer />
        </>
    );
}

function PolicySection({ title, children }) {
    return (
        <section className="mb-7 text-sm leading-[1.8] text-[#5f7065]">
            <h2 className="mb-2 font-display text-xl font-bold text-[#143e2a]">{title}</h2>
            {children}
        </section>
    );
}

export default function App() {
    const path = window.location.pathname.replace(/\/+$/, "").toLowerCase();
    if (path === "/privacy-policy") return <PolicyPage type="privacy" />;
    if (path === "/terms-and-conditions") return <PolicyPage type="terms" />;
    if (path === "/refund-and-returns") return <PolicyPage type="returns" />;
    useEffect(() => {
        document.title = `${siteData.brandName} ${siteData.descriptor} | Everyday Value`;
        const meta = document.querySelector('meta[name="description"]');
        if (meta) meta.content = siteData.seoDescription;
    }, []);
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Categories />
                <Offers />
                <PromiseSection />
                <Products />
                <About />
                <Contact />
            </main>
            <Footer />
        </>
    );
}
