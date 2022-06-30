import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';

export default function Author () {
    return (
    <Layout author >
        <Head>
            <title>Author</title>
        </Head>
        <main>
        <h1>About me</h1>
            <p className={utilStyles.lightText}>
                Self learner and a lifelong learner. 
                <br></br>
                Active on github education linkedin learning and <a href="https://mlh.io/">MLH hackathons</a> 
                <br></br>
                I have been in a vocational training in Full stack MERN web applications, which enriched my web development knowledge.
                <br></br>
                I look far to learn more and build a good experience in the niche.
                <br></br>
                And i opt for contribution and open source projects.
                </p>
        <h1>Contact</h1>
            <div className={utilStyles.conatct}>
                <Link href="https://linkedin.com/in/m-a-t">
                    <a><img src="https://www.svgrepo.com/show/922/linkedin.svg" intrinsicsize="50 x 50" width="50" height="50" srcset="https://www.svgrepo.com/show/922/linkedin.svg 4x" alt="Linkedin SVG Vector" title="Linkedin SVG Vector"/></a>
                </Link>
                <Link href="https://github.com/MarinosTBH">
                    <a><img src="https://www.svgrepo.com/show/35001/github.svg" intrinsicsize="50 x 50" width="50" height="50" srcset="https://www.svgrepo.com/show/922/github.svg 4x" alt="github SVG Vector" title="github SVG Vector"/></a>
                </Link>
            </div>
        </main>
        </Layout>

    )
};