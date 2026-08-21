/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fully prerendered marketing site with no server features, so it ships as
  // static files. On Render that means a CDN-backed static site rather than a
  // free web service, which would spin down and cold-start in ~50s -- not
  // acceptable for a page a prospect clicks into from an email.
  output: "export",

  // Render serves the export directly; there is no Next image optimiser in
  // front of it. The only images are the logo and the generated OG card.
  images: { unoptimized: true },

  // Emit /about/index.html rather than /about.html so paths resolve without
  // relying on host-specific extension rewriting.
  trailingSlash: true,
};

export default nextConfig;
