
import { useScreens } from "@component/Constants/constants"


const MapComp = ({ address }) => {
	const screens = useScreens()

	return (
		<div>
			{
				address === 1 ?
					<div className="overflow-hidden relative rounded-lg">
						<iframe
							src="https://yandex.by/map-widget/v1/?indoorLevel=1&ll=27.555624%2C53.892166&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg2NjY4OTQxMBJF0JHQtdC70LDRgNGD0YHRjCwg0JzRltC90YHQuiwg0KPQu9GM0Y_QvdCw0Z7RgdC60LDRjyDQstGD0LvRltGG0LAsIDMwIgoN6nHcQRWUkVdC&panorama%5Bdirection%5D=337.801204%2C0.380228&panorama%5Bfull%5D=true&panorama%5Bpoint%5D=27.555767%2C53.891900&panorama%5Bspan%5D=92.996688%2C60.000000&tab=panorama&z=16.81"
							width="100%"
							height={screens.lg ? '300px' : "180"}
							frameBorder="1"
							allowFullScreen={true}
							className="relative">
						</iframe>
					</div>
					:
					null
			}
			{
				address === 2 ?
					<div className="overflow-hidden relative rounded-lg">
						<iframe src="https://yandex.by/map-widget/v1/?indoorLevel=1&ll=27.480399%2C53.861873&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg2NjY3MzMxORJM0JHQtdC70LDRgNGD0YHRjCwg0JzRltC90YHQuiwg0L_RgNCw0YHQv9C10LrRgiDQlNC30Y_RgNC20YvQvdGB0LrQsNCz0LAsIDEwNCIKDdvX20EVjnJXQg%2C%2C&panorama%5Bdirection%5D=322.350931%2C0.714829&panorama%5Bfull%5D=true&panorama%5Bpoint%5D=27.480684%2C53.861500&panorama%5Bspan%5D=92.996688%2C60.000000&z=16.81"
							width="100%"
							height={screens.lg ? '300px' : "180"}
							frameborder="1"
							allowFullScreen={true}
							className="relative"
						></iframe>
					</div>
					:
					null
			}
			{
				address === 3 ?
					<div className="overflow-hidden relative rounded-lg">
						<iframe src="https://yandex.by/map-widget/v1/?ll=27.558085%2C53.917915&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg2NjY3MzQ1MhJD0JHQtdC70LDRgNGD0YHRjCwg0JzRltC90YHQuiwg0L_RgNCw0YHQv9C10LrRgiDQnNCw0YjRjdGA0LDQstCwLCA1NCIKDfd23EEV8qtXQg%2C%2C&panorama%5Bdirection%5D=356.900000%2C10.000000&panorama%5Bfull%5D=true&panorama%5Bpoint%5D=27.558126%2C53.917506&panorama%5Bspan%5D=92.996688%2C60.000000&tab=panorama&z=16.81"
							width="100%"
							height={screens.lg ? '300px' : "180"}
							frameborder="1"
							allowFullScreen={true}
							className="relative"
						></iframe>
					</div>
					:
					null
			}

		</div>
	)
}

export default MapComp
