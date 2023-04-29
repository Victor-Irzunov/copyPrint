import Image from "next/image"

export const CallSection = () => {
	return (
		<section className='py-4 mt-8 bg-orange-500 relative'>
			<div className='container mx-auto'>
				<div className="flex justify-center items-center">
					<Image
						src='/support.svg'
						width='60'
						height='60'
						className=""
					/>
				</div>
				<div className="text-white text-center mt-4">
					<p className="uppercase">
						Cлужба поддержки клиентов
					</p>
					<p className="font-light mt-3 text-xl">
						9:00 - 21:00 <span className="text-base">пн-вс</span>
					</p>
					<p className="font-light text-sm mt-6">
						Если у вас остались какие-либо вопросы, обязательно свяжитесь с нами! Мы всегда рады помочь и ответить на все ваши вопросы. Не откладывайте на потом, позвоните нам прямо сейчас и получите полезную информацию, которая поможет вам принять правильное решение.
					</p>
				</div>
			</div>
		</section>
	)
}
