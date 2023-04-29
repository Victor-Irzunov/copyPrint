
import { Modal } from 'antd'
import { FormChernoBeloeCvetnoe } from '../form/FormChernoBeloeCvetnoe'
import { FormPredmety } from '../form/FormPredmety'
import { FormFoto } from '../form/FormFoto'
import { FormHolsty } from '../form/FormHolsty'
import { FormReklama } from '../form/FormReklama'



const ModalComp = ({ isModalOpen, title, handleCancel, id }) => {
	console.log('id:', id)
	return (
		<Modal
			title={title}
			open={isModalOpen}
			onCancel={handleCancel}
			centered
			footer={null}
		>
			{
				id === 1 && <FormChernoBeloeCvetnoe title={title} handleCancel={handleCancel} />
			}
			{
				id === 2 && <FormFoto title={title} handleCancel={handleCancel} />
			}
			{
				id === 4 && <FormHolsty title={title} handleCancel={handleCancel} />
			}
			{
				id === 5 && <FormPredmety title={title} handleCancel={handleCancel} />
			}
			{
				id === 6 && <FormReklama title={title} handleCancel={handleCancel} />
			}
		</Modal>
	)
}

export default ModalComp
