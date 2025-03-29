import React from 'react'
import styles from "../../../../components/layout.module.css"
import { getAllPostIds } from '../../../../lib/posts'

const CssCheckpoint = () => {
  return (
    <div className={styles.cloneBody}>
      <img id="logo" src="/css/css/Gomycode.svg" alt="Logo" />
      <div className={styles.cloneDiv} >
        <a className={styles.cloneAnchor} >Website is under construction</a>
      </div>
    </div>

  )
}

export default CssCheckpoint

export async function generateStaticParams() {
  const paths = getAllPostIds();
  console.log("path",paths);
  
  return paths.map((path) => ({ id: path.params.id }));
}