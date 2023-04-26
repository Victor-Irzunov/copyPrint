import React from 'react'
import { Modal } from 'antd'
import { FormDataComp } from '../form/FormDataComp'



export const ModalComp = ({ isModalOpen, title, handleCancel }) => {

	return (
		<Modal
			title={title}
			open={isModalOpen}
			onCancel={handleCancel}
			centered
			footer={null}
		>
			<FormDataComp title={title} handleCancel={handleCancel} />

		</Modal>
	)
}
