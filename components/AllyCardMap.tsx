import { /* Ally, */ Maybe } from 'utils/types/graphql/graphql'
import { Dispatch, SetStateAction } from 'react'
import { useMap } from '@vis.gl/react-google-maps'
import { mapId } from 'utils/constants'
import { useMediaQuery } from 'usehooks-ts'
import { mobile } from 'utils/helpers/mediaQueries'
import { FaCheck, FaSquarePhone } from 'react-icons/fa6'

const AllyCardMap = ({
	ally,
	setSelectedKey,
}: {
	ally: Maybe<any>
	setSelectedKey: Dispatch<SetStateAction<string | null>>
}) => {
	const isMobile = useMediaQuery(mobile)
	const map = useMap(mapId)
	const onClick = () => {
		ally?.sys.id && setSelectedKey(ally?.sys.id)
		ally?.location?.lat &&
			ally?.location?.lon &&
			map?.panTo({ lat: ally.location.lat, lng: ally.location.lon })
		map?.setZoom(15)
		const searchSection = document.getElementById('search')
		isMobile && searchSection?.scrollIntoView({ behavior: 'smooth' })
	}

	return (
		<button
			className="bg-white border rounded-xl shadow-sm sm:flex w-full items-center"
			onClick={onClick}
		>
			<div className="shrink-0 relative w-full rounded-t-xl overflow-hidden pt-[40%] sm:rounded-s-xl sm:max-w-60 md:rounded-se-none">
				{ally?.image?.url && (
					<img
						className="size-full absolute top-0 start-0 object-cover"
						src={ally?.image?.url}
						alt={ally?.name || ''}
					/>
				)}
			</div>
			<div className="flex flex-wrap text-left items-center h-full">
				<div className="p-4 flex flex-col h-full sm:p-7">
					<h3 className="text-lg font-bold text-gray-800">{ally?.name}</h3>
					<p className="mt-1 text-gray-500">{ally?.address}</p>
					<div className="mt-2">
						<p className="text-xs text-gray-500 flex gap-2">
							<FaSquarePhone /> {ally?.phone}
						</p>
						{ally?.characteristics?.length && (
							<ul className="mt-4">
								{ally.characteristics.map((char, i) => (
									<li key={i} className="text-xs text-gray-500 flex gap-2">
										<FaCheck /> {char}
									</li>
								))}
							</ul>
						)}
					</div>
				</div>
			</div>
		</button>
	)
}
{
	/* <button className={s.ally_card_map} >
			<div className={s.ally_card_map__info}>
				<p className={s.ally_card_map__info__address}>{ally?.address}</p>
				<p className={s.ally_card_map__info__item}>
					<FaSquarePhone /> {ally?.phone}
				</p>
				{ally?.characteristics?.length && (
					<ul className={s.ally_card_map__info__item}>
						{ally.characteristics.map((char, i) => (
							<li key={i} className={s.ally_card_map__info__item__li}>
								<FaCheck /> {char}
							</li>
						))}
					</ul>
				)}
			</div>
		</button> */
}

export default AllyCardMap
