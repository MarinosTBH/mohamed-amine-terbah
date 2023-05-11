import Date from '../../components/date';
import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head';
import utilStyles from '../../styles/utils.module.css';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Post({ postData }) {
  const router = useRouter()
  const currentPath = router.asPath.split('/')[2];
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
        <meta name="description" content="Read the latest posts about Next.js rendering and React errors on My Next.js Blog." />
        <meta property="og:title" content="My Next.js Blog" />
        <meta property="og:description" content="Read the latest posts about Next.js rendering and React errors on My Next.js Blog." />
        <meta property="og:image" content="https://mat-dev-blog-nextjs.vercel.app/my-nextjs-blog-thumbnail.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="My Next.js Blog" />
        <meta name="twitter:description" content="Read the latest posts about Next.js rendering and React errors on My Next.js Blog." />
        <meta name="twitter:image" content="https://mat-dev-blog-nextjs.vercel.app/my-nextjs-blog-thumbnail.jpg" />
        <link rel="canonical" href="https://mat-dev-blog-nextjs.vercel.app/" />
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
      {currentPath === 'web-development-presentation' && <p>Here is a pdf presentation of web development :
        {' '}
        <Link href="/webDevPresentation.pdf" download 
        ><a>Link to PDF</a></Link>
      </p>}
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  // Add the "await" keyword like this:
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}