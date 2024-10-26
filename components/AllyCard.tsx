'use client'
import { /* Ally, */ Maybe } from 'utils/types/graphql/graphql'
import { cn } from '@/lib/utils'
import Image from 'next/image'

const AllyCard = ({
	ally,
	onClick,
}: {
	ally: Maybe<any>
	onClick: () => void
}) => {
	return (
		<button className="w-full group/card" onClick={onClick}>
			<div
				className={cn(
					' cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto backgroundImage flex flex-col justify-between p-4',
					' bg-cover'
				)}
				style={{
					backgroundImage: `url(${ally?.image?.url})`,
				}}
			>
				<div className="absolute w-full h-full top-0 left-0 transition duration-300 bg-black opacity-60 group-hover/card:opacity-80"></div>
				<div className="flex flex-row flex-col items-center gap-2 z-10">
					{ally?.logo?.url && (
						<div className="bg-white rounded-full p-2 flex justify-center">
							<img
								src={ally?.logo?.url}
								alt={`${ally?.name} Logo`}
								className="h-10 object-cover"
							/>
						</div>
					)}
					<div className="flex flex-col">
						<p className="font-normal text-base text-gray-50 relative z-10">
							{ally?.name}
						</p>
						<p className="text-sm text-gray-400">{ally?.address}</p>
					</div>
				</div>
				<div className="text content">
					<p className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
						{ally?.text1}
					</p>
					<p className="font-normal text-sm text-gray-50 relative z-10 my-4">
						{ally?.text2}
					</p>
					<span className="w-full relative z-10 inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-secondary bg-secondary rounded-lg hover:bg-accent text-primary-foreground h-8 px-10 py-2 text-xs">
						CONOCE MÁS
					</span>
				</div>
			</div>
		</button>
	)
}

{
	/* <button className={s.ally_card} >
	{ally?.logo?.url && (
		<div className={s.ally_card__logo}>
			<img
				className={s.ally_card__logo__img}
				src={ally?.logo?.url}
				alt={`${ally?.name} Logo`}
			/>
		</div>
	)}
</button> */
}
export default AllyCard
