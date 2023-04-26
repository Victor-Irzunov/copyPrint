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
		<div className="flex min-h-screen flex-col items-center justify-start px-10">
			<Head>
				<title>
					Error page
				</title>
			</Head>
			<Heading text="404" />
			<Heading tag='h2' text='error' />
		</div>
	)
}
export default Error