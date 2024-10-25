'use client'
import { /* Allies, Ally, */ Maybe } from 'utils/types/graphql/graphql'
import s from './page.module.scss'
import { ChangeEvent, useCallback, useMemo, useState } from 'react'
import AllyCard from 'components/AllyCard/AllyCard'
import { IoClose } from 'react-icons/io5'
import { FaSquarePhone } from 'react-icons/fa6'
import { FaCheck } from 'react-icons/fa'
import {
	AdvancedMarker,
	AdvancedMarkerProps,
	APIProvider,
	InfoWindow,
	Map as MapGoogle,
	Marker,
	useMap,
} from '@vis.gl/react-google-maps'
import { IoIosSearch } from 'react-icons/io'
import AllyCardMap from 'components/AllyCardMap/AllyCardMap'
import type { Marker as MarkerType } from '@googlemaps/markerclusterer'
import { mapId } from 'utils/constants'
import { FiMapPin, FiPhone } from 'react-icons/fi'
import Footer from '@/components/Footer'

const Component = ({ data }: { data: any }) => {
	const [currentAlly, setCurrentAlly] = useState<Maybe<any>>()
	const [searchText, setSearchText] = useState('')
	const [searchResult, setSearchResult] = useState<Maybe<any>[]>([])
	const [currentType, setCurrentType] =
		useState<keyof typeof titles>('Restaurante')
	const currentAllies =
		data.alliesCollection?.items.filter(ally => ally?.type === currentType) ||
		[]
	const titles = {
		Restaurante: 'Restaurantes',
		Curso: 'Cursos',
		Belleza: 'Belleza',
		Otro: 'Otros',
	}
	const [markers, setMarkers] = useState<{ [key: string]: MarkerType }>({})
	const [selectedKey, setSelectedKey] = useState<string | null>(null)
	const selectedAlly = useMemo(
		() =>
			data.alliesCollection?.items && selectedKey
				? data.alliesCollection?.items.find(t => t?.sys.id === selectedKey)!
				: null,
		[data.alliesCollection?.items, selectedKey]
	)
	const results =
		searchResult.length && searchText
			? searchResult
			: !searchResult.length && searchText
			? []
			: data.alliesCollection?.items
			? data.alliesCollection?.items
			: []

	const closeModal = () => setCurrentAlly(undefined)

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchText(e.target.value)
		const search = e.target.value.toLowerCase()
		const result = data.alliesCollection?.items.filter(
			ally =>
				ally?.name?.toLowerCase().includes(search) ||
				titles[ally?.type as keyof typeof titles]
					?.toLowerCase()
					.includes(search)
		)
		setSearchResult(result || [])
	}

	const setMarkerRef = useCallback((marker: MarkerType | null, key: string) => {
		setMarkers(markers => {
			if ((marker && markers[key]) || (!marker && !markers[key])) return markers

			if (marker) {
				return { ...markers, [key]: marker }
			} else {
				const { [key]: _, ...newMarkers } = markers

				return newMarkers
			}
		})
	}, [])

	const handleInfoWindowClose = useCallback(() => {
		setSelectedKey(null)
	}, [])

	const handleMarkerClick = useCallback((ally: any) => {
		setSelectedKey(ally.sys.id)
	}, [])

	const selectType = (type: keyof typeof titles) => {
		setCurrentType(type)
		const infoSection = document.getElementById('info')
		infoSection?.scrollIntoView({ behavior: 'smooth' })
	}

	return (
		<main className={s.alliances}>
			{data.image?.url && (
				<img
					src={data.image?.url}
					alt="Alliances"
					className={s.alliances__img}
				/>
			)}
			<section className={s.alliances__controls}>
				<p className={s.alliances__controls__description}>{data.description}</p>
				<div className={s.alliances__controls__buttons}>
					<button
						className={`${s.alliances__controls__buttons__item} ${
							currentType === 'Restaurante' ? s.active : ''
						}`}
						onClick={() => selectType('Restaurante')}
					>
						<img
							className={s.alliances__controls__buttons__item__img}
							src="/images/b_1.png"
							alt={titles.Restaurante}
						/>
						<span>{titles.Restaurante}</span>
					</button>
					{/* <button
						className={`${s.alliances__controls__buttons__item} ${
							currentType === 'Curso' ? s.active : ''
						}`}
						onClick={() => selectType('Curso')}
					>
						<img
							className={s.alliances__controls__buttons__item__img}
							src="/images/b_2.png"
							alt={titles.Curso}
						/>
						<span>{titles.Curso}</span>
					</button> */}
					<button
						className={`${s.alliances__controls__buttons__item} ${
							currentType === 'Belleza' ? s.active : ''
						}`}
						onClick={() => selectType('Belleza')}
					>
						<img
							className={s.alliances__controls__buttons__item__img}
							src="/images/b_3.png"
							alt={titles.Belleza}
						/>
						<span>{titles.Belleza}</span>
					</button>
					<button
						className={`${s.alliances__controls__buttons__item} ${
							currentType === 'Otro' ? s.active : ''
						}`}
						onClick={() => selectType('Otro')}
					>
						<img
							className={s.alliances__controls__buttons__item__img}
							src="/images/b_4.png"
							alt={titles.Otro}
						/>
						<span>{titles.Otro}</span>
					</button>
				</div>
			</section>
			<section className={s.alliances__info} id="info">
				<div className={s.alliances__info__content}>
					<h2 className={s.alliances__info__content__title}>
						{titles[currentType]}
					</h2>
					<ul className={s.alliances__info__content__list}>
						{currentAllies?.length > 0 ? (
							currentAllies.map(
								ally =>
									ally && (
										<li key={ally?.name}>
											<AllyCard
												onClick={() => setCurrentAlly(ally)}
												ally={ally}
											/>
										</li>
									)
							)
						) : (
							<p>No hay alianzas</p>
						)}
					</ul>
				</div>
			</section>
			<APIProvider apiKey={'AIzaSyBR9NrrGIANnoWPAwlovr_hwb63vtS-kYU'}>
				<section className={s.alliances__search} id="search">
					<div className={s.alliances__search__input}>
						<input
							className={s.alliances__search__input__element}
							value={searchText}
							type="text"
							onChange={handleSearch}
							placeholder="Buscar aliados"
						/>
						<span className={s.alliances__search__input__icon}>
							<IoIosSearch />
						</span>
					</div>
					<MapGoogle
						id={mapId}
						mapId={mapId}
						className={s.alliances__search__map}
						defaultCenter={{
							lat: 6.257517252680524,
							lng: -75.57567111319777,
						}}
						defaultZoom={12}
						scrollwheel={false}
						mapTypeControl={false}
						fullscreenControl={false}
						streetViewControl={false}
					>
						{data.alliesCollection?.items.map(
							ally =>
								ally?.location?.lat &&
								ally.location?.lon && (
									<MarkerWithInfoWindow
										key={ally.name}
										position={{
											lat: ally.location?.lat,
											lng: ally.location?.lon,
										}}
										ally={ally}
										onClickFN={handleMarkerClick}
										setMarkerRef={setMarkerRef}
									/>
								)
						)}
						{selectedKey && (
							<InfoWindow
								anchor={markers[selectedKey]}
								onCloseClick={handleInfoWindowClose}
							>
								<div className={s.info_window}>
									{selectedAlly?.image?.url && (
										<img
											src={selectedAlly?.image?.url}
											alt={`Logo ${selectedAlly?.name}`}
											className={s.info_window__img}
										/>
									)}
									<h3 className={s.info_window__title}>{selectedAlly?.name}</h3>
									<p className={s.info_window__text}>
										<FiMapPin />
										{selectedAlly?.address}
									</p>
									<p className={s.info_window__text}>
										<FiPhone />
										{selectedAlly?.phone}
									</p>
								</div>
							</InfoWindow>
						)}
					</MapGoogle>
					{results?.length > 0 ? (
						<ul className={s.alliances__search__list}>
							{results.map(
								ally =>
									ally && (
										<li key={ally.name}>
											<AllyCardMap
												ally={ally}
												setSelectedKey={setSelectedKey}
											/>
										</li>
									)
							)}
						</ul>
					) : (
						<p className={s.alliances__search__no_results}>
							No se encontraron resultados para: {searchText}
						</p>
					)}
				</section>
				{currentAlly && (
					<div className={s.alliances__modal}>
						<div className={s.alliances__modal__overlay} onClick={closeModal} />
						<div className={s.alliances__modal__content}>
							<div className={s.alliances__modal__content__left}>
								{currentAlly.image?.url && (
									<img
										src={currentAlly.image?.url}
										alt={currentAlly?.name || ''}
										className={s.alliances__modal__content__left__img}
									/>
								)}
								<div className={s.alliances__modal__content__left__info}>
									<p className={s.alliances__modal__content__left__info__text1}>
										{currentAlly.text1}
									</p>
									<p className={s.alliances__modal__content__left__info__text2}>
										{currentAlly.text2}
									</p>
									<div
										className={s.alliances__modal__content__left__info__line}
									/>
									<p className={s.alliances__modal__content__left__info__phone}>
										<FaSquarePhone />
										{currentAlly.phone}
									</p>
									<p
										className={s.alliances__modal__content__left__info__address}
									>
										{currentAlly.address}
									</p>
									<ul className={s.alliances__modal__content__left__info__list}>
										{currentAlly.characteristics?.map((char, i) => (
											<li
												key={i}
												className={
													s.alliances__modal__content__left__info__list__item
												}
											>
												<FaCheck />
												{char}
											</li>
										))}
									</ul>
								</div>
							</div>
							<div className={s.alliances__modal__content__right}>
								{currentAlly.logo?.url && (
									<img
										src={currentAlly.logo?.url}
										alt={`${currentAlly?.name} Logo`}
										className={s.alliances__modal__content__right__logo}
									/>
								)}
								{currentAlly.location?.lat && currentAlly.location?.lon && (
									<MapGoogle
										className={s.alliances__modal__content__right__map}
										defaultCenter={{
											lat: currentAlly.location?.lat,
											lng: currentAlly.location?.lon,
										}}
										defaultZoom={18}
										scrollwheel={false}
										mapTypeControl={false}
										fullscreenControl={false}
										streetViewControl={false}
									>
										<Marker
											position={{
												lat: currentAlly.location?.lat,
												lng: currentAlly.location?.lon,
											}}
										/>
									</MapGoogle>
								)}
							</div>
							<button
								onClick={closeModal}
								aria-label="Cerrar modal"
								className={s.alliances__modal__content__close}
							>
								<IoClose />
							</button>
						</div>
					</div>
				)}
			</APIProvider>
			<Footer minHeight="min-h-[50vh]">{null}</Footer>
		</main>
	)
}

type Props = AdvancedMarkerProps & {
	ally: any
	onClickFN: (ally: any) => void
	setMarkerRef: (marker: MarkerType | null, key: string) => void
}
const MarkerWithInfoWindow = ({
	ally,
	position,
	onClickFN,
	setMarkerRef,
}: Props) => {
	const map = useMap(mapId)
	const handleClick = useCallback(() => {
		onClickFN(ally)
		position && map?.panTo(position)
		map?.setZoom(15)
	}, [onClickFN, ally, map, position])
	const ref = useCallback(
		(marker: google.maps.marker.AdvancedMarkerElement) =>
			setMarkerRef(marker, ally.sys.id),
		[setMarkerRef, ally.sys.id]
	)

	return (
		<AdvancedMarker position={position} ref={ref} onClick={handleClick}>
			<img src="/images/marker.svg" alt={`Marker ${ally.name}`} width={50} />
		</AdvancedMarker>
	)
}

export default Component
