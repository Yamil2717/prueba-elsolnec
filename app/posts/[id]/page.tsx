import dynamic from "next/dynamic"

const PostDetail = dynamic(() => import("@/components/Details/PostDetail"))

export default function PostDetailPage({ params }: { params: { id: string } }) {
    return (
        <main className="container mx-auto p-6">
            <PostDetail postId={params.id} />
        </main>
    )
}
