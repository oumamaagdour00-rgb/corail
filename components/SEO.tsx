import React, { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface SEOProps {
    pageKey?: string;
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
    type?: string;
    article?: boolean;
}

const SEO: React.FC<SEOProps> = ({
    pageKey = 'home',
    title,
    description,
    keywords,
    image,
    type = 'website',
    article = false
}) => {
    const { t, language } = useLanguage();

    // Fallback to pageKey from translations, or home if not found
    const seoData = t.seo[pageKey] || t.seo.home;

    const siteUrl = "https://corail-88p.pages.dev/";

    const fullTitle = title || seoData.title || "Corail L'Océan";
    const metaDescription = description || seoData.description || "Corail L'Océan - Performance-Driven Distribution";
    const metaKeywords = keywords || (language === 'fr'
        ? "Corail L'Océan, distribution, FMCG, Maroc, Casablanca, logistique, go-to-market"
        : "Corail L'Océan, distribution, FMCG, Morocco, Casablanca, logistics, go-to-market");
    const ogImage = image || siteUrl + "og-image.jpeg";
    const currentUrl = siteUrl + (pageKey === 'home' ? '' : `#/${pageKey}`);

    // React 19 hoists title, meta, and link tags automatically.
    // We handle the html lang attribute via a small side effect.
    useEffect(() => {
        document.documentElement.lang = language;
    }, [language]);

    // Basic organization structured data
    const orgSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Corail L'Océan",
        "url": siteUrl,
        "logo": siteUrl + "favicon-not-ocean.png",
        "description": "FMCG distribution platform specializing in the development of brand portfolios in Morocco.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Casablanca",
            "addressCountry": "MA"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "availableLanguage": ["en", "fr"]
        }
    };

    return (
        <>
            {/* Standard Metadata */}
            <title>{fullTitle}</title>
            <meta name="description" content={metaDescription} />
            <meta name="keywords" content={metaKeywords} />
            <meta name="author" content="Corail L'Océan" />
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
            <meta name="theme-color" content="#ffffff" />

            {/* Canonical URL */}
            <link rel="canonical" href={currentUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:site_name" content="Corail L'Océan" />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:image" itemProp="image" content={ogImage} />
            <meta property="og:image:secure_url" content={ogImage} />
            <meta property="og:image:type" content="image/jpeg" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:type" content={article ? 'article' : type} />
            <meta property="og:url" content={currentUrl} />
            <meta property="og:locale" content={language === 'fr' ? 'fr_FR' : 'en_US'} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={metaDescription} />
            <meta name="twitter:image" content={ogImage} />

            {/* Robots */}
            <meta name="robots" content="index, follow" />
            <meta name="googlebot" content="index, follow" />

            {/* Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
            />
        </>
    );
};

export default SEO;
