type Props = {
  jsonLd: Record<string, unknown> | Record<string, unknown>[];
};

export function StructuredData({ jsonLd }: Props) {
  return <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>;
}
