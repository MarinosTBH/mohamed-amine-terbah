import Card from "../../components/UI/Card";
import { getSortedProjectsData } from "../../lib/projects";

export default async function Projects({ searchParams }) {
  const projects = getSortedProjectsData()
  return (
    <section className="divide-y divide-gray-200 dark:divide-gray-700">
      <>
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          <div className="space-y-2 pt-6 pb-8 md:space-y-5">
            <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
              Projects
            </h1>
            <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
              If you want to use one of these projects and found any problems do not hesitate to contact me.
            </p>
          </div>
          <div className="container py-12">
            <div className="-m-4 flex flex-wrap">
              {projects.map((d) => (
                <Card
                  key={d.id}
                  id={d.id}
                  title={d.title}
                  description={d.description}
                  imgSrc={d.imgSrc}
                  createdAt={d.createdAt}
                />
              ))}
            </div>
          </div>
        </div>
      </>
    </section>
  )
}