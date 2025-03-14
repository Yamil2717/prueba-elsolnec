"use client"

import { ThemeProvider } from "@/providers/ThemeProvider"
import "./globals.css"
import QueryProvider from "@/providers/QueryProvider"
import Header from "@/components/Header"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <QueryProvider>
            <Header />
            <main className="flex flex-1 background pt-12">
              {children}
            </main>
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
