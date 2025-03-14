import { fetchAPI } from "@/lib/utils"
import { User } from "@/types"
import { useQuery } from "@tanstack/react-query"

const useAllUsers = () => {
    const { data: allUsers, error: allUsersError, isLoading: allUsersLoading } = useQuery({
        queryKey: ["users"],
        queryFn: () => fetchAPI<User[]>('/users')
    })
    return { allUsers, allUsersError, allUsersLoading }
}

export default useAllUsers
