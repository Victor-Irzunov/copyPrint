import React from 'react'
import { Drawer } from 'antd'
import { FormTel } from '../form/FormTel'

export const DrawerCompForms = ({ open, placement, setOpen, isActiveForm, title }) => {
	const onClose = () => {
		setOpen(false)
	}
	return (
		<Drawer
			title={title}
			placement={placement}
			onClose={onClose}
			open={open}
			key={placement}
		>
			{
				isActiveForm && <FormTel onClose={onClose} />
			}
		</Drawer>
	)
}
