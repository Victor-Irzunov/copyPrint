
const Heading = ({ tag, text, size }) => {
	const Tag = tag || 'h1'
	const Size = size || 'text-4xl'

	return (
		<div className="">
			<Tag className={`text-white pt-10 ${Size} font-semibold uppercase`}>{text}</Tag>
		</div>
	)
}
export default Heading