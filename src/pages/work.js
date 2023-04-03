import Head from "next/head"
import Project from "@/components/Project"
import styles from '@/styles/Work.module.scss'
import PageTitle from "@/components/PageTitle"

export default function Work({ projects }) {
    return (
        <>
            <Head>
                <title>Julie Pariona Osco - Projets</title>
                <meta name="description" content="Développeur web fullstack basée en France. Skills: PHP, Symfony, JavaScript, Next.js" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <section className={ styles.work }>
                <div className={ styles.work_title }>
                    <PageTitle
                        title = "Mes projets"
                        subtitle="Des projets qu'ils sont beaux ! J'apporte une attention particulière à la documentation et à la propreté du code."
                    />
                </div>

                <ul className={ styles.work_projects }>
                    {projects.slice(0).reverse().map((project, i) => 
                        <Project
                            key={ i }
                            project={ project }
                        />
                    )}
                </ul>

            </section>
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
