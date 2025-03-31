import { notFound } from 'next/navigation';
import { getAllProjectsIds, getProjectData } from '../../../lib/projects';
import siteMetadata from '../../../data/site-metadata';
import Link from 'next/link';
import { formatDate } from 'pliny/utils/formatDate.js';
import Carousel from '../../../components/UI/Carousel';
import { Github } from '../../../components/social-icons/icons';

export async function generateStaticParams() {
    const paths = getAllProjectsIds();
    return paths.map((path) => ({ id: path.params.id }));
}

export async function generateMetadata({ params }) {
    const { id } = await params;
    const projectData = await getProjectData(id);

    if (!projectData) return { notFound: true };

    return {
        title: `${projectData.title} | ${siteMetadata.title}`,
        description: projectData.description,
        openGraph: {
            title: projectData.title,
            description: projectData.description,
            type: "article",
            site_name: siteMetadata.title,
            url: projectData.href || siteMetadata.siteUrl,
            images: [{ url: projectData.imgSrc }],
        },
        twitter: {
            card: 'summary_large_image',
            title: projectData.title,
            description: projectData.description,
            creator: siteMetadata.twitter,
            images: [projectData.imgSrc],
        },
    };
}

export default async function Project({ params }) {
    const { id } = params;
    const projectData = await getProjectData(id);

    if (!projectData) return notFound();

    return (
        <article className="w-full py-2 md:p-4">
            {/* Structured Data for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "CreativeWork",
                        "name": projectData.title,
                        "description": projectData.description,
                        "url": projectData.href || siteMetadata.siteUrl,
                        "image": projectData.imgSrc,
                        "datePublished": projectData.createdAt,
                        "keywords": projectData.tags.join(", "),
                    }),
                }}
            />
            
            <header className="mb-6">
                <h1 className="text-3xl font-bold leading-tight tracking-tight hover:text-gray-700 dark:hover:text-gray-500">
                    {projectData.title}
                </h1>
                <time className="text-base text-gray-500 dark:text-gray-400" dateTime={projectData.createdAt}>
                    {formatDate(projectData.createdAt, siteMetadata.locale)}
                </time>
            </header>

            <section className="mb-4">
                <h2 className="text-lg font-semibold">Project Details</h2>
                <p className="prose text-gray-500 dark:text-gray-400">{projectData.description}</p>
            </section>

            {/* Keywords */}
            <section className="mb-4">
                <h2 className="text-lg font-semibold">Technologies Used</h2>
                <div className="flex flex-wrap gap-2">
                    {projectData.tags.map((tag) => (
                        <span key={tag} className="px-2 py-1 text-xs font-medium bg-gray-200 dark:bg-gray-700 rounded">
                            {tag}
                        </span>
                    ))}
                </div>
            </section>

            {/* Carousel */}
            <section className="mb-4">
                <Carousel images={projectData.images} />
            </section>

            {/* Visit Link */}
            {projectData.href && (
                <section className="mb-4">
                    <h2 className="text-lg font-semibold">Live Preview</h2>
                    <Link
                        href={projectData.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 text-base font-medium"
                    >
                        {projectData.href}
                    </Link>
                </section>
            )}

            {/* Source Code */}
            {projectData.repositoryLinks.length > 0 && (
                <section className="mb-4">
                    <h2 className="text-lg font-semibold">Source Code</h2>
                    {projectData.repositoryLinks.map((link, index) => (
                        <Link
                            key={index}
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 text-base font-medium"
                        >
                            Source Code {projectData.repositoryLinks.length > 1 ? `#${index + 1}` : ""} 
                            <Github className="w-6 h-6" />
                        </Link>
                    ))}
                </section>
            )}
        </article>
    );
}
