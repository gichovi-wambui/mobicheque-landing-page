/**
 * Update SITE_URL to the production domain (it must match `metadataBase`
 * in app/layout.js). New pages need adding here.
 */
const SITE_URL = "https://mobicheque.co.ke";

const ROUTES = [
  { path: "", priority: 1.0, changeFrequency: "monthly" },
  { path: "/product", priority: 0.9, changeFrequency: "monthly" },
  { path: "/security", priority: 0.9, changeFrequency: "monthly" },
  { path: "/integration", priority: 0.8, changeFrequency: "monthly" },
  { path: "/for-banks", priority: 0.8, changeFrequency: "monthly" },
  { path: "/for-saccos", priority: 0.8, changeFrequency: "monthly" },
  { path: "/about", priority: 0.6, changeFrequency: "yearly" },
];

export default function sitemap() {
  const lastModified = new Date();

  return ROUTES.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
