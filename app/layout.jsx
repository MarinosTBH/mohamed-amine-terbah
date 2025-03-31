import { Analytics } from '@vercel/analytics/next';
import Script from "next/script";
import '../styles/globals.css'
import { Space_Grotesk } from 'next/font/google'
import siteMetadata from '../data/site-metadata';
import { Providers } from '../components/providers';

export const metadata = {
    metadataBase: new URL(siteMetadata.siteUrl),
    title: {
        default: siteMetadata.title,
        template: `%s | ${siteMetadata.title}`,
    },
    description: siteMetadata.description,
    verification: {
        google: "1dg259DByCnSAaxE4AaIHGNurXMEo58ilhtaaCqhg5I",
    },
    openGraph: {
        title: siteMetadata.title,
        description: siteMetadata.description,
        url: './',
        siteName: siteMetadata.title,
        images: [siteMetadata.socialBanner],
        locale: 'en_US',
        type: 'website',
    },
    alternates: {
        canonical: './',
        types: {
            'application/rss+xml': `${siteMetadata.siteUrl}/feed.xml`,
        },
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    twitter: {
        title: siteMetadata.title,
        card: 'summary_large_image',
        images: [siteMetadata.socialBanner],
    },
}

const space_grotesk = Space_Grotesk({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-space-grotesk',
})

export default function RootLayout({ children }) {
    return (
        <html
            lang={siteMetadata.language}
            className={`${space_grotesk.variable} scroll-smooth light`}
            suppressHydrationWarning
        >
            {/* ✅ Iubenda Cookie Consent */}
            <Script id="iubenda-init" strategy="afterInteractive">
                {`
                var _iub = _iub || [];
                _iub.csConfiguration = {"siteId":3981063,"cookiePolicyId":37912135,"lang":"en","storage":{"useSiteId":true}};

                `}
            </Script>
            <Script type="text/javascript" src="https://cs.iubenda.com/autoblocking/3981063.js" strategy="afterInteractive" />
            <Script type="text/javascript" src="//cdn.iubenda.com/cs/gpp/stub.js" strategy="afterInteractive" />
            <Script type="text/javascript" src="//cdn.iubenda.com/cs/iubenda_cs.js" charSet="UTF-8" async strategy="afterInteractive" />

            {/* Google Tag Manager */}
            <Script id="gtm-script" strategy="lazyOnload">
                {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-K28CPX85');`}
            </Script>
            <body className="bg-white dark:bg-gray-950 text-black dark:text-white pl-[calc(100vw-100%)] antialiased transition-all">
                {/* ✅ Google Tag Manager */}
                <noscript>
                    <iframe
                        src="https://www.googletagmanager.com/ns.html?id=GTM-K28CPX85"
                        height="0"
                        width="0"
                        style={{ display: "none", visibility: "hidden" }}
                    ></iframe>
                </noscript>
                <Analytics />
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    );
}