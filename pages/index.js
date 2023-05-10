import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <meta name="google-site-verification" content="1dg259DByCnSAaxE4AaIHGNurXMEo58ilhtaaCqhg5I" />
        <meta name="description" content="Mohamed Amine TERBAH." />
        <meta property="og:title" content="MarinosTBH" />
        <meta property="og:description" content="Read the latest posts about Next.js rendering and React errors on My Next.js Blog." />
        <meta property="og:image" content="https://mat-dev-blog-nextjs.vercel.app/my-nextjs-blog-thumbnail.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog about development with nextjs and react" />
        <meta name="twitter:description" content="Read the latest posts about Next.js rendering and React errors on My Next.js Blog." />
        <meta name="twitter:image" content="https://mat-dev-blog-nextjs.vercel.app/my-nextjs-blog-thumbnail.jpg" />
        <link rel="canonical" href="https://mat-dev-blog-nextjs.vercel.app/" />
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>

        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
        <hr></hr>
        <Link href={`/author/author`}>
          <a className={utilStyles.footerC}> About </a>
        </Link>
      </section>
    </Layout>

  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}