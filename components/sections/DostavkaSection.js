import { CheckOutlined } from '@ant-design/icons'

const DostavkaSection = () => {
	return (
		<section className='py-6 my-4 relative' id='dostavka'>
			<div className='container mx-auto text-white'>


				<h3 className='uppercase text-2xl text-center'>
					Доставка
				</h3>
				<div className='mt-8'>
					<ul className=''>
						<li className='flex items-start font-light mb-2'>
							<CheckOutlined className='mr-3 pt-1' />
							<p>
								При доставке курьером оплата - наличный расчет
							</p>
						</li>
						<li className='flex items-start font-light mb-2'>
							<CheckOutlined className='mr-3 pt-1' />
							<p>
								По г. Минску в пределах МКАД: 10 р.
							</p>
						</li>
						<li className='flex items-start font-light mb-2'>
							<CheckOutlined className='mr-3 pt-1' />
							<p>
								Сенница, Ждановичи, Боровляны, Валерьяново, Колодищи, Шабаны, Колядичи - 15 р.
							</p>
						</li>
						<li className='flex items-start font-light mb-2'>
							<CheckOutlined className='mr-3 pt-1' />
							<p>
								При сумме заказа от 100 р. - бесплатная доставка в пределах МКАД
							</p>
						</li>
						<li className='flex items-start font-light mb-2'>
							<CheckOutlined className='mr-3 pt-1' />
							<p>
								При сумме заказа от 200 р. - бесплатная доставка в пределах Минского района (Сенница, Ждановичи, Боровляны, Валерьяново, Колодищи, Шабаны, Колядичи, Заславль)
							</p>
						</li>
						<li className='flex items-start font-light mb-2'>
							<CheckOutlined className='mr-3 pt-1' />
							<p>
								Доставка по РБ – БЕЛПОЧТОЙ и ЕВРОПОЧТОЙ  наложенным платежом за счет получателя. При заказе от 150 руб. доставка бесплатная.
							</p>
						</li>
						<li className='flex items-start font-light mb-2'>
							<CheckOutlined className='mr-3 pt-1' />
							<p>
								Доставка согласовывается при оформлении заказа.
							</p>
						</li>
					</ul>

					<div className='mt-8 text-sm text-center'>
						<p className='text-lg'>
							Сроки выполнения заявки
						</p>
						<p>
							Рассмотрение заявки осуществляется в течение 1-3 часов.
						</p>
						<p>
							Срок выполнения заказов 1-5 рабочих дней (в зависимости от загруженности и количества).
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default DostavkaSection