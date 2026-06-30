/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://collett.land',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: 'monthly',
  priority: 0.7,
  sitemapSize: 7000,
  exclude: ['/server-sitemap.xml', '/twilio-opt-in', '/writings'],
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