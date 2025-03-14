import dynamic from "next/dynamic"
import ButtonBack from "@/components/ButtonBack"

const PostsList = dynamic(() => import("@/components/Lists/PostsList"))

export default function PostsPage() {
    return (
        <main className="container mx-auto p-6">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
                    Publicaciones
                </h1>
                <ButtonBack url="/" text="Volver al inicio" />
            </div>
            <PostsList />
        </main>
    )
}

