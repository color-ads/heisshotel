import { Ally, Maybe } from 'utils/types/graphql/graphql'
import s from './AllyCard.module.scss'

const AllyCard = ({
	ally,
	onClick,
}: {
	ally: Maybe<Ally>
	onClick: () => void
}) => {
	return (
		<button className={s.ally_card} onClick={onClick}>
			{ally?.logo?.url && (
				<div className={s.ally_card__logo}>
					<img
						className={s.ally_card__logo__img}
						src={ally?.logo?.url}
						alt={`${ally?.name} Logo`}
					/>
				</div>
			)}
			{ally?.image?.url && (
				<img
					className={s.ally_card__img}
					src={ally?.image?.url}
					alt={ally?.name || ''}
				/>
			)}
			<p className={s.ally_card__text1}>{ally?.text1}</p>
			<p className={s.ally_card__text2}>{ally?.text2}</p>
			<div className={s.ally_card__line} />
			<span className={s.ally_card__cta}>CONOCE MÁS</span>
		</button>
	)
}

export default AllyCard
