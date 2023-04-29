
import React, { useState } from 'react'
import {
	Form, Button, Input, Space, message, Radio, Select, InputNumber, Upload, Divider,
} from 'antd'
import InputMask from 'react-input-mask'
import { sendFotosTelegram, sendMail, sendOrderTelegram } from '../../http/telegramAPI'
import { MinusOutlined, PlusOutlined, UploadOutlined } from '@ant-design/icons'
import axios from 'axios'

const { TextArea } = Input

export const FormHolsty = ({ handleCancel, title, }) => {
	const [tel, setTel] = useState('')
	const [countValue, setCountValue] = useState(null)
	const [form] = Form.useForm()


	const onFinish = async (values) => {
		console.log('values: ', values)

		// let messageForm = `<b>--- Заказ с сайта ---</b>\n`
		// messageForm += `<b> </b>\n`
		// messageForm += `<b> ${title} </b>\n`
		// messageForm += `<b> </b>\n`
		// messageForm += `<b>Формат бумаги:</b> ${values.format}\n`
		// messageForm += `<b>Цвет печати:</b> ${values.color}\n`
		// messageForm += `<b>Плотность бумаги:</b> ${values.density}\n`
		// messageForm += `<b>Сторонний:</b> ${values.storonnij}\n`
		// messageForm += `<b>Послепечатное оформление:</b> ${values.oformlenie}\n`
		// messageForm += `<b>Цветовое решение брошюровки:</b> ${values.colorReshenie}\n`
		// messageForm += `<b>Срок изготовления:</b> ${values.srok}\n`
		// messageForm += `<b>Число копий:</b> ${countValue ? countValue : 0}\n`
		// messageForm += `<b>Имя и Фамилия:</b> ${values.name}\n`
		// messageForm += `<b>Почта:</b> ${values.email}\n`
		// messageForm += `<b>- - - - - - - - - - - - - - -</b>\n`
		// messageForm += `<b>Телефон:</b> ${values.tel}\n`
		// messageForm += `<b>Сообщение:</b> «${values.message}»\n`



		const chat_id = '-1001794221917'
		const formData = new FormData()
		// formData.append('photo', values.attachments[0].originFileObj)
		formData.append("chat_id", chat_id)

		formData.append("format", values.format ? values.format : '-')
		formData.append("color", values.color ? values.color : '-')
		formData.append("density", values.density ? values.density : '-')
		formData.append("oformlenie", values.oformlenie ? values.oformlenie : '-')
		formData.append("colorReshenie", values.colorReshenie ? values.colorReshenie : '-')
		formData.append("srok", values.srok ? values.srok : '-')
		formData.append("count", countValue ? countValue : '0')
		formData.append("tel", values.tel)
		formData.append("name", values.name ? values.name : '-')
		formData.append("email", values.email)
		formData.append("message", values.message ? values.message : '-')
		formData.append("address", values.address)
		formData.append("storonnij", values.storonnij ? values.storonnij : '-')
		formData.append("razmer", values.razmer ? values.razmer : '-')
		formData.append("variant", values.variant ? values.variant : '-')

		if (values.attachments && values.attachments.length > 0) {
			for (let i = 0; i < values.attachments.length; i++) {
				formData.append('attachments', values.attachments[i].originFileObj)
			}
		}
		// if (values.attachments && values.attachments.length > 0) {
		// 	for (let i = 0; i < values.attachments.length; i++) {
		// 		formData.append('photo', values.attachments[i].originFileObj)
		// 	}
		// }


		sendMail(formData)
			.then(data => {
				if (data.status === 200) {
					message.success(data.data.message)
					handleCancel()
					form.resetFields()
				} else {
					message.error(data.data.message)
				}
			})


		// sendOrderTelegram(messageForm)
		// 	.then(data => {
		// 		if (data.ok) {
		// 		}
		// 	})
		// sendFotosTelegram(formData)
		// 	.then(data => {
		// 		console.log('data: ', data)
		// 	})




	}

	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	}

	const beforeMaskedValueChange = (newState, oldState, userInput) => {
		var { value } = newState
		var selection = newState.selection
		var cursorPosition = selection ? selection.start : null
		if (value.endsWith('-') && userInput !== '-' && !tel.endsWith('-')) {
			if (cursorPosition === value.length) {
				cursorPosition--
				selection = { start: cursorPosition, end: cursorPosition }
			}
			value = value.slice(0, -1)
		}
		return {
			value,
			selection
		}
	}

	const minus = () => {
		setCountValue(prev => prev !== 0 ? prev - 1 : 0)
	}
	const plus = () => {
		setCountValue(prev => prev + 1)
	}


	return (
		<div className='overflow-hidden	overflow-x-hidden'>
			<Form
				name="basic"
				labelCol={{
					span: 24,
				}}
				wrapperCol={{
					span: 24,
				}}

				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete="off"
			>
				<Form.Item
					label='Выберите адрес печатного центра'
					name="address"
					className='mt-8 mb-6'
					rules={[
						{
							required: true,
							message: 'Пожалуйста удобный для Вас адрес!',
						},
					]}
				>
					<Radio.Group>
						<Space direction="vertical">
							<Radio value='serviceprintfoto2@gmail.com'>г.Минск, ул. Ульяновская, д.30</Radio>
							<Radio value='serviceprintfoto3@gmail.com'>г.Минск, пр-т Дзержинского, д.104</Radio>
							<Radio value='serviceprintfoto@gmail.com'>г.Минск, пр-т Машерова, д.54</Radio>
						</Space>
					</Radio.Group>
				</Form.Item>
				<Divider />
				<Form.Item
					label='Размер холста'
					name="razmer"
					tooltip="Например: 300x600"
				>
					<Input />
				</Form.Item>
				<Form.Item
					label='Вариант изображения'
					name="variant"
				>
					<Select
						options={[
							{
								value: 'фото',
								label: 'фото',
							},
							{
								value: 'метрика',
								label: 'метрика',
							},
							{
								value: 'коллаж',
								label: 'коллаж',
							},
							{
								value: 'репродукция',
								label: 'репродукция',
							},
							{
								value: 'Love is',
								label: 'Love is',
							},
							{
								value: 'INSTAGRAM',
								label: 'INSTAGRAM',
							},
							{
								value: 'Polaroid',
								label: 'Polaroid',
							},
							{
								value: 'модульная картина',
								label: 'модульная картина',
							},
						]}
					/>
				</Form.Item>

				<Form.Item
					label='Срок изготовления'
					name="srok"
					tooltip=""
				>
					<Select
						options={[
							{
								value: 'срочно',
								label: 'срочно',
							},
							{
								value: 'желаемое время (в комментариях)',
								label: 'желаемое время (в комментариях)',
							},
						]}
					/>
				</Form.Item>

				<Form.Item
					label='Число копий'
					name="count"
				>
					<Space.Compact block>
						<Button
							icon={<MinusOutlined />}
							onClick={minus}
						/>
						<InputNumber
							style={{ width: '50px' }}
							value={countValue}
						/>
						<Button
							icon={<PlusOutlined />}
							onClick={plus}
						/>
					</Space.Compact>
				</Form.Item>

				<Form.Item
					label='Имя и Фамилия'
					name="name"
				>
					<Input />
				</Form.Item>

				<Form.Item
					label='Почта'
					name="email"
					rules={[
						{ required: true, message: 'Пожалуйста введите email!' },
						{ type: 'email', message: 'Пожалуйста, введите корректный email!' },
					]}
				>
					<Input />
				</Form.Item>

				<Form.Item
					label="Добавить изображение"
					name="attachments"
					valuePropName="fileList"
					getValueFromEvent={(e) =>
						Array.isArray(e) ? e : e && e.fileList
					}
				>
					<Upload
						accept="image/*,application/pdf"
						maxCount={3}
						multiple
						listType="picture"
						beforeUpload={() => false}
					>
						<Button icon={<UploadOutlined />}>Открыть файл</Button>
					</Upload>
				</Form.Item>

				<Form.Item
					name='message'
				>
					<TextArea placeholder="Ваш комментарий к заказу"
						autoSize={{
							minRows: 2,
						}}
					/>
				</Form.Item>

				<Form.Item
					label='Телефон'
					name="tel"
					tooltip="код оператора и номер"
					rules={[
						{
							required: true,
							message: 'Пожалуйста введите номер!',
						},
					]}
				>
					<InputMask
						placeholder="29 123-45-67"
						mask="+3\7\5 99 999 99 99"
						maskChar={'-'}
						className='border py-1 px-4 rounded-md w-full'
						beforeMaskedValueChange={beforeMaskedValueChange}
						value={tel}
						onChange={(e) => setTel(e.target.value)}
					/>
				</Form.Item>

				<Form.Item
					wrapperCol={{
						offset: 8,
						span: 16,
					}}
				>
					<Button type="primary" shape="round" className="bg-[#18AECA] pb-1 pt-1.5 px-4 shadow-xl uppercase text-xs flex items-center justify-center" htmlType="submit">
						Отправить заказ
					</Button>
				</Form.Item>
			</Form >

		</div>
	)
}
