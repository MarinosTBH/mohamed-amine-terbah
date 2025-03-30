import Link from "next/link";

export default function PostPagination({ page, totalPages }) {
    return <div className="flex justify-between mt-6" >
        {
            page > 1 && (
                <Link
                    href={`/page/${Number(page) - 1}`}
                    className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-400"
                >
                    ← Previous
                </Link>
            )
        }
        < div className="flex-1 flex justify-end" >
            {
                page < totalPages && (
                    <Link
                        href={`/page/${Number(page) + 1}`}
                        className="flex justify-end text-blue-500 hover:text-blue-700 dark:hover:text-blue-400"
                    >
                        Next →
                    </Link>
                )
            }
        </div >
    </div >

}


