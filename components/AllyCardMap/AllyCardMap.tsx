import { Ally, Maybe } from 'utils/types/graphql/graphql'
import s from './AllyCardMap.module.scss'
import { FaSquarePhone } from 'react-icons/fa6'
import { FaCheck } from 'react-icons/fa'
import { Dispatch, SetStateAction } from 'react'
import { useMap } from '@vis.gl/react-google-maps'
import { mapId } from 'utils/constants'
import { useMediaQuery } from 'usehooks-ts'
import { mobile } from 'utils/helpers/mediaQueries'

const AllyCardMap = ({
	ally,
	setSelectedKey,
}: {
	ally: Maybe<Ally>
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
		<button className={s.ally_card_map} onClick={onClick}>
			{ally?.image?.url && (
				<img
					className={s.ally_card_map__img}
					src={ally?.image?.url}
					alt={ally?.name || ''}
				/>
			)}
			<div className={s.ally_card_map__info}>
				<h3 className={s.ally_card_map__info__name}>{ally?.name}</h3>
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
		</button>
	)
}

export default AllyCardMap
