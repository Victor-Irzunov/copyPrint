import Heading from "@component/components/Heading"
import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect } from "react"

const Error = () => {
	const router = useRouter()

	useEffect(() => {
		setTimeout(() => {
			router.push('/')
		}, 3000)
	}, [router])

	return (
		<div className="flex min-h-screen flex-col items-center justify-start px-10 pt-36 relative bg-slate-300">
			<Head>
				<title>
					Error page
				</title>
			</Head>
			<Heading text="500" />
			<Heading tag='h2' text='Страница ошибки 500.' />
			<h3 className="text-4xl text-red-600">
				Страница ошибки 500
			</h3>
		</div>
	)
}
export default Error