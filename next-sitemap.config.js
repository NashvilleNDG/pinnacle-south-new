/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.pinnaclesouth.net",
  generateRobotsTxt: false,
  sitemapSize: 7000,
  outDir: "out",
  /**
   * Limit sitemap to home + individual project pages only (excludes /projects/, insights, etc.).
   */
  transform: async (config, path) => {
    const isHome = path === "/" || path === "";
    const isProjectDetail = /^\/project\/[^/]+\/?$/.test(path);
    if (!isHome && !isProjectDetail) {
      return null;
    }
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: isHome ? 1 : 0.8,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
};

