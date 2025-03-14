import { useQuery } from "@tanstack/react-query"
import { Post } from "@/types"
import { fetchAPI } from "@/lib/utils"

const usePost = ({ id }: { id: string }) => {
    const { data: post, error, isLoading } = useQuery({
        queryKey: ["posts", id],
        queryFn: async () => fetchAPI<Post>(`/posts/${id}`)
    })

    return { post, error, isLoading }
}

export default usePost
