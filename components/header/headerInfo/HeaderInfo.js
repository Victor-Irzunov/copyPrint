import React, { useState } from 'react'
import { Collapse } from 'antd'
import { ClockCircleOutlined, PhoneOutlined, ShakeOutlined } from '@ant-design/icons'
import { useScreens } from '../../../Constants/constants'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { yAnimation3 } from '@component/Constants/animation/AnimationConst'
import { DrawerCompForms } from '@component/components/drawer/DrawerCompForms'

const { Panel } = Collapse

export const HeaderInfo = ({ setIsVisible }) => {
	const screens = useScreens()
	const [open, setOpen] = useState(false)
	const [placement, setPlacement] = useState('')
	const [title, setTitle] = useState('')

	const showDrawer = (placement, title) => {
		setOpen(true)
		setPlacement(placement)
		setTitle(title)
	}

	return (
		<>
			{
				screens.lg
					?
					<motion.div
					className='flex flex-col justify-between items-center pt-2 relative z-10
					 backdrop-blur-xl
				dark:bg-[#414141]/40'
					variants={yAnimation3}
				>
					<div className='container mx-auto'>

						<div className='flex  flex-col text-xs items-center text-white font-extralight'>
							<div className='flex items-center'>
								<ClockCircleOutlined />
								<span className='uppercase ml-1 mr-1'>режим работы</span>
							</div>
							<div className='pl-3 text-center'>
								<span className='tracking-widest'>09:00-21:00</span>
								<span className='uppercase ml-0.5 text-[10px] text-white'>пн-пт</span>
							</div>
							<div className='pl-3 text-center'>
								<span className='tracking-widest'>10:00-19:00</span>
								<span className='uppercase ml-0.5 text-[10px] text-white'>сб-вс</span>
							</div>
							<div className='text-center'>
								<p className='uppercase text-[10px]'>
									Тех. перерывы
								</p>
								<div className='flex'>
									<span className='mr-1'>
										12:00-12:15
									</span>
									<span className='mr-1'>
										14:00-14:30
									</span>
									<span>
										18:00-18:15
									</span>
								</div>
							</div>
						</div>

						<div className='mt-3 mb-2'>
							<div className='text-center text-white'>
								<p className='uppercase text-xs'>Контакты центров</p>

								<Collapse defaultActiveKey={['1']} ghost>
									<Panel header={<span className='text-white font-extralight'>г.Минск, ул.Ульяновская, д.30</span>} key="1">
										<div className='flex flex-col text-white'>
											<a href='tel:80296966860'
												className='text-base mb-1'
											>
												+ 375 29 696 68 60 <span className='ml-1 font-extralight text-[10px] uppercase'>а1</span>
											</a>
											<a href='tel:80336966860'
												className='text-base mb-1 pl-2'
											>
												+ 375 33 696 68 60 <span className='ml-1 font-extralight text-[10px] uppercase'>мтс</span>
											</a>
											<a href='tel:80256966860'
												className='text-base pl-4'
											>
												+ 375 25 696 68 60 <span className='ml-1 font-extralight text-[10px] uppercase'>лайф</span>
											</a>
										</div>
									</Panel>
									<Panel header={<span className='text-white font-extralight'>г.Минск, пр-т Дзержинского, д.104</span>} key="2">
										<div className='flex flex-col text-white'>
											<a href='tel:80447834045'
												className='text-base mb-1'
											>
												+ 375 44 783 40 45 <span className='ml-1 font-extralight text-[10px] uppercase'>а1</span>
											</a>
											<a href='tel:80297834045'
												className='text-base mb-1 pl-2'
											>
												+ 375 29 783 40 45 <span className='ml-1 font-extralight text-[10px] uppercase'>мтс</span>
											</a>
											<a href='tel:80257834045'
												className='text-base pl-4'
											>
												+ 375 25 783 40 45 <span className='ml-1 font-extralight text-[10px] uppercase'>лайф</span>
											</a>
										</div>
									</Panel>
									<Panel header={<span className='text-white font-extralight'>г.Минск, пр-т Машерова, д.54</span>} key="3">
										<div className='flex flex-col text-white'>
											<a href='tel:80296862929'
												className='text-base mb-1'
											>
												+ 375 29 686 29 29 <span className='ml-1 font-extralight text-[10px] uppercase'>а1</span>
											</a>
											<a href='tel:80336862929'
												className='text-base mb-1 pl-2'
											>
												+ 375 33 686 29 29 <span className='ml-1 font-extralight text-[10px] uppercase'>мтс</span>
											</a>
											<a href='tel:80256862929'
												className='text-sm pl-4'
											>
												+ 375 25 686 29 29 <span className='ml-1 font-extralight text-[10px] uppercase'>лайф</span>
											</a>
										</div>
									</Panel>
								</Collapse>

							</div>
						</div>

						<div className='flex flex-col items-center mb-2'>
							<div className='text-sm text-[#FC8D25] mb-2 uppercase flex items-center cursor-pointer'
								onClick={() => showDrawer('top', 'Заказать звонок')}
							>
								<ShakeOutlined />
								<span className='ml-1'>Заказать звонок</span>
							</div>

							<div className='z-20 flex items-center'>
								<a href={`${screens.md ? 'https://t.me/' : 'https://t.me/@'}`}>
									<Image
										src='/telegram.svg'
										width={30}
										height={30}
										className='mr-3'
										alt='иконка telegram'
									/>
								</a>
								{/* <a href='https://wa.me/37529?text=нуж....%....%20'
								>
									<Image src='/whatsapp.svg' width={30} height={30} className='mr-3' />
								</a> */}
								<a href='viber://chat?number=%2B37533'>
									<Image
										src='viber.svg'
										width={30} height={30}
										className='mr-3'
										alt='иконка viber'
									/>
								</a>
								<a href='https://www.instagram.com/copyprint.podarki/'
									target='_blank'
								>
									<Image
										src='/instagram.svg'
										width={30} height={30}
										className='mr-3'
										alt='иконка instagram'
									/>
								</a>
								<a href='https://vk.com/print1234'
									target='_blank'
									className=''
								>
									<Image
										src='/vk.svg'
										width={24} height={24}
										alt='иконка vk'
									/>
								</a>
							</div>
						</div>
					</div>
					{/* <Affix offsetTop={30} onChange={() => setIsVisible(i => !i)}><div></div></Affix> */}
					<DrawerCompForms
						open={open}
						placement={placement}
						title={title}
						setOpen={setOpen}
						isActiveForm={true}
					/>
				</motion.div>

					:

					<motion.div
						className='flex flex-col justify-between items-center pt-2 relative z-10
						 backdrop-blur-xl
					dark:bg-[#414141]/40'
						variants={yAnimation3}
					>
						<div className='container mx-auto'>

							<div className='flex  flex-col text-xs items-center text-white font-extralight'>
								<div className='flex items-center'>
									<ClockCircleOutlined />
									<span className='uppercase ml-1 mr-1'>режим работы</span>
								</div>
								<div className='pl-3 text-center'>
									<span className='tracking-widest'>09:00-21:00</span>
									<span className='uppercase ml-0.5 text-[10px] text-white'>пн-пт</span>
								</div>
								<div className='pl-3 text-center'>
									<span className='tracking-widest'>10:00-19:00</span>
									<span className='uppercase ml-0.5 text-[10px] text-white'>сб-вс</span>
								</div>
								<div className='text-center'>
									<p className='uppercase text-[10px]'>
										Тех. перерывы
									</p>
									<div className='flex'>
										<span className='mr-1'>
											12:00-12:15
										</span>
										<span className='mr-1'>
											14:00-14:30
										</span>
										<span>
											18:00-18:15
										</span>
									</div>
								</div>
							</div>

							<div className='mt-3 mb-2'>
								<div className='text-center text-white'>
									<p className='uppercase text-xs'>Контакты центров</p>

									<Collapse defaultActiveKey={['1']} ghost>
										<Panel header={<span className='text-white font-extralight'>г.Минск, ул.Ульяновская, д.30</span>} key="1">
											<div className='flex flex-col text-white'>
												<a href='tel:80296966860'
													className='text-base mb-1'
												>
													+ 375 29 696 68 60 <span className='ml-1 font-extralight text-[10px] uppercase'>а1</span>
												</a>
												<a href='tel:80336966860'
													className='text-base mb-1 pl-2'
												>
													+ 375 33 696 68 60 <span className='ml-1 font-extralight text-[10px] uppercase'>мтс</span>
												</a>
												<a href='tel:80256966860'
													className='text-base pl-4'
												>
													+ 375 25 696 68 60 <span className='ml-1 font-extralight text-[10px] uppercase'>лайф</span>
												</a>
											</div>
										</Panel>
										<Panel header={<span className='text-white font-extralight'>г.Минск, пр-т Дзержинского, д.104</span>} key="2">
											<div className='flex flex-col text-white'>
												<a href='tel:80447834045'
													className='text-base mb-1'
												>
													+ 375 44 783 40 45 <span className='ml-1 font-extralight text-[10px] uppercase'>а1</span>
												</a>
												<a href='tel:80297834045'
													className='text-base mb-1 pl-2'
												>
													+ 375 29 783 40 45 <span className='ml-1 font-extralight text-[10px] uppercase'>мтс</span>
												</a>
												<a href='tel:80257834045'
													className='text-base pl-4'
												>
													+ 375 25 783 40 45 <span className='ml-1 font-extralight text-[10px] uppercase'>лайф</span>
												</a>
											</div>
										</Panel>
										<Panel header={<span className='text-white font-extralight'>г.Минск, пр-т Машерова, д.54</span>} key="3">
											<div className='flex flex-col text-white'>
												<a href='tel:80296862929'
													className='text-base mb-1'
												>
													+ 375 29 686 29 29 <span className='ml-1 font-extralight text-[10px] uppercase'>а1</span>
												</a>
												<a href='tel:80336862929'
													className='text-base mb-1 pl-2'
												>
													+ 375 33 686 29 29 <span className='ml-1 font-extralight text-[10px] uppercase'>мтс</span>
												</a>
												<a href='tel:80256862929'
													className='text-sm pl-4'
												>
													+ 375 25 686 29 29 <span className='ml-1 font-extralight text-[10px] uppercase'>лайф</span>
												</a>
											</div>
										</Panel>
									</Collapse>

								</div>
							</div>

							<div className='flex flex-col items-center mb-2'>
								<div className='text-sm text-[#FC8D25] mb-2 uppercase flex items-center cursor-pointer'
									onClick={() => showDrawer('top', 'Заказать звонок')}
								>
									<ShakeOutlined />
									<span className='ml-1'>Заказать звонок</span>
								</div>

								<div className='z-20 flex items-center'>
									<a href={`${screens.md ? 'https://t.me/' : 'https://t.me/@'}`}>
										<Image
											src='/telegram.svg'
											width={30}
											height={30}
											className='mr-3'
											alt='иконка telegram'
										/>
									</a>
									{/* <a href='https://wa.me/37529?text=нуж....%....%20'
									>
										<Image src='/whatsapp.svg' width={30} height={30} className='mr-3' />
									</a> */}
									<a href='viber://chat?number=%2B37533'>
										<Image
											src='viber.svg'
											width={30} height={30}
											className='mr-3'
											alt='иконка viber'
										/>
									</a>
									<a href='https://www.instagram.com/copyprint.podarki/'
										target='_blank'
									>
										<Image
											src='/instagram.svg'
											width={30} height={30}
											className='mr-3'
											alt='иконка instagram'
										/>
									</a>
									<a href='https://vk.com/print1234'
										target='_blank'
										className=''
									>
										<Image
											src='/vk.svg'
											width={24} height={24}
											alt='иконка vk'
										/>
									</a>
								</div>
							</div>
						</div>
						{/* <Affix offsetTop={30} onChange={() => setIsVisible(i => !i)}><div></div></Affix> */}
						<DrawerCompForms
							open={open}
							placement={placement}
							title={title}
							setOpen={setOpen}
							isActiveForm={true}
						/>
					</motion.div>
			}
		</>
	)
}
