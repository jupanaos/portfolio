import Head from "next/head"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function About() {
    return (
        <>
            <Head>
                <title>Julie Pariona Osco - &Agrave; propos</title>
                <meta name="description" content="Développeur web fullstack basée en France. Skills: PHP, Symfony, JavaScript, Next.js" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <h1>
                    &Agrave; propos
                </h1>
            </main>
        </>
    )
}