import { ArrowUpRight } from "lucide-react";
import { content } from "../../../data/siteData.js";
import { Eyebrow, SectionHeading, imageFallback } from "../common.jsx";

const categories = content.categories;
const assetUrl = (path) => (/^https?:\/\//i.test(path) ? path : `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`);

export function Categories() {
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
                            href="#categories"
                            key={category.title}
                            style={{ "--card-index": index }}
                            className={`animate-fade-up rounded-[9px] border border-[#edf0e8] bg-white p-[11px] transition duration-300 hover:-translate-y-[5px] hover:shadow-[0_15px_34px_rgba(6,61,40,.09)] max-[640px]:p-2 ${index === categories.length - 1 ? "mobile-card-last" : ""}`}
                        >
                            <div
                                className={`relative grid aspect-[1.17] place-items-center overflow-hidden rounded-md ${tones[category.tone] || tones.green} max-[640px]:aspect-[1.15]`}
                            >
                                <img
                                    src={assetUrl(category.image)}
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
