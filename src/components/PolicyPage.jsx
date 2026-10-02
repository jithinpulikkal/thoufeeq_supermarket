import { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { siteData, content } from "../../data/siteData.js";
import { Header } from "./Header.jsx";
import { Footer } from "./Footer.jsx";
import { Eyebrow } from "./common.jsx";

const contact = { ...siteData, directionsLabel: content.labels.directions };

export function PolicyPage({ type }) {
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

export function PolicySection({ title, children }) {
    return (
        <section className="mb-7 text-sm leading-[1.8] text-[#5f7065]">
            <h2 className="mb-2 font-display text-xl font-bold text-[#143e2a]">{title}</h2>
            {children}
        </section>
    );
}
