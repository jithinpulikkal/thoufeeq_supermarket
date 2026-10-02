import { products } from "../../../data/products.js";
import { SectionHeading } from "../common.jsx";

export function Products() {
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
