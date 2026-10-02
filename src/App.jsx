import { useEffect } from "react";
import { siteData } from "../data/siteData.js";
import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
import { PolicyPage } from "./components/PolicyPage.jsx";
import { Hero } from "./components/sections/Hero.jsx";
import { Categories } from "./components/sections/Categories.jsx";
import { Offers } from "./components/sections/Offers.jsx";
import { PromiseSection } from "./components/sections/PromiseSection.jsx";
import { Products } from "./components/sections/Products.jsx";
import { About } from "./components/sections/About.jsx";
import { Contact } from "./components/sections/Contact.jsx";

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
