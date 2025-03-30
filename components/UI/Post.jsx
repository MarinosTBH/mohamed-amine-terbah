import { formatDate } from 'pliny/utils/formatDate.js';
import siteMetadata from '../../data/site-metadata';
import Link from 'next/link';

export default function Post({ id, date, title }) {
    return <li className="py-12" key={id}>
        <article>
            <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                <dl>
                    <dt className="sr-only">Published on</dt>
                    <dd className="text-base leading-6 font-medium text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                    </dd>
                </dl>
                <div className="space-y-5 xl:col-span-3">
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-2xl leading-8 font-bold tracking-tight">
                                <Link
                                    href={`/posts/${id}`}
                                    className="text-gray-900 dark:text-gray-100"
                                >
                                    {title}
                                </Link>
                            </h2>
                            <div className="flex flex-wrap">
                                {/* {tags.map((tag) => (
                    <Tag key={tag} text={tag} />
                  ))} */}
                                Tags
                            </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                            {"summary"}
                        </div>
                    </div>
                    <div className="text-base leading-6 font-medium">
                        <Link
                            href={`/posts/${id}`}
                            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                            aria-label={`Read more: "${title}"`}
                        >
                            Read more &rarr;
                        </Link>
                    </div>
                </div>
            </div>
        </article>
    </li>

}