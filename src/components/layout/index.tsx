import { Inter } from '@next/font/google'
import Head from "next/head";

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

type LayoutProps = {
    children: React.ReactNode
}

export default function Layout({children}: LayoutProps) {
    return (
        <main className={inter.className}>
            <Head>
                <title>Своя игра!</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            {children}
        </main>
    )
}