"use client"

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ThemeToggle() {
    const { setTheme } = useTheme();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2 outline-hidden py-2 px-4 cursor-pointer">
                <span>Cambiar tema</span>
                <Moon className="h-[1.2rem] w-[1.2rem] hidden dark:block" />
                <Sun className="h-[1.2rem] w-[1.2rem] dark:hidden" />
                <span className="sr-only">Cambiar tema</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                    Claro
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                    Oscuro
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                    Por defecto
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
