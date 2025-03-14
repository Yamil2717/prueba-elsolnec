import { useQuery } from "@tanstack/react-query"
import { Comment } from "@/types"
import { fetchAPI } from "@/lib/utils"

const useComments = ({ id }: { id: string }) => {
    const { data: comments, error, isLoading } = useQuery({
        queryKey: ["comments", id],
        queryFn: async () => fetchAPI<Comment[]>(`/posts/${id}/comments`)
    })

    return { comments, error, isLoading }
}

export default useComments
