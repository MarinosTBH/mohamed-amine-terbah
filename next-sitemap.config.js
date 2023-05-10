module.exports = {
    siteUrl: 'https://mat-dev-blog-nextjs.vercel.app/',
    generateRobotsTxt: true,
    changefreq: 'weekly',
    priority: 0.8,
    exclude: ['/admin'],
    sitemapSize: 5000,
    outDir: './public',
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
            },
        ],
        additionalSitemaps: [
            'https://mat-dev-blog-nextjs.vercel.app/sitemap-blog.xml',
        ],
    },
    /* other options */
};
