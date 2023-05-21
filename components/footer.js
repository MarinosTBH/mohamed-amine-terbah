import styles from './layout.module.css'

export default function Footer({ styles, bottomRef }) {

  return (

    <footer className={styles.footer}>
      <div className={styles.contact}>
        <ul className={styles.list}>
          <li className={styles.listItem}><i ></i>Tunisia</li>
          <li><i ></i><a href="mailto:hamma-terbah@live.fr">hamma-terbah@live.fr</a></li>
          <li className={styles.listItem}>
            <a href="https://www.linkedin.com/in/m-a-t" target="_blank" rel="noopener noreferrer">
              <img src="https://blog.waalaxy.com/wp-content/uploads/2021/01/index.png" width={30}></img>
            </a>
          </li>
          <li ref={bottomRef} className={styles.listItem}>
            <a href="https://github.com/MarinosTBH/" target="_blank" rel="noopener noreferrer">
              <img src="/github.png" width={33} style={{ marginTop: 0 }}></img>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}