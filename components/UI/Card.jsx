import Image from 'next/image'
import Link from 'next/link'
import siteMetadata from '../../data/site-metadata';
import { formatDate } from 'pliny/utils/formatDate.js';

const Card = ({ id, title, description, imgSrc, createdAt }) => (
  <div className="w-full max-w-[544px] p-4 md:w-1/2">
    <div
      className={`${imgSrc && 'h-full'} overflow-hidden rounded-md border-2 border-gray-200/60 dark:border-gray-700/60 flex flex-col justify-between`}
    >
      {imgSrc &&
        <Link
          href={`/projects/${id}`}
          aria-label={`Link to ${title}`}>
          <Image
            alt={title}
            src={imgSrc}
            className="object-cover object-center md:h-36 lg:h-48"
            width={544}
            height={306}
          />
        </Link>
      }
      <div className="p-6 flex flex-col flex-grow">
        <h2 className="mb-3 text-2xl leading-8 font-bold tracking-tight hover:text-gray-700 dark:hover:text-gray-500">
          <Link
            href={`/projects/${id}`}
            aria-label={`Link to ${title}`}>
            {title}
          </Link>
        </h2>
        <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{description}</p>

        {/* Pushes content to bottom */}
        <div className="flex justify-between w-full mt-auto">
          {/* Learn More (Far Left) */}
          <Link
            href={`/projects/${id}`}
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 text-base font-medium"
            aria-label={`Link to /projects/${id}`}
          >
            Learn more &rarr;
          </Link>

          {/* Date (Far Right) */}
          <time className="text-base text-gray-500 dark:text-gray-400" dateTime={createdAt}>
            {formatDate(createdAt, siteMetadata.locale)}
          </time>
        </div>
      </div>
    </div>
  </div>
)

export default Card;
