"use client"

import { useEffect, useState, useMemo } from "react"
import { useInView } from "react-intersection-observer"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardFooter
} from "@/components/ui/card"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { useAllPosts } from "@/hooks"
import Loading from "@/components/Loading"
import ErrorMessage from "@/components/ErrorMessage"

export default function PostsList() {
    const { ref, inView } = useInView()
    const { data, isLoading, error, fetchNextPage, hasNextPage, isFetchingNextPage } = useAllPosts()
    const [search, setSearch] = useState('')

    const filteredPosts = useMemo(
        () =>
            data?.pages.flat().filter((post) =>
                post.title.toLowerCase().includes(search.toLowerCase())
            ) ?? [],
        [search, data]
    )

    useEffect(() => {
        if (inView && hasNextPage && !isFetchingNextPage) {
            fetchNextPage()
        }
    }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage])

    if (isLoading) return <Loading />
    if (error || !data) return <ErrorMessage title="Error al cargar las publicacioines" error={error} />

    return (
        <section className="container mx-auto p-4">
            <div className="mb-6 max-w-md mx-auto">
                <Label htmlFor="search" className="text-lg font-semibold mb-2">
                    Buscar publicaciones
                </Label>
                <Input
                    id="search"
                    type="search"
                    placeholder="Buscar por título..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full transition-colors focus:ring-2"
                    aria-label="Buscar publicaciones por título"
                />
            </div>
            {
                filteredPosts.length === 0
                    ? (
                        <p className="text-center text-gray-500 dark:text-gray-400">
                            No se encontraron publicaciones
                        </p>
                    )
                    : (
                        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
                            {filteredPosts.map((post) => (
                                <li key={post.id} className="h-full">
                                    <Card className="h-full flex flex-col hover:shadow-xl transition-shadow">
                                        <CardHeader className="flex-none">
                                            <div className="flex items-center gap-4">
                                                <Avatar className="h-12 w-12">
                                                    <AvatarImage
                                                        src={`https://www.gravatar.com/avatar/${post.id}?d=identicon&f=y&s=128`}
                                                        alt={`Avatar para ${post.title}`}
                                                    />
                                                    <AvatarFallback>{post.title.charAt(0).toUpperCase()}</AvatarFallback>
                                                </Avatar>
                                                <CardTitle className="text-lg line-clamp-2 capitalize">
                                                    {post.title}
                                                </CardTitle>
                                            </div>
                                        </CardHeader>
                                        <CardContent className="flex-grow">
                                            <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-4">
                                                {post.body}
                                            </p>
                                        </CardContent>
                                        <CardFooter className="flex-none">
                                            <a
                                                href={`/posts/${post.id}`}
                                                className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors"
                                            >
                                                Ver detalles
                                                <span className="sr-only"> de {post.title}</span>
                                            </a>
                                        </CardFooter>
                                    </Card>
                                </li>
                            ))}
                        </ul>
                    )
            }
            <div ref={ref} className="mt-8 text-center">
                {isFetchingNextPage && (
                    <p className="text-gray-500 dark:text-gray-400">Cargando más publicaciones...</p>
                )}
                {!hasNextPage && filteredPosts.length > 0 && (
                    <p className="text-gray-500 dark:text-gray-400">No hay más publicaciones</p>
                )}
            </div>
        </section>
    )
}
