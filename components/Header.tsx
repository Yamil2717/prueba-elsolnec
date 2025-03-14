"use client"

import Link from "next/link"
import { ThemeToggle } from "./ThemeToggle"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"

export default function Header() {
    return (
        <header className="fixed flex justify-between items-center h-[3rem] py-7 px-5 w-full bg-white dark:bg-neutral-900 shadow-md dark:shadow-lg z-50">
            <Link href="/">
                <h1 className="text-2xl font-bold foreground">
                    Sol Neighborhood Educational Center
                    <span className="sr-only">Inicio</span>
                </h1>
            </Link>
            <NavigationMenu className="w-fit flex gap-2 items-center">
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <Link href="/users" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Usuarios
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/posts" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Publicaciones
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
                <ThemeToggle />
            </NavigationMenu>
        </header>
    )
}
