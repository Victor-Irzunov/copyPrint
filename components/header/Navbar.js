import { useState } from 'react'
import Image from "next/image"
import { useRouter } from "next/router"
import { MenuOutlined } from '@ant-design/icons'
import { Drawer } from 'antd'
import { Link as LinkScroll } from 'react-scroll'


const navigation = [
	{ id: 1, title: 'Главная', to: 'main' },
	{ id: 2, title: 'Услуги', to: 'service' },
	{ id: 3, title: 'Цифровая печать', to: '1' },
	{ id: 4, title: 'Фотопечать', to: '2' },
	{ id: 5, title: 'Послепечатная обработка', to: '3' },
	{ id: 6, title: 'Печать картин на холсте', to: '4' },
	{ id: 7, title: 'Нанесение изображений', to: '7' },
	{ id: 8, title: 'Рекламная продукция', to: '6' },
	{ id: 9, title: 'Допечатная и послепечатная обработка документов', to: '8' },
	{ id: 10, title: 'Допечатные услуги', to: '9' },
	{ id: 11, title: 'Доставка', to: 'dostavka' },
	{ id: 12, title: 'Контакты', to: 'contact' },
	
]

const NavBar = () => {
	const { pathname } = useRouter()

	const [open, setOpen] = useState(false);
	const showDrawer = () => {
		setOpen(true);
	};
	const onClose = () => {
		setOpen(false);
	};

	return (
		<div className='z-20 relative'>
			<nav
				className="py-3
				
			   z-20 shadow-xl
				bg-white
			  "
			>
				<div className="container mx-auto flex justify-between 
			items-center">
					<div className="">
						<Image src='/logo.webp' width='200' height='200' alt='logo' className="" />
					</div>
				</div>
			</nav>
			<div className="pt-1 pb-2 px-3 border border-white fixed top-2 right-4 z-50">
				<MenuOutlined
					className="text-[#414141] text-4xl"
					onClick={showDrawer}
				/>
			</div>

			<Drawer
				title={<span className='uppercase text-white text-xl font-light ml-1'>меню</span>}
				placement="right"
				onClose={onClose}
				open={open}
				width={'300px'}
				style={{
					background: '#414141',
				}}
			>
				<div className="text-white flex flex-col ">
					{navigation.map(({ id, title, to }) => {
						return (
							<LinkScroll to={to}
								smooth={true}
								offset={-100}
								duration={800}
								className="cursor-pointer mb-5"
								onClick={onClose}
								key={id}
							>
								{title}
							</LinkScroll>
						)
					})}
				</div>

			</Drawer>
		</div>
	)
}

export default NavBar
