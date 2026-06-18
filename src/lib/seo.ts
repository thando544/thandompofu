import { SITE_CONFIG } from "../data/siteConfig";

export function buildMeta({
  title,
  description,
  pathname = "/",
  image = "/favicon.svg",
}: {
  title?: string;
  description?: string;
  pathname?: string;
  image?: string;
}) {
  const pageTitle = title
    ? `${title} | ${SITE_CONFIG.author}`
    : SITE_CONFIG.defaultTitle;
  const pageDescription = description || SITE_CONFIG.defaultDescription;
  const url = `${SITE_CONFIG.siteUrl}${pathname}`;

  return {
    title: pageTitle,
    description: pageDescription,
    url,
    image,
    siteName: SITE_CONFIG.author,
    locale: SITE_CONFIG.locale,
    language: SITE_CONFIG.language,
  };
}

export function buildStructuredData({
  title,
  description,
  pathname = "/",
  pageType = "WebPage",
}: {
  title: string;
  description: string;
  pathname?: string;
  pageType?: string;
}) {
  const url = `${SITE_CONFIG.siteUrl}${pathname}`;
  return {
    "@context": "https://schema.org",
    "@type": pageType,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    headline: title,
    description,
    url,
    author: {
      "@type": "Person",
      name: SITE_CONFIG.author,
      email: SITE_CONFIG.email,
      jobTitle: "Full Stack Engineer & AI Systems Builder",
      address: {
        "@type": "PostalAddress",
        addressCountry: SITE_CONFIG.location,
      },
    },
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.author,
    },
  };
}
