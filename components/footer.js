import styles from './layout.module.css'

export default function Footer({ styles, bottomRef }) {

  return (

    <footer className={styles.footer}>
      <div className={styles.contact}>
        <ul className={styles.list}>
          <li className={styles.listItem}><i ></i>Tunisia</li>
         
        </ul>
      </div>
    </footer>
  )
}