import Head from "next/head"
import PageTitle from "@/components/PageTitle"

export default function About() {
    return (
        <>
            <Head>
                <title>Julie Pariona Osco - &Agrave; propos</title>
                <meta name="description" content="Développeur web fullstack basée en France. Skills: PHP, Symfony, JavaScript, Next.js" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <section>
                <PageTitle title = "&Agrave; propos"/>
                <p>
                    Je suis une développeuse web avide de connaissances.
                    J&lsquo;ai découvert la programmation au détour de mes études en design graphique. 
                    Plus de 2 ans après mes premières lignes de code, mon goût pour la programmation web n&lsquo;a fait que grandir. Pour moi, c&lsquo;est un moyen de continuer à découvrir de nouvelles technologies, de nouvelles façons de faire et dans un sens de me challenger.
				    Je souhaite rejoindre une entreprise et une équipe dans lesquelles je pourrai valoriser mes compétences techniques et mon éthique de travail pour mener à bien des projets variés et stimulants.
                </p>
            </section>
        </>
    )
}