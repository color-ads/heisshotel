import { gql } from 'graphql-tag'

export const alliancesData = gql`
	query AlliancesData($locale: String) {
		alliesCollection(limit: 1, locale: $locale) {
			items {
				image {
					url
				}
				description
				alliesCollection {
					items {
						sys {
							id
						}
						name
						logo {
							url
						}
						image {
							url
						}
						text1
						text2
						phone
						address
						characteristics
						location {
							lat
							lon
						}
						type
					}
				}
			}
		}
	}
`

export const alliancesSeo = gql`
	query AlliancesSeo($locale: String) {
		alliesCollection(limit: 1, locale: $locale) {
			items {
				seo {
					title
					description
					openGraphImage {
						url
					}
				}
			}
		}
	}
`
