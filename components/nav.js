import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export const Nav = ({ styles, onClick }) => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [navbarHidden, setNavbarHidden] = useState(false);

    useEffect(() => {
            const handleScroll = () => {
                const currentScrollPos = window.pageYOffset;

                if (prevScrollPos > currentScrollPos) {
                    // Scrolling up
                    setNavbarHidden(false);
                } else {
                    // Scrolling down
                    setNavbarHidden(true);
                }

                setPrevScrollPos(currentScrollPos);
        }
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    return (<>
        <header className={navbarHidden ? styles.navHidden : styles.nav}>

            <img className={styles.logo} src={"/thumbnail-mohamed-amine-terbah-marinosTBH-gomycode.svg"} name="MarinosTBH" alt='thumbnail'></img>

            <div className={styles.navBox}>
                <h4 onClick={onClick} className={styles.navList}>Contact</h4>
                <Link href="/author">
                    <h4 className={styles.navList}>Author</h4>
                </Link>
            </div>
        </header>
    </>
    )
}
