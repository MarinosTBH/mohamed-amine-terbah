module.exports = {
    siteUrl: 'https://m-a-t.me/',
    generateRobotsTxt: true,
    changefreq: 'weekly',
    priority: 0.8,
    exclude: ['/admin'],
    sitemapSize: 5000,
    outDir: 'out',
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
            },
        ],
        additionalSitemaps: [
            'https://m-a-t.me/sitemap-blog.xml',
        ],
    },
    /* other options */
};
