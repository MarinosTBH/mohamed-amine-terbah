import Date from "../../../components/date";
import { getAllPostIds, getPostData } from "../../../lib/posts";
import Head from "next/head";
import utilStyles from "../../../styles/utils.module.css";
import { notFound } from "next/navigation";
import Link from "next/link";

import ChapterTwo from "../../../components/ChapterTwo";
import ChapterThree from "../../../components/ChapterThree";
import ChapterFour from "../../../components/ChapterFour";
import ChapterFive from "../../../components/ChapterFive";
import ChapterEight from "../../../components/ChapterEight";

export async function generateStaticParams() {
  const paths = getAllPostIds(); // Fetch paths

  return paths.map((path) => ({
    id: path.params.id.replace(/\s/g, "-"), // Replace spaces with hyphens
  }));
}


export default async function Post({ params }) {
  const {id} = await params;
  
  const postData = await getPostData(id);
  if (!postData) return notFound(); // Handle invalid paths
  return (
    <>
      <Head>
        <title>{postData.title}</title>

        <meta name="description" content={postData.title} />
        <meta property="og:title" content=" " />
        <meta
          property="og:description"
          content="Html, Css Javascript and React learning with all gomycode checkpoints."
        />
        <meta
          property="og:image"
          content="https://mat-dev-blog-nextjs-1rg2mrdtc-marinostbh.vercel.app/thumbnail-mohamed-amine-terbah-marinosTBH-gomycode.svg"
        />
        <meta property="og:type" content="Gomycode blog" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gomycode checkpints" />
        <meta
          name="twitter:description"
          content="Html, Css Javascript and React learning with all gomycode checkpoints."
        />
        <meta
          name="twitter:image"
          content="https://mat-dev-blog-nextjs-1rg2mrdtc-marinostbh.vercel.app/thumbnail-mohamed-amine-terbah-marinosTBH-gomycode.svg"
        />
        <link rel="canonical" href="https://mat-dev-blog-nextjs.vercel.app/" />
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
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
    </>
  );
}
