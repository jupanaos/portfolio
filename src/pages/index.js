import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.scss'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	return (
		<>
			<Head>
				<title>Julie Pariona Osco - Développeuse web</title>
				<meta name="description" content="Développeur web fullstack basée en France. Skills: PHP, Symfony, JavaScript, Next.js" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<h1>
				Julie Pariona Osco
			</h1>
			<h2>
				Développeuse web junior
			</h2>
			<p>
				Plus de 2 ans après mes premières lignes de code, mon goût pour la programmation web n&lsquo;a fait que grandir. Pour moi, c&lsquo;est un moyen de continuer à découvrir de nouvelles technologies, de nouvelles façons de faire et dans un sens de me challenger.
				Je souhaite rejoindre une entreprise et une équipe dans lesquelles je pourrai valoriser mes compétences techniques et mon éthique de travail pour mener à bien des projets variés et stimulants.
			</p>
		</>
	)
}
