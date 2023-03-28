import { Lora, Philosopher } from '@next/font/google'

const lora = Lora({
	subsets: ['latin'],
});

const philosopher = Philosopher({
	subsets: ['latin'],
	weight: '400'
});

export { lora, philosopher };