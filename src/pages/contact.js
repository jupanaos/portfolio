import Head from "next/head"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function Contact() {
    return (
        <>
            <Head>
                <title>Julie Pariona Osco - Contact</title>
                <meta name="description" content="Développeur web fullstack basée en France. Skills: PHP, Symfony, JavaScript, Next.js" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Navbar />
                <h1>
                    Où me joindre
                </h1>
                <Footer />
            </main>
        </>
    )
}