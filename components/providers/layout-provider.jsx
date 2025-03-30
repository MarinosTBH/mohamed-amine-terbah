"use client"
import Image from 'next/image'
import Footer from '../UI/Footer'
import siteMetadata from '../../data/site-metadata'
import Nav from '../UI/Nav'
import imgixLoader from '../../lib/image-loader'

export default function Layout({ children }) {
  return (<>
    <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      <Nav />
      <Image
        loader={imgixLoader}
        src="/images/profile.jpg"
        className="rounded-full mx-auto py-2"
        height={144}
        width={144}
        alt={siteMetadata.author}
      />
      <main className='mx-auto'>{children}</main>
    </div>
    <Footer/>
  </>
  )
}