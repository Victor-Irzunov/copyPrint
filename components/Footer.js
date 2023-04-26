import {
	EnvironmentOutlined,
	ClockCircleOutlined, FieldTimeOutlined,
	PhoneOutlined,
} from '@ant-design/icons'
import { useScreens } from '@component/Constants/constants'
import Image from 'next/image'
import MapComp from '@component/components/MapComp'
import { useState, useRef, useEffect } from "react";

const Footer = () => {
	const screens = useScreens()

	const iframeRef = useRef(null)
	const iframeRef2 = useRef(null)
	const [inView, setInView] = useState(false)
	const [inView2, setInView2] = useState(false)

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setInView(true);
				}
			},
			{ threshold: 0.2 } // задает порог видимости в 50%
		)
		if (iframeRef.current) {
			observer.observe(iframeRef.current);
		}
		// Очистка наблюдателя при размонтировании
		return () => {
			observer.disconnect();
		}
	}, [])
	useEffect(() => {
		const observer2 = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setInView2(true);
				}
			},
			{ threshold: 0.1 }
		)
		if (iframeRef2.current) {
			observer2.observe(iframeRef2.current);
		}
		// Очистка наблюдателя при размонтировании
		return () => {
			observer2.disconnect()
		}
	}, [])

	return (
		<footer className="mt-auto z-10 relative bg-white" id="contact" ref={iframeRef2}>
			<div className="container mx-auto py-5" >
				<h4 className="text-center text-xl uppercase">Наши контакты</h4>

				<div className="bg-slate-200 rounded-lg px-3 py-4 mt-5">
					<p className='flex items-center font-bold'>
						<EnvironmentOutlined className='mr-2' />
						<a href='https://yandex.by/maps/-/CCU8vGcV2C' target='_blank'>г. Минск, ул. Ульяновская, д. 30</a>
					</p>
					<p className='text-xs pl-2 mb-2'>
						(пом. 3; отдельный вход со стороны фасада здания)
					</p>

					{/* <Image src='/2.webp' width={1960} height={742} className='rounded-md' /> */}

					{inView2 && <MapComp address={1} />}

					<p className='text-sm mt-3'>
						<span className='flex items-center mb-1'>
							<ClockCircleOutlined className='mr-2' /> Время работы:
						</span>
						<span className='uppercase text-xs pl-5 block'>пн-пт: 09:00-21:00</span>
						<span className='uppercase text-xs pl-5 block'>сб-вс: 10:00-19:00</span>
					</p>

					<p className='text-sm mt-3'>
						<span className='flex items-center mb-1'>
							<FieldTimeOutlined className='mr-2' /> Технические перерывы:
						</span>
						<span className='uppercase text-xs pl-5 block'>12:00-12:15</span>
						<span className='uppercase text-xs pl-5 block'>14:00-14:30</span>
						<span className='uppercase text-xs pl-5 block'>18:00-18:15</span>
					</p>

					<p className='flex items-center font-semibold mt-2'>

						<PhoneOutlined className='rotate-[135deg]' />
						<a href='tel:80296966860'>+ 375 29 696-68-60</a>
					</p>
					<p className='flex items-center font-semibold mt-2'>
						<PhoneOutlined className='rotate-[135deg]' />
						<a href='tel:80336966860'>+ 375 33 696-68-60</a>
					</p>
					<p className='flex items-center font-semibold mt-2'>
						<PhoneOutlined className='rotate-[135deg]' />
						<a href='tel:80256966860'>+ 375 25 696-68-60</a>
					</p>
					<p className='flex items-center font-semibold mt-2'>
						<PhoneOutlined className='rotate-[135deg]' /> + 375 17 323-15-40
					</p>
					<div className='flex items-center mt-4'>
						<Image src='mail.svg' width={25} height={25} />
						<span className='ml-2 text-sm'>
							serviceprintfoto2@gmail.com
						</span>
					</div>
					<div className='mt-3 flex items-center'>
						<a href='https://www.instagram.com/copyprint.podarki/'
							target='_blank'
						>
							<Image src='instagram.svg' width={30} height={30} />
						</a>
						<a href='https://vk.com/print1234'
							target='_blank'
							className='ml-4'
						>
							<Image src='vk.svg' width={24} height={24} />
						</a>
					</div>
				</div>

				<div className="bg-slate-200 rounded-lg px-3 py-4 mt-5">
					<p className='flex items-center font-bold'>
						<EnvironmentOutlined className='mr-2' />
						<a href='https://yandex.by/maps/-/CCUceJqb9D' target='_blank'>г. Минск, пр-т Дзержинского, д. 104</a>
					</p>
					<p className='text-xs pl-2 mb-2'>
						(ст.м."Петровщина", ТРЦ "Титан", Первая башня от метро, холл, пом. 3Н)
					</p>
					{/* <Image src='/3.webp' width={1960} height={742} className='rounded-md' /> */}
					{inView2 && <MapComp address={2} />}

					<p className='text-sm mt-3'>
						<span className='flex items-center mb-1'>
							<ClockCircleOutlined className='mr-2' /> Время работы:
						</span>
						<span className='uppercase text-xs pl-5 block'>пн-пт: 09:00-21:00</span>
						<span className='uppercase text-xs pl-5 block'>сб-вс: 10:00-19:00</span>
					</p>

					<p className='text-sm mt-3'>
						<span className='flex items-center mb-1'>
							<FieldTimeOutlined className='mr-2' /> Технические перерывы:
						</span>
						<span className='uppercase text-xs pl-5 block'>12:00-12:15</span>
						<span className='uppercase text-xs pl-5 block'>14:00-14:30</span>
						<span className='uppercase text-xs pl-5 block'>18:00-18:15</span>
					</p>

					<p className='flex items-center font-semibold mt-2'>

						<PhoneOutlined className='rotate-[135deg]' />
						<a href='tel:80447834045'>+ 375 44 783-40-45</a>
					</p>
					<p className='flex items-center font-semibold mt-2'>
						<PhoneOutlined className='rotate-[135deg]' />
						<a href='tel:80297834045'>+ 375 29 783-40-45 </a>
					</p>
					<p className='flex items-center font-semibold mt-2'>
						<PhoneOutlined className='rotate-[135deg]' />
						<a href='tel:80257834045'>+ 375 25 783-40-45</a>
					</p>
					<p className='flex items-center font-semibold mt-2'>
						<PhoneOutlined className='rotate-[135deg]' /> + 375 17 362 85 99
					</p>
					<div className='flex items-center mt-4'>
						<Image src='mail.svg' width={25} height={25} />
						<span className='ml-2 text-sm'>
							serviceprintfoto3@gmail.com
						</span>
					</div>
					<div className='mt-3 flex items-center'>
						<a href='https://www.instagram.com/copyprint.podarki/'
							target='_blank'
						>
							<Image src='instagram.svg' width={30} height={30} />
						</a>
						<a href='https://vk.com/print1234'
							target='_blank'
							className='ml-4'
						>
							<Image src='vk.svg' width={24} height={24} />
						</a>
					</div>
				</div>


				<div className="bg-slate-200 rounded-lg px-3 py-4 mt-5">
					<p className='flex items-center font-bold'>
						<EnvironmentOutlined className='mr-2' />
						<a href='https://yandex.by/maps/-/CCUceJFJTB' target='_blank'>г. Минск, пр-т Машерова, д. 54</a>
					</p>
					<p className='text-xs pl-2 mb-2'>
						(вход расположен в центре здания со стороны фасада)
					</p>
					{/* <Image src='/4.webp' width={1960} height={742} className='rounded-md' /> */}

					{inView2 && <MapComp address={3} />}

					<p className='text-sm mt-3'>
						<span className='flex items-center mb-1'>
							<ClockCircleOutlined className='mr-2' /> Время работы:
						</span>
						<span className='uppercase text-xs pl-5 block'>пн-пт: 09:00-21:00</span>
						<span className='uppercase text-xs pl-5 block'>сб-вс: 10:00-19:00</span>
					</p>

					<p className='text-sm mt-3'>
						<span className='flex items-center mb-1'>
							<FieldTimeOutlined className='mr-2' /> Технические перерывы:
						</span>
						<span className='uppercase text-xs pl-5 block'>12:00-12:15</span>
						<span className='uppercase text-xs pl-5 block'>14:00-14:30</span>
						<span className='uppercase text-xs pl-5 block'>18:00-18:15</span>
					</p>

					<p className='flex items-center font-semibold mt-2'>

						<PhoneOutlined className='rotate-[135deg]' />
						<a href='tel:80296862929'>+ 375 29 686-29-29</a>
					</p>
					<p className='flex items-center font-semibold mt-2'>
						<PhoneOutlined className='rotate-[135deg]' />
						<a href='tel:80336862929'>+ 375 33 686-29-29 </a>
					</p>
					<p className='flex items-center font-semibold mt-2'>
						<PhoneOutlined className='rotate-[135deg]' />
						<a href='tel:80256862929'>+ 375 25 686-29-29</a>
					</p>
					<p className='flex items-center font-semibold mt-2'>
						<PhoneOutlined className='rotate-[135deg]' /> + 375 17  323-15-30
					</p>
					<div className='flex items-center mt-4'>
						<Image
							src='mail.svg'
							width={25} height={25}
							alt='иконка почты'
						/>
						<span className='ml-2 text-sm'>
							serviceprintfoto@gmail.com
						</span>
					</div>
					<div className='mt-3 flex items-center'>
						<a href='https://www.instagram.com/copyprint.podarki/'
							target='_blank'
						>
							<Image
								src='instagram.svg'
								width={30} height={30}
								alt='иконка instagram'
							/>
						</a>
						<a href='https://vk.com/print1234'
							target='_blank'
							className='ml-4'
						>
							<Image
								src='vk.svg'
								width={24} height={24}
								alt='иконка vk'
							/>
						</a>
					</div>
				</div>
			</div>


			<div ref={iframeRef}>
				{
					inView && <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A8f6de9222c687744378d4117baddd54b913f2bb015c7e5b269d8c659377f12f2&amp;source=constructor" width="100%" height="400" frameBorder="0"></iframe>
				}
			</div>


			<div className='flex items-center container mx-auto mt-3'>
				<p className="
              font-poppins
              font-normal
              text-center
              sm:text-[14px]
              xy:text-[10px]
              xyy:text-[10px]
              leading-[27px]
              text-gray-500
              "
				>
					Copyright Ⓒ 2023. Разработка и продвижение <a href="https://vi-tech.by" className="text-gradient text-cyan-600" rel="noreferrer" target="_blank">VI:TECH</a>. &nbsp;
				</p>
			</div>
		</footer>
	)
}


export default Footer
