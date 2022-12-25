import { Inter } from '@next/font/google'
import Head from "next/head";

const inter = Inter({
    subsets: ['latin', 'cyrillic'],
})

type LayoutProps = {
    children: React.ReactNode
}

export default function Layout({children}: LayoutProps) {
    return (
        <div className={inter.className}>
            <Head>
                <title>Своя игра!</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <main className="font-sans flex flex-col gap-2 items-center justify-center min-h-screen w-full">
                {children}
            </main>
        </div>
    )
}