import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.scss'
import { lora } from '@/utils/fonts'
import profilePic from 'public/images/personal/profile-pic.png'

export default function Home() {
	return (
		<>
			<Head>
				<title>Julie Pariona Osco - Développeuse web</title>
				<meta name="description" content="Développeur web fullstack basée en France. Skills: PHP, Symfony, JavaScript, Next.js" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<section className={ styles.home }>
				<div className={ styles.home_hero }>
					<div className={ styles.home_titles }>
						<h1 className={ lora.className }>
							<span>Julie</span>
							<span>Pariona</span>
							<span>Osco</span>
						</h1>
						<h2 className={ lora.className }>
							Développeuse web
						</h2>
					</div>
					<Image src={ profilePic } alt='photo' />
				</div>
			</section>
		</>
	)
}
