import { getAlliancesData, getAlliancesSeo } from 'lib/api'
import { draftMode } from 'next/headers'
import Component from './Component'
import { GlobalParams } from 'utils/types/GlobalParams'
import { notFound } from 'next/navigation'
import { Metadata, ResolvingMetadata } from 'next'
import { generateAppMetadata } from 'utils/helpers/generateAppMetadata'

export async function generateMetadata(
	{ params }: GlobalParams,
	parent: ResolvingMetadata
): Promise<Metadata> {
	const seo = await getAlliancesSeo({ locale: params.lang })

	return generateAppMetadata({ seo, lang: params.lang })
}

const Experiences = async ({ params: { lang } }: GlobalParams) => {
	const { isEnabled } = draftMode()
	const data = await getAlliancesData({ preview: isEnabled, locale: lang })

	if (!data) {
		notFound()
	}

	return <Component data={data} />
}

export default Experiences
