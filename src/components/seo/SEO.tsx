import { buildMeta } from "../../lib/seo";
import { SITE_CONFIG } from "../../data/siteConfig";

type Props = {
  title?: string;
  description?: string;
  pathname?: string;
};

export function SEO({ title, description, pathname = "/" }: Props) {
  const meta = buildMeta({ title, description, pathname });

  return (
    <>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <link rel="canonical" href={meta.url} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={meta.url} />
      <meta property="og:image" content={meta.image} />
      <meta property="og:locale" content={meta.locale} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:url" content={meta.url} />
      <meta name="twitter:image" content={meta.image} />
      <meta name="author" content={SITE_CONFIG.author} />
    </>
  );
}
