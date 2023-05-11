import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Med Amine TERBAH'
export const siteTitle = 'MAT Dev Blog'

export default function Layout({ children, home }) {
  return (<>
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/profile.jpg"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}

    </div>
    <footer className={styles.footer}>
      <div class="contact">
        <ul className={styles.list}>
          <li className={styles.listItem}><i ></i>Tunisia</li>
          <li><i ></i><a href="mailto:hamma-terbah@live.fr">hamma-terbah@live.fr</a></li>
          <li className={styles.listItem}>
            <a href="https://www.linkedin.com/in/m-a-t">

              <img src="https://blog.waalaxy.com/wp-content/uploads/2021/01/index.png" width={30}></img>
            </a>
          </li>
          <li className={styles.listItem}>
            <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" width={33} style={{ marginTop: 0 }}></img>
          </li>
          <li className={styles.listItem}>
            <a href="https://www.facebook.com/med.terbah.3">
              <img src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png" width={60} style={{ marginTop: 0 }}  ></img>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  </>
  )
}