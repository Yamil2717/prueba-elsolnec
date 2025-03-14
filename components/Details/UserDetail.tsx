"use client"

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
import Link from "next/link"
import ButtonBack from "@/components/ButtonBack"
import { useUser } from "@/hooks"
import Loading from "@/components/Loading"
import ErrorMessage from "@/components/ErrorMessage"

export default function UserDetail({ id }: { id: string }) {
    const { user, userError, userLoading } = useUser({ id })

    if (userLoading) return <Loading />
    if (userError || !user) return <ErrorMessage title="Error al cargar el usuario" error={userError} />

    return (
        <Card className="bg-white dark:bg-neutral-900 p-6 rounded-lg shadow-lg">
            <CardHeader className="flex items-center">
                <Avatar className="w-16 h-16 mr-4">
                    <AvatarImage
                        src={`https://www.gravatar.com/avatar/${user.id}?d=robohash&f=y&s=128`}
                        alt={`${user.name}'s avatar`}
                    />
                    <AvatarFallback>{user.name.charAt(0)}{user.name.split(' ')[1]?.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                    <CardTitle className="text-2xl font-bold">{user.name}</CardTitle>
                    <CardDescription className="text-gray-500">@{user.username}</CardDescription>
                </div>
            </CardHeader>
            <CardContent>
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
                        href={user.website.startsWith('http') ? user.website : `https://${user.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline dark:text-blue-400"
                    >
                        {user.website}
                    </Link>
                </p>
                <div className="mt-4">
                    <h2 className="text-lg font-semibold">Dirección</h2>
                    <p>{user.address.street}, {user.address.suite}</p>
                    <p>{user.address.city}, {user.address.zipcode}</p>
                </div>
                <div className="mt-4">
                    <h2 className="text-lg font-semibold">Empresa</h2>
                    <p className="font-semibold">{user.company.name}</p>
                    <p className="text-sm italic">{user.company.catchPhrase}</p>
                </div>
            </CardContent>
            <CardFooter className="flex justify-end">
                <ButtonBack url="/users" text="Volver a todos los usuarios" />
            </CardFooter>
        </Card>
    )
}
