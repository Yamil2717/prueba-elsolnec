import dynamic from "next/dynamic"
import ButtonBack from "@/components/ButtonBack"

const UserList = dynamic(() => import("@/components/Lists/UsersList"))

export default async function UsersPage() {
    return (
        <section className="container mx-auto p-6">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
                    Lista de Usuarios
                </h1>
                <ButtonBack url="/" text="Volver al inicio" />
            </div>
            <UserList />
        </section>
    )
}