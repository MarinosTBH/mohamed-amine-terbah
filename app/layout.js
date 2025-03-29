import { Analytics } from '@vercel/analytics/next';
import Script from "next/script";
import Layout from '../components/layout';

export default function RootLayout({
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
    children,
}) {
    return (
        <html lang="en">
            {/* Iubenda Cookie Consent */}
            <Script id="iubenda-init" strategy="afterInteractive">
                {`
        var _iub = _iub || [];
        _iub.csConfiguration = {"siteId":3981063,"cookiePolicyId":37912135,"lang":"en","storage":{"useSiteId":true}};

        `}
            </Script>
            <Script type="text/javascript" src="https://cs.iubenda.com/autoblocking/3981063.js"></Script>
            <Script type="text/javascript" src="//cdn.iubenda.com/cs/gpp/stub.js"></Script>
            <Script type="text/javascript" src="//cdn.iubenda.com/cs/iubenda_cs.js" charSet="UTF-8" async></Script>

            {/* ✅ Google Tag Manager */}
            <Script id="gtm-script" strategy="afterInteractive">
                {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-K28CPX85');`}
            </Script>
            {/* Vercel Analytics */}

            <Analytics />
            <body>
                <Layout>

                    {/* Google Tag Manager (noscript) */}
                    <noscript>
                        <iframe
                            src="https://www.googletagmanager.com/ns.html?id=GTM-K28CPX85"
                            height="0"
                            width="0"
                            style={{ display: "none", visibility: "hidden" }}
                        ></iframe>
                    </noscript>
                    {/* End Google Tag Manager (noscript) */}
                    {children}
                </Layout>

            </body>

        </html>
    )
}