"use client"
import Image from 'next/image'
import Footer from '../UI/Footer'
import siteMetadata from '../../data/site-metadata'
import Nav from '../UI/Nav'
import { useRouter, usePathname } from "next/navigation"

export default function Layout({ children }) {
  const router = useRouter()
  const pathname = usePathname()
  // Hide back button on home page
  const isHomePage = pathname === "/"

  return (
    <>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
        <Nav />
        <Image
          src="/images/profile.jpg"
          className="rounded-full mx-auto py-2"
          height={144}
          width={144}
          alt={siteMetadata.author}
        />

        {!isHomePage && (
          <button
            onClick={() => router.back() || router.push('/')}
            className="text-primary-500 px-2 md:px-6 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="Back to the blog"
          >
            &larr; Back to the blog
          </button>
        )}

        <main className='mx-auto'>{children}</main>
      </div>
      <Footer />
    </>
  )
}
