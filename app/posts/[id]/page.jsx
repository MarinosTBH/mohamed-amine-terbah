import { notFound } from 'next/navigation';
import { getAllPostIds, getPostData } from "../../../lib/posts";
import ChapterTwo from "../../../components/posts/ChapterTwo";
import ChapterThree from "../../../components/posts/ChapterThree";
import ChapterFour from "../../../components/posts/ChapterFour";
import ChapterFive from "../../../components/posts/ChapterFive";
import ChapterEight from "../../../components/posts/ChapterEight";
import { formatDate } from "pliny/utils/formatDate.js";
import Link from 'next/link';

export async function generateStaticParams() {
  const paths = getAllPostIds(); // Fetch paths

  return paths.map((path) => ({
    id: path.params.id.replace(/\s/g, "-"), // Replace spaces with hyphens
  }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const postData = await getPostData(id);

  if (!postData) return { notFound: true }; // Handle invalid paths

  return {
    title: postData.title,
    description: postData.title,
    openGraph: {
      title: postData.title,
      description: 'Html, Css Javascript and React learning with all gomycode checkpoints.',
      image: 'https://m-a-t.me/thumbnail-mohamed-amine-terbah-marinosTBH-gomycode.svg',
      url: `https://m-a-t.me/posts/${id}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: postData.title,
      description: 'Html, Css Javascript and React learning with all gomycode checkpoints.',
      image: 'https://m-a-t.me/thumbnail-mohamed-amine-terbah-marinosTBH-gomycode.svg',
    },
  };
}

export default async function Post({ params }) {
  const { id } = await params;
  const postData = await getPostData(id);

  if (!postData) return notFound(); // Handle invalid paths

  return (
      <article className="space-y-2 xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
        <h1 className="text-2xl leading-8 font-bold tracking-tight py-2">{postData.title}</h1>
        <div className="text-base leading-6 font-medium text-gray-500 dark:text-gray-400">
          {formatDate(postData.date)}
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        {id === "Chapter-1-Web-Development-Presentation" && (
        <p>
          Here is a pdf presentation of web development :{" "}
          <Link href="/webDevPresentation.pdf" download>
            Link to PDF
          </Link>
        </p>
      )}
      {id === "Chapter-2-git-checkpoint" && (
        <ChapterTwo title={postData.title} />
      )}
      {id === "Chapter-3-HTML" && <ChapterThree />}
      {id === "Chapter-4-CSS" && <ChapterFour />}
      {id === "Chapter-5-CSS-Layout" && <ChapterFive />}
      {id === "Chapter-8-Algorithms" && <ChapterEight />}
      </article>

     
  );
}
