import dynamic from "next/dynamic"
const UserDetail = dynamic(() => import("@/components/Details/UserDetail"))

export default async function UserDetailPage({ params }: { params: { id: string } }) {
    return (
        <section className="container mx-auto p-6">
            <UserDetail id={params.id} />
        </section>
    )
}
