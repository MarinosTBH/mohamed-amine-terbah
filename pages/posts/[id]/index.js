import Date from "../../../components/date";
import Layout from "../../../components/layout";
import { getAllPostIds, getPostData } from "../../../lib/posts";
import Head from "next/head";
import utilStyles from "../../../styles/utils.module.css";
import { useRouter } from "next/router";
import Link from "next/link";

import ChapterTwo from "../../../components/ChapterTwo";
import ChapterThree from "../../../components/ChapterThree";
import ChapterFour from "../../../components/ChapterFour";
import ChapterFive from "../../../components/ChapterFive";
import ChapterEight from "../../../components/ChapterEight";

export default function Post({ postData }) {
  const router = useRouter();
  const currentPath = router.asPath.split("/")[2];
  return (
    <Layout>
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
      {currentPath === "Chapter-1-Web-Development-Presentation" && (
        <p>
          Here is a pdf presentation of web development :{" "}
          <Link href="/webDevPresentation.pdf" download>
            Link to PDF
          </Link>
        </p>
      )}
      {currentPath === "Chapter-2-git-checkpoint" && (
        <ChapterTwo title={postData.title} />
      )}
      {currentPath === "Chapter-3-HTML" && <ChapterThree />}
      {currentPath === "Chapter-4-CSS" && <ChapterFour />}
      {currentPath === "Chapter-5-CSS-Layout" && <ChapterFive />}
      {currentPath === "Chapter-8-Algorithms" && <ChapterEight />}
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Add the "await" keyword like this:
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
