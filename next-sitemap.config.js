/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://your-domain.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: 'monthly',
  priority: 0.7,
  sitemapSize: 7000,
  exclude: ['/server-sitemap.xml'],
  robotsTxtOptions: {
    additionalSitemaps: [],
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
}; 