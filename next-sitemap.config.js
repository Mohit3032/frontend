module.exports = {
    siteUrl: 'https://divyachemicalindustry.com', // ✅ Your actual domain
    generateRobotsTxt: true,                       // ✅ Generates robots.txt
    sitemapSize: 5000,
    changefreq: 'weekly',
    priority: 0.7,
    exclude: ['/admin', '/dashboard'],             // ❌ Optional: exclude private pages
    outDir: './public',                            // ✅ IMPORTANT: puts sitemap in /public
  };
  