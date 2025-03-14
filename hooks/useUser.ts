import { useQuery } from "@tanstack/react-query"
import { User } from "@/types"
import { fetchAPI } from "@/lib/utils"

const useUser = ({ id }: { id: string }) => {
    const { data: user, error: userError, isLoading: userLoading } = useQuery({
        queryKey: ["users", id],
        queryFn: async () => fetchAPI<User>(`/users/${id}`)
    })

    return { user, userError, userLoading }
}

export default useUser
