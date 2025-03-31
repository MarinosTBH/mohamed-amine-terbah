// import { getPaginatedPosts } from '../lib/posts';
// import siteMetadata from '../data/site-metadata';
// import Post from '../components/UI/Post';
// import PostPagination from '../components/UI/PostPagination';
import Card from "../../components/UI/Card";
import projectsData from "../../data/projects-data";

const PROJECTS_PER_PAGE = 5;

export default async function Projects({ searchParams }) {
  // const page = parseInt(searchParams?.page ?? "1", 10); // Ensure fallback to "1"  
  const page = 1;

//   const { posts, totalPages } = await getPaginatedPosts(page, PROJECTS_PER_PAGE);
  return (
    <section className="divide-y divide-gray-200 dark:divide-gray-700">
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            Projects
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Showcase your projects with a hero image (16 x 9)
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {projectsData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>
        </div>
      </div>
    </>
          {/* <PostPagination page={page} totalPages={totalPages} /> */}
    </section>
  )
}