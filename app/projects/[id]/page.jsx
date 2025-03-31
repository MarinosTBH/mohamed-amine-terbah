import { notFound } from 'next/navigation';
import { getAllProjectsIds, getProjectData } from '../../../lib/projects';
import siteMetadata from '../../../data/site-metadata';
import Link from 'next/link';
import Image from 'next/image';
import { formatDate } from 'pliny/utils/formatDate.js';
import Carousel from '../../../components/UI/Carousel';
import SocialIcon from '../../../components/social-icons';
import { Github } from '../../../components/social-icons/icons';

export async function generateStaticParams() {
    const paths = getAllProjectsIds();

    return paths.map((path) => ({
        id: path.params.id, // ✅ Correct way to structure params
    }));
}

export async function generateMetadata({ params }) {
    const { id } = await params;
    const projectData = await getProjectData(id);

    if (!projectData) return { notFound: true }; // Handle invalid paths

    return {
        title: projectData.title,
        description: projectData.description,
        openGraph: {
            title: projectData.title,
            description: projectData.description,
            image: projectData.imgSrc,
            url: projectData.href,
        },
        twitter: {
            card: 'summary_large_image',
            title: projectData.title,
            description: projectData.description,
            image: projectData.imgSrc,
        },
    };
}

export default async function Project({ params }) {
    const { id } = await params;
    const projectData = await getProjectData(id);

    if (!projectData) return notFound(); // Handle invalid paths

    return (
        <section className="w-full py-2 md:p-4">
            <div
                className={`${projectData.imgSrc && 'h-full'} overflow-hidden rounded-md flex flex-col justify-between`}
            >
                <div className="p-2 flex flex-col flex-grow">
                    <div className="flex justify-between w-full mt-auto">
                        <h2 className="text-2xl leading-8 font-bold tracking-tight hover:text-gray-700 dark:hover:text-gray-500">
                            {projectData.title}
                        </h2>

                        <time className="text-base text-gray-500 dark:text-gray-400" dateTime={projectData.createdAt}>
                            {formatDate(projectData.createdAt, siteMetadata.locale)}
                        </time>
                    </div>
                    {projectData.href && <Link
                        href={projectData.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Link to ${projectData.title}`}
                        className='inline-flex'
                    >
                        <p>Visit : </p>
                        <span className="mt-auto text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 text-base font-medium">
                            {projectData.href}
                        </span>
                    </Link>}
                    <p className="my-3 prose max-w-none text-gray-500 dark:text-gray-400">{projectData.description}</p>
                    <Carousel images={projectData.images} />
                    {/* Pushes content to bottom */}
                    {projectData.repositoryLinks.map((link, index) =>
                        <Link
                            key={index}
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="py-2 inline-flex mt-auto text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 text-base font-medium"
                        >
                            Source Code {projectData.repositoryLinks.length > 1 ? `${index + 1}` : index + 1} &rarr;  <Github className="w-6 h-6 ml-2" />

                        </Link>
                    )}
                </div>
            </div>
        </section>
    )
}