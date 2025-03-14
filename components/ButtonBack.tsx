import { ChevronLeft } from "lucide-react"
import Link from "next/link"

const ButtonBack = ({ url, text }: { url: string, text: string }) => {
    return (
        <Link
            href={url}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200 dark:bg-blue-500 dark:hover:bg-blue-600"
        >
            <ChevronLeft size={18} />
            {text}
        </Link>
    )
}

export default ButtonBack
