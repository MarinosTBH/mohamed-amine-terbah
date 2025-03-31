import { getPaginatedPosts, getSortedPostsData } from '../../../lib/posts';
import siteMetadata from '../../../data/site-metadata';
import Post from '../../../components/UI/Post';
import PostPagination from '../../../components/UI/PostPagination';

const POSTS_PER_PAGE = 5;

export async function generateStaticParams() {
    const totalPosts = getSortedPostsData();  // Fetch the sorted posts
    const totalPages = Math.ceil(totalPosts.length / POSTS_PER_PAGE);  // Calculate total pages
    const paths = Array.from({ length: totalPages }, (_, i) => ({
        page: (i + 1).toString(),  // Create a list of paths like "/page/1", "/page/2", etc.
    }));

    return paths;
}


export default async function Page({ params }) {
    const param = await params

    const { posts, totalPages } = await getPaginatedPosts(param.page, POSTS_PER_PAGE);
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
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                {posts.map(({ id, date, title }) => (
                    <Post key={id} id={id} date={date} title={title} />
                ))}
            </ul>
            <hr></hr>
            <PostPagination page={param.page} totalPages={totalPages}/>
        </section>
    )
}