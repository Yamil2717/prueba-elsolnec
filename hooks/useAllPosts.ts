import { fetchAPI } from "@/lib/utils"
import { Post } from "@/types"
import { useInfiniteQuery } from "@tanstack/react-query"

const useAllPosts = () => {
    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        error,
        isLoading
    } = useInfiniteQuery({
        queryKey: ["posts"],
        queryFn: async ({ pageParam = 1 }) => await fetchAPI<Post[]>(`/posts?_page=${pageParam}&_limit=10`),
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages) => lastPage.length === 10 ? allPages.length + 1 : undefined,
        staleTime: 60 * 1000
    })

    return {
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        error,
        isLoading
    }
}

export default useAllPosts
