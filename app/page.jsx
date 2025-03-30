import { getPaginatedPosts } from '../lib/posts';
import siteMetadata from '../data/site-metadata';
import Post from '../components/UI/Post';
import PostPagination from '../components/UI/PostPagination';
import NewLook from '../components/UI/NewLook';

const POSTS_PER_PAGE = 5;

export default async function Home({ searchParams }) {
  // const page = parseInt(searchParams?.page ?? "1", 10); // Ensure fallback to "1"  
  const page = 1;

  const { posts, totalPages } = await getPaginatedPosts(page, POSTS_PER_PAGE);
  return (
    <section className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
          Latest
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          {siteMetadata.description}
        </p>
      </div>
      <NewLook />{/* Temporary  */}
      <ul className="divide-y divide-gray-200 dark:divide-gray-700">
        {posts.map(({ id, date, title }) => (
          <Post key={id} id={id} date={date} title={title} />
        ))}
      </ul>
      <hr></hr>
      <PostPagination page={page} totalPages={totalPages} />
    </section>
  )
}