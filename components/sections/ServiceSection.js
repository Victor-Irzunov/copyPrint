import { yAnimation, yAnimation3 } from "@component/Constants/animation/AnimationConst"
import { dataMainService } from "@component/Constants/data/ServiceMainConst"
import { motion, useAnimation } from "framer-motion"
import Image from "next/image"
import { Collapse, Button } from 'antd'
import ModalComp from "../modal/ModalComp"
import { useState, useEffect } from "react"
// import { getBlurryPlaceholder } from 'next/image-optimization-utils'
const { Panel } = Collapse

const ServiceSection = () => {
	const [title, setTitle] = useState('')
	const [id, setId] = useState(null)
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [prevScrollPos, setPrevScrollPos] = useState(0)
	const [scrollDirection, setScrollDirection] = useState(null)
	const animation = useAnimation()

	useEffect(() => {
		function handleScroll() {
			const currentScrollPos = window.pageYOffset;
			if (prevScrollPos > currentScrollPos) { //прокрутка вверх
				setScrollDirection(false);
			} else {
				setScrollDirection(true);
			}
			setPrevScrollPos(currentScrollPos)
		}
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [prevScrollPos]);

	const showModal = () => {
		setIsModalOpen(true);
	}
	const handleCancel = () => {
		setIsModalOpen(false)
		setId(null)
	}
	return (
		<section
			className=" backdrop-blur-xl
			dark:bg-[#414141]/40 pt-5 pb-4 z-10 relative mb-10"
		>
			<div className="container mx-auto relative py-8" id="service">
				<h2 className="text-white text-2xl mb-10 text-center uppercase">
					Наши услуги
				</h2>
				<div className="flex justify-center items-start flex-wrap">
					{
						dataMainService.map(el => {
							return (
								<motion.div
									initial="hidden"
									whileInView="visible"
									key={el.id}
									id={el.id}
									variants={!scrollDirection ? yAnimation : yAnimation3}
									animate={animation}
								>
									<div
										className="bg-white mb-16 pb-8 rounded-md w-96  sm:mx-5"
										key={el.id}
										id={el.id}
									>
										<Image
											src={el.img}
											alt={el.alt}
											width={1280}
											height={900}
											className="rounded-t-md"
										/>
										<div className="px-1 text-center">
											<h3 className="uppercase mt-4 mb-2 text-[#C2398E] text-2xl font-semibold">
												{el.h3}
											</h3>
											<div className="text-xs font-extralight leading-none">
												{el.content}
											</div>
										</div>
										<div className="mt-5 px-1.5">
											<h4 className="text-center mb-2  text-[#18AECA] uppercase">Стоимость {(el.id === 7 || el.id === 8) ? '' : 'печати'}</h4>
											<Collapse
												accordion
											// defaultActiveKey={(el.id === 1) || (el.id ===4) ||( el.id === 7) ? ['1']: ['']}
											>
												{el.price.map(elem => {
													return (
														<Panel
															header={<p className="uppercase text-sm text-center text-[#C2398E]"
																key={elem.id}
															>
																{elem.title}
															</p>
															} key={elem.id}>
															<div >
																{
																	elem.list ?
																		<div className="text-center mb-2">
																			<p className="mb-1 uppercase text-xs">
																				Варианты изображений
																			</p>
																			<div className="">
																				{elem.list}
																			</div>
																		</div>
																		:
																		null
																}
																<Image
																	src={elem.img_price}
																	alt={elem.alt_price}
																	width={1306}
																	height={652}
																	placeholder="blur"
																	blurDataURL='/loading.webp'
																/>
																{elem.err ? <div className="w-full px-2 mt-3 text-[11px]">{elem.err}</div> : null}
															</div>
														</Panel>
													)
												})}
											</Collapse>
											<div className="mt-5 flex justify-center items-center">
												{
													(el.id !== 8 && el.id !== 9 && el.id !== 3)
														?
														<Button
															type="primary"
															shape="round"
															className="bg-[#18AECA] pb-1 pt-1.5 px-4 shadow-xl uppercase text-xs flex items-center justify-center"
															onClick={() => {
																showModal()
																setTitle(el.h3)
																setId(el.id)
															}}
														>
															Заказать
														</Button>
														:
														null
												}

											</div>
										</div>
									</div>
								</motion.div>
							)
						})
					}
				</div>
			</div>
			{
				id &&
				<ModalComp isModalOpen={isModalOpen} id={id} title={title} handleCancel={handleCancel} />
			}

		</section>
	)
}
export default ServiceSection