"use client"

import { Comment } from "@/types"
import { useState } from "react"
import { usePost, useComments } from "@/hooks"
import Loading from "@/components/Loading"
import ErrorMessage from "@/components/ErrorMessage"
import ButtonBack from "@/components/ButtonBack"
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent
} from "@/components/ui/card"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "../ui/button"

export default function PostDetail({ postId }: { postId: string }) {
    const { post, error: postError, isLoading: postLoading } = usePost({ id: postId });
    const { comments, error: commentsError, isLoading: commentsLoading } = useComments({ id: postId });

    const [newComment, setNewComment] = useState({ name: "", body: "" });
    const [localComments, setLocalComments] = useState<Comment[]>([]);

    if (postLoading || commentsLoading) return <Loading />

    if (postError || !post) return <ErrorMessage title="Error al cargar la publicación" error={postError} />
    if (commentsError || !comments) return <ErrorMessage title="Error al cargar los comentarios" error={commentsError} />

    const handleAddComment = () => {
        if (newComment.name.trim() && newComment.body.trim()) {
            setLocalComments([
                ...localComments,
                { id: Date.now(), name: newComment.name, email: "tú@solnec.org", body: newComment.body }
            ])
            setNewComment({ name: "", body: "" })
        }
    }

    return (
        <div className="mx-auto my-8">
            <div className="light:bg-white dark:bg-neutral-900 p-8 rounded-xl shadow-2xl">
                <Card className="h-full flex flex-col hover:shadow-xl transition-shadow">
                    <CardHeader className="flex-none">
                        <div className="items-center gap-4">
                            <CardTitle className="text-3xl font-bold mb-4 light:text-gray-800 dark:text-white">
                                {post.title}
                            </CardTitle>
                            <Avatar className="h-[27rem] w-full rounded-2xl">
                                <AvatarImage
                                    src={`https://www.gravatar.com/avatar/${post.userId}?d=identicon&f=y&s=128`}
                                    alt={`Avatar para ${post.userId}`}
                                />
                                <AvatarFallback>{post.title.charAt(0).toUpperCase()}</AvatarFallback>
                            </Avatar>
                        </div>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <p className="text-lg light:text-gray-600 dark:text-gray-300 mb-8">
                            {post.body}
                        </p>
                    </CardContent>
                </Card>
                <div className="mt-12">
                    <h2 className="text-2xl font-semibold mb-6 light:text-gray-800 dark:text-white">
                        Comentarios ({(comments?.length || 0) + localComments.length})
                    </h2>

                    <div className="space-y-4">
                        {comments?.map((comment) => (
                            <div key={comment.id}
                                className="p-4 rounded-lg light:bg-gray-50 dark:bg-neutral-800 shadow-sm">
                                <div className="flex items-center mb-2">
                                    <Avatar className="w-8 h-8 rounded-full flex items-center justify-center">
                                        <AvatarImage
                                            src={`https://www.gravatar.com/avatar/${comment.id}?d=robohash&f=y&s=128`}
                                            alt={`${comment.id}'s avatar`}
                                        />
                                        <AvatarFallback>{comment.name.charAt(0)}{comment.name.split(' ')[1]?.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <div className="ml-3">
                                        <p className="font-semibold light:text-gray-800 dark:text-white">{comment.name}</p>
                                        <p className="text-sm light:text-gray-500 dark:text-gray-400">{comment.email}</p>
                                    </div>
                                </div>
                                <p className="light:text-gray-600 dark:text-gray-300 ml-11">{comment.body}</p>
                            </div>
                        ))}
                        {localComments.map((comment) => (
                            <div key={comment.id}
                                className="p-4 rounded-lg light:bg-blue-50 dark:bg-blue-900/20 shadow-sm">
                                <div className="flex items-center mb-2">
                                    <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white">
                                        {comment.name[0].toUpperCase()}
                                    </div>
                                    <div className="ml-3">
                                        <p className="font-semibold light:text-gray-800 dark:text-white">{comment.name}</p>
                                        <p className="text-sm text-green-600 dark:text-green-400">{comment.email}</p>
                                    </div>
                                </div>
                                <p className="light:text-gray-600 dark:text-gray-300 ml-11">{comment.body}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 p-6 rounded-lg light:bg-gray-50 dark:bg-neutral-800 flex flex-col gap-4 shadow-sm">
                        <h2 className="text-xl font-semibold mb-4 light:text-gray-800 dark:text-white">Agregar Comentario</h2>
                        <Input
                            type="text"
                            placeholder="Tu nombre"
                            className="outline-hidden"
                            value={newComment.name}
                            onChange={(e) => setNewComment({ ...newComment, name: e.target.value })}
                        />
                        <Textarea
                            placeholder="Tu comentario..."
                            className="outline-hidden"
                            value={newComment.body}
                            onChange={(e) => setNewComment({ ...newComment, body: e.target.value })}
                        />
                        <div className="flex justify-end">
                            <Button variant="default" onClick={handleAddComment}>
                                Publicar Comentario
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end mt-6">
                    <ButtonBack url="/posts" text="Volver a todas las publicaciones" />
                </div>
            </div>
        </div>
    )
}
