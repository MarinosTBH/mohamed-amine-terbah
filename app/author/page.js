import siteMetadata from "../../data/site-metadata"

export const metadata = {
    metadataBase: new URL(siteMetadata.siteUrl),
    title: {
        default: "About " + siteMetadata.title,
        template: `%s | ${siteMetadata.title}`,
    },
    description: siteMetadata.description,
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

export default function Author() {
    return (
        <section className="mx-auto text-center">
            <h1 className="text-2xl">About me</h1>
            <p className="lg:w-1/2 mx-auto text-justify">
                Hey there! I’m Hamma, a passionate "BI & software developer," "writer," and "AI Certified"
                
                who loves exploring new ideas and sharing insights through my blog.
                
                With a keen eye for technology, storytelling, and innovation",
                
                I dive into topics that inspire curiosity and creativity.
                
                Whether it's breaking down complex concepts,
                
                sharing personal experiences, or just reflecting on the journey of continuous learning,
                
                my goal is to create meaningful conversations.
                
                When I’m not writing, you’ll find me
                "writing code, at the gym, or doing some meditation at a camping".
                
                Thanks for stopping by—I hope you find something here that sparks your interest!
            </p>
        </section>

    )
};