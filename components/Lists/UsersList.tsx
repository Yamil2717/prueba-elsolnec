"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter
} from "@/components/ui/card"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useAllUsers } from "@/hooks"
import Loading from "@/components/Loading"
import ErrorMessage from "@/components/ErrorMessage"

export default function UsersList() {
    const [search, setSearch] = useState('')
    const { allUsers = [], allUsersError, allUsersLoading } = useAllUsers()

    const filteredUsers = useMemo(
        () =>
            allUsers.filter((user) =>
                `${user.name} ${user.username}`.toLowerCase().includes(search.toLowerCase())
            ) ?? [],
        [search, allUsers]
    )

    if (allUsersLoading) return <Loading />
    if (allUsersError || !allUsers) return <ErrorMessage title="Error al cargar los usuarios" error={allUsersError} />


    return (
        <div className="container mx-auto p-4">
            <div className="mb-6 max-w-md mx-auto">
                <Label htmlFor="search" className="text-lg font-semibold mb-2">
                    Buscar usuarios
                </Label>
                <Input
                    id="search"
                    type="search"
                    placeholder="Buscar por nombre o username..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full transition-colors focus:ring-2"
                    aria-label="Buscar publicaciones por título"
                />
            </div>
            <ul className="grid grid-cols-3 gap-4">
                {filteredUsers.map((user) => (
                    <li key={user.id}>
                        <Card>
                            <CardHeader className="flex items-center">
                                <Avatar className="w-16 h-16 mr-4">
                                    <AvatarImage
                                        src={`https://www.gravatar.com/avatar/${user.id}?d=robohash&f=y&s=128`}
                                        alt={`${user.name}'s avatar`}
                                    />
                                    <AvatarFallback>{user.name.charAt(0)}{user.name.split(' ')[1]?.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <CardTitle>{user.name}</CardTitle>
                                    <CardDescription>@{user.username}</CardDescription>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm">Compañia: {user.company.name}</p>
                                <p className="text-sm flex gap-1">
                                    E-mail:
                                    <Link href={`mailto:${user.email}`} className="text-blue-600 hover:underline dark:text-blue-400">
                                        {user.email}
                                    </Link>
                                </p>
                                <p className="text-sm">Teléfono: {user.phone}</p>
                                <p className="text-sm flex gap-1">
                                    Sitio web:
                                    <Link
                                        href={
                                            user.website.startsWith('http')
                                                ? user.website
                                                : `https://${user.website}`
                                        }
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:underline dark:text-blue-400"
                                    >
                                        {user.website}
                                    </Link>
                                </p>
                            </CardContent>
                            <CardFooter>
                                <Link
                                    href={`/users/${user.id}`}
                                    className="text-blue-600 hover:underline dark:text-blue-400"
                                >
                                    Ver detalles
                                </Link>
                            </CardFooter>
                        </Card>
                    </li>
                ))}
            </ul>
        </div>
    )
}
