import Head from "next/head"
import PageTitle from "@/components/PageTitle"
import Image from "next/image"
import aboutPic from "public/images/personal/about_pic.jpg"
import styles from '@/styles/About.module.scss'

export default function About() {
    return (
        <>
            <Head>
                <title>Julie Pariona Osco - &Agrave; propos</title>
                <meta name="description" content="Développeur web fullstack basée en France. Skills: PHP, Symfony, JavaScript, Next.js" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <section className={ styles.about }>
                <div className={ styles.about_title }>
                    <PageTitle
                        title = "&Agrave; propos"
                    />
                </div>
                <div className={ styles.about_container }>
                    <div className={ styles.image_container }>
                        <Image src={ aboutPic } alt='photo' />
                    </div>
                    <div className={ styles.about_content }>
                        <h2>Je suis une développeuse web curieuse et avide de connaissance.</h2>
                        <div className={ styles.about_text }>
                            <p>
                                J&rsquo;ai découvert la programmation au détour de mes études en design graphique (en codant une simple page en HTML et CSS !).<br/>
                                Presque 3 ans après ma première piscine en PHP et une dizaine de projets, mon goût pour la programmation web n&rsquo;a fait que grandir. Pour moi, c&rsquo;est un moyen de continuer à découvrir de nouvelles technologies, de nouvelles façons de faire et dans un sens de me challenger.
                                Je souhaite à présent rejoindre une équipe bienveillante dans laquelle je pourrai investir mes compétences, mon éthique de travail et continuer à évoluer.
                            </p>
                            <aside className={ styles.about_links }>
                                <a
                                    href="/files/CV-JPARIONAOSCO-2023.pdf"
                                    alt="CV développeur php Julie Pariona Osco"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >Mon CV</a>

                                <a
                                    href="https://github.com/jupanaos"
                                    alt="Github"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >Github</a>

                                <a
                                    href="https://www.linkedin.com/in/jupanaos/"
                                    alt="LinkedIn"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >LinkedIn</a>

                                <a
                                    href="mailto:julie.pariona@gmail.com"
                                    alt="Email"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >On s&rsquo;écrit ?</a>
                            </aside>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}