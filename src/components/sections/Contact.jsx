import { ArrowUpRight, MapPin, Phone } from "lucide-react";
import { siteData, content } from "../../../data/siteData.js";
import { Eyebrow } from "../common.jsx";

const contact = { ...siteData, directionsLabel: content.labels.directions };

export function Contact() {
    return (
        <section id="contact" className="scroll-mt-[82px] pb-[calc(88px+82px)] max-[640px]:scroll-mt-[69px] max-[640px]:pb-[calc(60px+69px)]">
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
