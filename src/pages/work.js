import Head from "next/head"
import Navbar from "@/components/Navbar"
import Project from "@/components/Project"
import Footer from "@/components/Footer"
import { useState } from "react"

export default function Work({ projects }) {
    return (
        <>
            <Head>
                <title>Julie Pariona Osco - A propos</title>
                <meta name="description" content="Développeur web fullstack basée en France. Skills: PHP, Symfony, JavaScript, Next.js" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
                <h1>
                    Mes projets
                </h1>
                {projects.map((project, i) => 
                    <Project
                        key={ i }
                        project={ project }
                    />
                )}
        </>
    )
}

export async function getStaticProps() {
    const res = await fetch('http://localhost:3000/api/projects')
    const projects = await res.json()

    return {
        props: {
            projects
        }
    }
}
