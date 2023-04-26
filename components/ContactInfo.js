
import Heading from "./Heading"



const ContactInfo = ({ contact }) => {
	const { name, email, address } = contact || {}
	const { street, city } = address || {}

	if (!contact) {
		return <Heading tag='h3' text='Пустой контакт' />
	}

	return (


		<div className="mt-10">
			<Heading tag='h3' text='контакт' size='text-xl' />
			<div className="text-white">
				<strong>
					name:{' '}
				</strong>
				{name}
			</div>
			<div className="text-white">
				<strong>
					email:{' '}
				</strong>
				{email}
			</div>
			<div className="text-white">
				<strong>
					address:{' '}
				</strong>
				{street}{' , '}{city}
			</div>
		</div>

	)
}

export default ContactInfo