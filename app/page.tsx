import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'El Sol Neighborhood Educational Center',
  description: 'El Sol Neighborhood Educational Center - Empowering communities through education, health, and social services',
}

export default function HomePage() {
  return (
    <section className="flex-1 min-h-[calc(100vh-3rem)] flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 text-center space-y-4 px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Bienvenido a El Sol Neighborhood Educational Center
        </h1>
        <p className="text-xl text-gray-200 max-w-2xl mx-auto">
          Transformando comunidades a través de la educación, salud y servicios sociales
        </p>
        <div className="mt-12 pt-8 border-t border-white/20 max-w-xl mx-auto">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Explora nuestro contenido
          </h2>
          <div className="flex gap-4 justify-center">
            <Link href="/users">
              <Button size="lg" variant="default" className="text-lg">
                Usuarios
              </Button>
            </Link>
            <Link href="/posts">
              <Button size="lg" variant="secondary" className="text-lg">
                Publicaciones
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
