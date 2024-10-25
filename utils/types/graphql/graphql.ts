/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** The Circle scalar type represents a circle, defined by the coordinates of its center and a radius. The Circle type is used to represent a searchable area together with the '_within_circle' filter. */
  Circle: { input: any; output: any; }
  /**
   * A date-time string at UTC, such as 2007-12-03T10:15:30Z,
   *     compliant with the 'date-time' format outlined in section 5.6 of
   *     the RFC 3339 profile of the ISO 8601 standard for representation
   *     of dates and times using the Gregorian calendar.
   */
  DateTime: { input: any; output: any; }
  /** The 'Dimension' type represents dimensions as whole numeric values between `1` and `4000`. */
  Dimension: { input: any; output: any; }
  /** The 'HexColor' type represents color in `rgb:ffffff` string format. */
  HexColor: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  /** The 'Quality' type represents quality as whole numeric values between `1` and `100`. */
  Quality: { input: any; output: any; }
  /** The Rectangle scalar type represents a rectangle, defined by the coordinates of its top left and bottom right corners. The Rectangle type is used to represent a searchable area together with the '_within_rectangle' filter. */
  Rectangle: { input: any; output: any; }
};

export enum AlliesAlliesCollectionOrder {
  AddressAsc = 'address_ASC',
  AddressDesc = 'address_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PhoneAsc = 'phone_ASC',
  PhoneDesc = 'phone_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  Text1Asc = 'text1_ASC',
  Text1Desc = 'text1_DESC',
  Text2Asc = 'text2_ASC',
  Text2Desc = 'text2_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
}

export type AlliesFilter = {
  AND?: InputMaybe<Array<InputMaybe<AlliesFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AlliesFilter>>>;
  allies?: InputMaybe<CfAllyNestedFilter>;
  alliesCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  seo?: InputMaybe<CfSeoNestedFilter>;
  seo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
};

export enum AlliesOrder {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type AllyFilter = {
  AND?: InputMaybe<Array<InputMaybe<AllyFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AllyFilter>>>;
  address?: InputMaybe<Scalars['String']['input']>;
  address_contains?: InputMaybe<Scalars['String']['input']>;
  address_exists?: InputMaybe<Scalars['Boolean']['input']>;
  address_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  address_not?: InputMaybe<Scalars['String']['input']>;
  address_not_contains?: InputMaybe<Scalars['String']['input']>;
  address_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  characteristics_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  characteristics_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  characteristics_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  characteristics_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  location_exists?: InputMaybe<Scalars['Boolean']['input']>;
  location_within_circle?: InputMaybe<Scalars['Circle']['input']>;
  location_within_rectangle?: InputMaybe<Scalars['Rectangle']['input']>;
  logo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  phone?: InputMaybe<Scalars['String']['input']>;
  phone_contains?: InputMaybe<Scalars['String']['input']>;
  phone_exists?: InputMaybe<Scalars['Boolean']['input']>;
  phone_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  phone_not?: InputMaybe<Scalars['String']['input']>;
  phone_not_contains?: InputMaybe<Scalars['String']['input']>;
  phone_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  text1?: InputMaybe<Scalars['String']['input']>;
  text1_contains?: InputMaybe<Scalars['String']['input']>;
  text1_exists?: InputMaybe<Scalars['Boolean']['input']>;
  text1_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  text1_not?: InputMaybe<Scalars['String']['input']>;
  text1_not_contains?: InputMaybe<Scalars['String']['input']>;
  text1_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  text2?: InputMaybe<Scalars['String']['input']>;
  text2_contains?: InputMaybe<Scalars['String']['input']>;
  text2_exists?: InputMaybe<Scalars['Boolean']['input']>;
  text2_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  text2_not?: InputMaybe<Scalars['String']['input']>;
  text2_not_contains?: InputMaybe<Scalars['String']['input']>;
  text2_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Scalars['String']['input']>;
  type_contains?: InputMaybe<Scalars['String']['input']>;
  type_exists?: InputMaybe<Scalars['Boolean']['input']>;
  type_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type_not?: InputMaybe<Scalars['String']['input']>;
  type_not_contains?: InputMaybe<Scalars['String']['input']>;
  type_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export enum AllyLinkingCollectionsAlliesCollectionOrder {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum AllyOrder {
  AddressAsc = 'address_ASC',
  AddressDesc = 'address_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PhoneAsc = 'phone_ASC',
  PhoneDesc = 'phone_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  Text1Asc = 'text1_ASC',
  Text1Desc = 'text1_DESC',
  Text2Asc = 'text2_ASC',
  Text2Desc = 'text2_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
}

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType?: InputMaybe<Scalars['String']['input']>;
  contentType_contains?: InputMaybe<Scalars['String']['input']>;
  contentType_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentType_not?: InputMaybe<Scalars['String']['input']>;
  contentType_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  fileName_contains?: InputMaybe<Scalars['String']['input']>;
  fileName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName_not?: InputMaybe<Scalars['String']['input']>;
  fileName_not_contains?: InputMaybe<Scalars['String']['input']>;
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  height?: InputMaybe<Scalars['Int']['input']>;
  height_exists?: InputMaybe<Scalars['Boolean']['input']>;
  height_gt?: InputMaybe<Scalars['Int']['input']>;
  height_gte?: InputMaybe<Scalars['Int']['input']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  height_lt?: InputMaybe<Scalars['Int']['input']>;
  height_lte?: InputMaybe<Scalars['Int']['input']>;
  height_not?: InputMaybe<Scalars['Int']['input']>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size?: InputMaybe<Scalars['Int']['input']>;
  size_exists?: InputMaybe<Scalars['Boolean']['input']>;
  size_gt?: InputMaybe<Scalars['Int']['input']>;
  size_gte?: InputMaybe<Scalars['Int']['input']>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size_lt?: InputMaybe<Scalars['Int']['input']>;
  size_lte?: InputMaybe<Scalars['Int']['input']>;
  size_not?: InputMaybe<Scalars['Int']['input']>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url?: InputMaybe<Scalars['String']['input']>;
  url_contains?: InputMaybe<Scalars['String']['input']>;
  url_exists?: InputMaybe<Scalars['Boolean']['input']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url_not?: InputMaybe<Scalars['String']['input']>;
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  width?: InputMaybe<Scalars['Int']['input']>;
  width_exists?: InputMaybe<Scalars['Boolean']['input']>;
  width_gt?: InputMaybe<Scalars['Int']['input']>;
  width_gte?: InputMaybe<Scalars['Int']['input']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  width_lt?: InputMaybe<Scalars['Int']['input']>;
  width_lte?: InputMaybe<Scalars['Int']['input']>;
  width_not?: InputMaybe<Scalars['Int']['input']>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export enum AssetOrder {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

export type ContactoFilter = {
  AND?: InputMaybe<Array<InputMaybe<ContactoFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ContactoFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  iconContact_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  textContact?: InputMaybe<Scalars['String']['input']>;
  textContact_contains?: InputMaybe<Scalars['String']['input']>;
  textContact_exists?: InputMaybe<Scalars['Boolean']['input']>;
  textContact_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  textContact_not?: InputMaybe<Scalars['String']['input']>;
  textContact_not_contains?: InputMaybe<Scalars['String']['input']>;
  textContact_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  titleContact?: InputMaybe<Scalars['String']['input']>;
  titleContact_contains?: InputMaybe<Scalars['String']['input']>;
  titleContact_exists?: InputMaybe<Scalars['Boolean']['input']>;
  titleContact_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  titleContact_not?: InputMaybe<Scalars['String']['input']>;
  titleContact_not_contains?: InputMaybe<Scalars['String']['input']>;
  titleContact_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export enum ContactoOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TextContactAsc = 'textContact_ASC',
  TextContactDesc = 'textContact_DESC',
  TitleContactAsc = 'titleContact_ASC',
  TitleContactDesc = 'titleContact_DESC'
}

export type ContentfulMetadataConceptsDescendantsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContentfulMetadataConceptsFilter = {
  descendants?: InputMaybe<ContentfulMetadataConceptsDescendantsFilter>;
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContentfulMetadataFilter = {
  concepts?: InputMaybe<ContentfulMetadataConceptsFilter>;
  concepts_exists?: InputMaybe<Scalars['Boolean']['input']>;
  tags?: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type EntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export enum EntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type EspaciosFilter = {
  AND?: InputMaybe<Array<InputMaybe<EspaciosFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EspaciosFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  descriptionSpaces?: InputMaybe<Scalars['String']['input']>;
  descriptionSpaces_contains?: InputMaybe<Scalars['String']['input']>;
  descriptionSpaces_exists?: InputMaybe<Scalars['Boolean']['input']>;
  descriptionSpaces_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descriptionSpaces_not?: InputMaybe<Scalars['String']['input']>;
  descriptionSpaces_not_contains?: InputMaybe<Scalars['String']['input']>;
  descriptionSpaces_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  imageEspacio_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subtitleSpaces?: InputMaybe<Scalars['String']['input']>;
  subtitleSpaces_contains?: InputMaybe<Scalars['String']['input']>;
  subtitleSpaces_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subtitleSpaces_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subtitleSpaces_not?: InputMaybe<Scalars['String']['input']>;
  subtitleSpaces_not_contains?: InputMaybe<Scalars['String']['input']>;
  subtitleSpaces_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  titleSpaces?: InputMaybe<Scalars['String']['input']>;
  titleSpaces_contains?: InputMaybe<Scalars['String']['input']>;
  titleSpaces_exists?: InputMaybe<Scalars['Boolean']['input']>;
  titleSpaces_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  titleSpaces_not?: InputMaybe<Scalars['String']['input']>;
  titleSpaces_not_contains?: InputMaybe<Scalars['String']['input']>;
  titleSpaces_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export enum EspaciosOrder {
  SubtitleSpacesAsc = 'subtitleSpaces_ASC',
  SubtitleSpacesDesc = 'subtitleSpaces_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleSpacesAsc = 'titleSpaces_ASC',
  TitleSpacesDesc = 'titleSpaces_DESC'
}

export type ExperienciasCardFilter = {
  AND?: InputMaybe<Array<InputMaybe<ExperienciasCardFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ExperienciasCardFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  descriptionExperienceCard?: InputMaybe<Scalars['String']['input']>;
  descriptionExperienceCard_contains?: InputMaybe<Scalars['String']['input']>;
  descriptionExperienceCard_exists?: InputMaybe<Scalars['Boolean']['input']>;
  descriptionExperienceCard_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descriptionExperienceCard_not?: InputMaybe<Scalars['String']['input']>;
  descriptionExperienceCard_not_contains?: InputMaybe<Scalars['String']['input']>;
  descriptionExperienceCard_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  imageExperienceCard_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  titleExperienceCard?: InputMaybe<Scalars['String']['input']>;
  titleExperienceCard_contains?: InputMaybe<Scalars['String']['input']>;
  titleExperienceCard_exists?: InputMaybe<Scalars['Boolean']['input']>;
  titleExperienceCard_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  titleExperienceCard_not?: InputMaybe<Scalars['String']['input']>;
  titleExperienceCard_not_contains?: InputMaybe<Scalars['String']['input']>;
  titleExperienceCard_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export enum ExperienciasCardOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleExperienceCardAsc = 'titleExperienceCard_ASC',
  TitleExperienceCardDesc = 'titleExperienceCard_DESC'
}

export type FooterFilter = {
  AND?: InputMaybe<Array<InputMaybe<FooterFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<FooterFilter>>>;
  adressDescriptionFooter?: InputMaybe<Scalars['String']['input']>;
  adressDescriptionFooter_contains?: InputMaybe<Scalars['String']['input']>;
  adressDescriptionFooter_exists?: InputMaybe<Scalars['Boolean']['input']>;
  adressDescriptionFooter_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  adressDescriptionFooter_not?: InputMaybe<Scalars['String']['input']>;
  adressDescriptionFooter_not_contains?: InputMaybe<Scalars['String']['input']>;
  adressDescriptionFooter_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  adressTitleFooter?: InputMaybe<Scalars['String']['input']>;
  adressTitleFooter_contains?: InputMaybe<Scalars['String']['input']>;
  adressTitleFooter_exists?: InputMaybe<Scalars['Boolean']['input']>;
  adressTitleFooter_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  adressTitleFooter_not?: InputMaybe<Scalars['String']['input']>;
  adressTitleFooter_not_contains?: InputMaybe<Scalars['String']['input']>;
  adressTitleFooter_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contactDescriptionForm_contains?: InputMaybe<Scalars['String']['input']>;
  contactDescriptionForm_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contactDescriptionForm_not_contains?: InputMaybe<Scalars['String']['input']>;
  contactTitleFooter?: InputMaybe<Scalars['String']['input']>;
  contactTitleFooter_contains?: InputMaybe<Scalars['String']['input']>;
  contactTitleFooter_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contactTitleFooter_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contactTitleFooter_not?: InputMaybe<Scalars['String']['input']>;
  contactTitleFooter_not_contains?: InputMaybe<Scalars['String']['input']>;
  contactTitleFooter_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  disclaimer_contains?: InputMaybe<Scalars['String']['input']>;
  disclaimer_exists?: InputMaybe<Scalars['Boolean']['input']>;
  disclaimer_not_contains?: InputMaybe<Scalars['String']['input']>;
  sys?: InputMaybe<SysFilter>;
};

export enum FooterOrder {
  AdressDescriptionFooterAsc = 'adressDescriptionFooter_ASC',
  AdressDescriptionFooterDesc = 'adressDescriptionFooter_DESC',
  AdressTitleFooterAsc = 'adressTitleFooter_ASC',
  AdressTitleFooterDesc = 'adressTitleFooter_DESC',
  ContactTitleFooterAsc = 'contactTitleFooter_ASC',
  ContactTitleFooterDesc = 'contactTitleFooter_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type HabitacionSeparadoFilter = {
  AND?: InputMaybe<Array<InputMaybe<HabitacionSeparadoFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<HabitacionSeparadoFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  imagesCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  subtitle_contains?: InputMaybe<Scalars['String']['input']>;
  subtitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subtitle_not?: InputMaybe<Scalars['String']['input']>;
  subtitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export enum HabitacionSeparadoOrder {
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type HabitacionesFilter = {
  AND?: InputMaybe<Array<InputMaybe<HabitacionesFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<HabitacionesFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  descriptionHab?: InputMaybe<Scalars['String']['input']>;
  descriptionHab_contains?: InputMaybe<Scalars['String']['input']>;
  descriptionHab_exists?: InputMaybe<Scalars['Boolean']['input']>;
  descriptionHab_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descriptionHab_not?: InputMaybe<Scalars['String']['input']>;
  descriptionHab_not_contains?: InputMaybe<Scalars['String']['input']>;
  descriptionHab_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  modalDescription?: InputMaybe<Scalars['String']['input']>;
  modalDescription_contains?: InputMaybe<Scalars['String']['input']>;
  modalDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  modalDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  modalDescription_not?: InputMaybe<Scalars['String']['input']>;
  modalDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  modalDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  modalTitle?: InputMaybe<Scalars['String']['input']>;
  modalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  modalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  modalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  modalTitle_not?: InputMaybe<Scalars['String']['input']>;
  modalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  modalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subtitleHab?: InputMaybe<Scalars['String']['input']>;
  subtitleHab_contains?: InputMaybe<Scalars['String']['input']>;
  subtitleHab_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subtitleHab_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subtitleHab_not?: InputMaybe<Scalars['String']['input']>;
  subtitleHab_not_contains?: InputMaybe<Scalars['String']['input']>;
  subtitleHab_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  titleHab?: InputMaybe<Scalars['String']['input']>;
  titleHab_contains?: InputMaybe<Scalars['String']['input']>;
  titleHab_exists?: InputMaybe<Scalars['Boolean']['input']>;
  titleHab_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  titleHab_not?: InputMaybe<Scalars['String']['input']>;
  titleHab_not_contains?: InputMaybe<Scalars['String']['input']>;
  titleHab_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export enum HabitacionesOrder {
  DescriptionHabAsc = 'descriptionHab_ASC',
  DescriptionHabDesc = 'descriptionHab_DESC',
  ModalTitleAsc = 'modalTitle_ASC',
  ModalTitleDesc = 'modalTitle_DESC',
  SubtitleHabAsc = 'subtitleHab_ASC',
  SubtitleHabDesc = 'subtitleHab_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleHabAsc = 'titleHab_ASC',
  TitleHabDesc = 'titleHab_DESC'
}

export type HomeFilter = {
  AND?: InputMaybe<Array<InputMaybe<HomeFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<HomeFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  descriptionHome?: InputMaybe<Scalars['String']['input']>;
  descriptionHome_contains?: InputMaybe<Scalars['String']['input']>;
  descriptionHome_exists?: InputMaybe<Scalars['Boolean']['input']>;
  descriptionHome_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descriptionHome_not?: InputMaybe<Scalars['String']['input']>;
  descriptionHome_not_contains?: InputMaybe<Scalars['String']['input']>;
  descriptionHome_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  principalTitle?: InputMaybe<Scalars['String']['input']>;
  principalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  principalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  principalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  principalTitle_not?: InputMaybe<Scalars['String']['input']>;
  principalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  principalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subtitleHome?: InputMaybe<Scalars['String']['input']>;
  subtitleHome_contains?: InputMaybe<Scalars['String']['input']>;
  subtitleHome_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subtitleHome_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subtitleHome_not?: InputMaybe<Scalars['String']['input']>;
  subtitleHome_not_contains?: InputMaybe<Scalars['String']['input']>;
  subtitleHome_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  titleHome?: InputMaybe<Scalars['String']['input']>;
  titleHome_contains?: InputMaybe<Scalars['String']['input']>;
  titleHome_exists?: InputMaybe<Scalars['Boolean']['input']>;
  titleHome_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  titleHome_not?: InputMaybe<Scalars['String']['input']>;
  titleHome_not_contains?: InputMaybe<Scalars['String']['input']>;
  titleHome_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export enum HomeOrder {
  PrincipalTitleAsc = 'principalTitle_ASC',
  PrincipalTitleDesc = 'principalTitle_DESC',
  SubtitleHomeAsc = 'subtitleHome_ASC',
  SubtitleHomeDesc = 'subtitleHome_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleHomeAsc = 'titleHome_ASC',
  TitleHomeDesc = 'titleHome_DESC'
}

export enum ImageFormat {
  Avif = 'AVIF',
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP'
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT'
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB'
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: InputMaybe<Scalars['HexColor']['input']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars['Int']['input']>;
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars['Dimension']['input']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars['Quality']['input']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars['Dimension']['input']>;
};

export type MetadataHomeFilter = {
  AND?: InputMaybe<Array<InputMaybe<MetadataHomeFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<MetadataHomeFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  keywords?: InputMaybe<Scalars['String']['input']>;
  keywords_contains?: InputMaybe<Scalars['String']['input']>;
  keywords_exists?: InputMaybe<Scalars['Boolean']['input']>;
  keywords_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  keywords_not?: InputMaybe<Scalars['String']['input']>;
  keywords_not_contains?: InputMaybe<Scalars['String']['input']>;
  keywords_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  openGraphDescription?: InputMaybe<Scalars['String']['input']>;
  openGraphDescription_contains?: InputMaybe<Scalars['String']['input']>;
  openGraphDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  openGraphDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  openGraphDescription_not?: InputMaybe<Scalars['String']['input']>;
  openGraphDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  openGraphDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  openGraphImages_exists?: InputMaybe<Scalars['Boolean']['input']>;
  openGraphTitle?: InputMaybe<Scalars['String']['input']>;
  openGraphTitle_contains?: InputMaybe<Scalars['String']['input']>;
  openGraphTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  openGraphTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  openGraphTitle_not?: InputMaybe<Scalars['String']['input']>;
  openGraphTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  openGraphTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  twitterCard?: InputMaybe<Scalars['String']['input']>;
  twitterCard_contains?: InputMaybe<Scalars['String']['input']>;
  twitterCard_exists?: InputMaybe<Scalars['Boolean']['input']>;
  twitterCard_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  twitterCard_not?: InputMaybe<Scalars['String']['input']>;
  twitterCard_not_contains?: InputMaybe<Scalars['String']['input']>;
  twitterCard_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  twitterDescription?: InputMaybe<Scalars['String']['input']>;
  twitterDescription_contains?: InputMaybe<Scalars['String']['input']>;
  twitterDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  twitterDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  twitterDescription_not?: InputMaybe<Scalars['String']['input']>;
  twitterDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  twitterDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  twitterImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  twitterTitle?: InputMaybe<Scalars['String']['input']>;
  twitterTitle_contains?: InputMaybe<Scalars['String']['input']>;
  twitterTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  twitterTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  twitterTitle_not?: InputMaybe<Scalars['String']['input']>;
  twitterTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  twitterTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export enum MetadataHomeOrder {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  KeywordsAsc = 'keywords_ASC',
  KeywordsDesc = 'keywords_DESC',
  OpenGraphDescriptionAsc = 'openGraphDescription_ASC',
  OpenGraphDescriptionDesc = 'openGraphDescription_DESC',
  OpenGraphTitleAsc = 'openGraphTitle_ASC',
  OpenGraphTitleDesc = 'openGraphTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TwitterCardAsc = 'twitterCard_ASC',
  TwitterCardDesc = 'twitterCard_DESC',
  TwitterDescriptionAsc = 'twitterDescription_ASC',
  TwitterDescriptionDesc = 'twitterDescription_DESC',
  TwitterTitleAsc = 'twitterTitle_ASC',
  TwitterTitleDesc = 'twitterTitle_DESC'
}

export type PoliticasDePrivacidadFilter = {
  AND?: InputMaybe<Array<InputMaybe<PoliticasDePrivacidadFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PoliticasDePrivacidadFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
  textPrivacidad_contains?: InputMaybe<Scalars['String']['input']>;
  textPrivacidad_exists?: InputMaybe<Scalars['Boolean']['input']>;
  textPrivacidad_not_contains?: InputMaybe<Scalars['String']['input']>;
  titlePrivacidad?: InputMaybe<Scalars['String']['input']>;
  titlePrivacidad_contains?: InputMaybe<Scalars['String']['input']>;
  titlePrivacidad_exists?: InputMaybe<Scalars['Boolean']['input']>;
  titlePrivacidad_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  titlePrivacidad_not?: InputMaybe<Scalars['String']['input']>;
  titlePrivacidad_not_contains?: InputMaybe<Scalars['String']['input']>;
  titlePrivacidad_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export enum PoliticasDePrivacidadOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitlePrivacidadAsc = 'titlePrivacidad_ASC',
  TitlePrivacidadDesc = 'titlePrivacidad_DESC'
}

export type PoliticasDeUsoFilter = {
  AND?: InputMaybe<Array<InputMaybe<PoliticasDeUsoFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PoliticasDeUsoFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
  textUso_contains?: InputMaybe<Scalars['String']['input']>;
  textUso_exists?: InputMaybe<Scalars['Boolean']['input']>;
  textUso_not_contains?: InputMaybe<Scalars['String']['input']>;
  titleUso?: InputMaybe<Scalars['String']['input']>;
  titleUso_contains?: InputMaybe<Scalars['String']['input']>;
  titleUso_exists?: InputMaybe<Scalars['Boolean']['input']>;
  titleUso_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  titleUso_not?: InputMaybe<Scalars['String']['input']>;
  titleUso_not_contains?: InputMaybe<Scalars['String']['input']>;
  titleUso_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export enum PoliticasDeUsoOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleUsoAsc = 'titleUso_ASC',
  TitleUsoDesc = 'titleUso_DESC'
}

export type SeoEspaciosFilter = {
  AND?: InputMaybe<Array<InputMaybe<SeoEspaciosFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SeoEspaciosFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  keywords?: InputMaybe<Scalars['String']['input']>;
  keywords_contains?: InputMaybe<Scalars['String']['input']>;
  keywords_exists?: InputMaybe<Scalars['Boolean']['input']>;
  keywords_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  keywords_not?: InputMaybe<Scalars['String']['input']>;
  keywords_not_contains?: InputMaybe<Scalars['String']['input']>;
  keywords_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  openGraphDescription?: InputMaybe<Scalars['String']['input']>;
  openGraphDescription_contains?: InputMaybe<Scalars['String']['input']>;
  openGraphDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  openGraphDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  openGraphDescription_not?: InputMaybe<Scalars['String']['input']>;
  openGraphDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  openGraphDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  openGraphImages_exists?: InputMaybe<Scalars['Boolean']['input']>;
  openGraphTitle?: InputMaybe<Scalars['String']['input']>;
  openGraphTitle_contains?: InputMaybe<Scalars['String']['input']>;
  openGraphTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  openGraphTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  openGraphTitle_not?: InputMaybe<Scalars['String']['input']>;
  openGraphTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  openGraphTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  twitterCard?: InputMaybe<Scalars['String']['input']>;
  twitterCard_contains?: InputMaybe<Scalars['String']['input']>;
  twitterCard_exists?: InputMaybe<Scalars['Boolean']['input']>;
  twitterCard_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  twitterCard_not?: InputMaybe<Scalars['String']['input']>;
  twitterCard_not_contains?: InputMaybe<Scalars['String']['input']>;
  twitterCard_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  twitterDescription?: InputMaybe<Scalars['String']['input']>;
  twitterDescription_contains?: InputMaybe<Scalars['String']['input']>;
  twitterDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  twitterDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  twitterDescription_not?: InputMaybe<Scalars['String']['input']>;
  twitterDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  twitterDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  twitterImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  twitterTitle?: InputMaybe<Scalars['String']['input']>;
  twitterTitle_contains?: InputMaybe<Scalars['String']['input']>;
  twitterTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  twitterTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  twitterTitle_not?: InputMaybe<Scalars['String']['input']>;
  twitterTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  twitterTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export enum SeoEspaciosOrder {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  KeywordsAsc = 'keywords_ASC',
  KeywordsDesc = 'keywords_DESC',
  OpenGraphDescriptionAsc = 'openGraphDescription_ASC',
  OpenGraphDescriptionDesc = 'openGraphDescription_DESC',
  OpenGraphTitleAsc = 'openGraphTitle_ASC',
  OpenGraphTitleDesc = 'openGraphTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TwitterCardAsc = 'twitterCard_ASC',
  TwitterCardDesc = 'twitterCard_DESC',
  TwitterDescriptionAsc = 'twitterDescription_ASC',
  TwitterDescriptionDesc = 'twitterDescription_DESC',
  TwitterTitleAsc = 'twitterTitle_ASC',
  TwitterTitleDesc = 'twitterTitle_DESC'
}

export type SeoEstandarFilter = {
  AND?: InputMaybe<Array<InputMaybe<SeoEstandarFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SeoEstandarFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  keywords?: InputMaybe<Scalars['String']['input']>;
  keywords_contains?: InputMaybe<Scalars['String']['input']>;
  keywords_exists?: InputMaybe<Scalars['Boolean']['input']>;
  keywords_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  keywords_not?: InputMaybe<Scalars['String']['input']>;
  keywords_not_contains?: InputMaybe<Scalars['String']['input']>;
  keywords_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  openGraphDescription?: InputMaybe<Scalars['String']['input']>;
  openGraphDescription_contains?: InputMaybe<Scalars['String']['input']>;
  openGraphDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  openGraphDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  openGraphDescription_not?: InputMaybe<Scalars['String']['input']>;
  openGraphDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  openGraphDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  openGraphImages_exists?: InputMaybe<Scalars['Boolean']['input']>;
  openGraphTitle?: InputMaybe<Scalars['String']['input']>;
  openGraphTitle_contains?: InputMaybe<Scalars['String']['input']>;
  openGraphTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  openGraphTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  openGraphTitle_not?: InputMaybe<Scalars['String']['input']>;
  openGraphTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  openGraphTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  twitterCard?: InputMaybe<Scalars['String']['input']>;
  twitterCard_contains?: InputMaybe<Scalars['String']['input']>;
  twitterCard_exists?: InputMaybe<Scalars['Boolean']['input']>;
  twitterCard_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  twitterCard_not?: InputMaybe<Scalars['String']['input']>;
  twitterCard_not_contains?: InputMaybe<Scalars['String']['input']>;
  twitterCard_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  twitterDescription?: InputMaybe<Scalars['String']['input']>;
  twitterDescription_contains?: InputMaybe<Scalars['String']['input']>;
  twitterDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  twitterDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  twitterDescription_not?: InputMaybe<Scalars['String']['input']>;
  twitterDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  twitterDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  twitterImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  twitterTitle?: InputMaybe<Scalars['String']['input']>;
  twitterTitle_contains?: InputMaybe<Scalars['String']['input']>;
  twitterTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  twitterTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  twitterTitle_not?: InputMaybe<Scalars['String']['input']>;
  twitterTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  twitterTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export enum SeoEstandarOrder {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  KeywordsAsc = 'keywords_ASC',
  KeywordsDesc = 'keywords_DESC',
  OpenGraphDescriptionAsc = 'openGraphDescription_ASC',
  OpenGraphDescriptionDesc = 'openGraphDescription_DESC',
  OpenGraphTitleAsc = 'openGraphTitle_ASC',
  OpenGraphTitleDesc = 'openGraphTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TwitterCardAsc = 'twitterCard_ASC',
  TwitterCardDesc = 'twitterCard_DESC',
  TwitterDescriptionAsc = 'twitterDescription_ASC',
  TwitterDescriptionDesc = 'twitterDescription_DESC',
  TwitterTitleAsc = 'twitterTitle_ASC',
  TwitterTitleDesc = 'twitterTitle_DESC'
}

export type SeoExperienciasFilter = {
  AND?: InputMaybe<Array<InputMaybe<SeoExperienciasFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SeoExperienciasFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  keywords?: InputMaybe<Scalars['String']['input']>;
  keywords_contains?: InputMaybe<Scalars['String']['input']>;
  keywords_exists?: InputMaybe<Scalars['Boolean']['input']>;
  keywords_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  keywords_not?: InputMaybe<Scalars['String']['input']>;
  keywords_not_contains?: InputMaybe<Scalars['String']['input']>;
  keywords_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  openGraphDescription?: InputMaybe<Scalars['String']['input']>;
  openGraphDescription_contains?: InputMaybe<Scalars['String']['input']>;
  openGraphDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  openGraphDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  openGraphDescription_not?: InputMaybe<Scalars['String']['input']>;
  openGraphDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  openGraphDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  openGraphImages_exists?: InputMaybe<Scalars['Boolean']['input']>;
  openGraphTitle?: InputMaybe<Scalars['String']['input']>;
  openGraphTitle_contains?: InputMaybe<Scalars['String']['input']>;
  openGraphTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  openGraphTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  openGraphTitle_not?: InputMaybe<Scalars['String']['input']>;
  openGraphTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  openGraphTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  twitterCard?: InputMaybe<Scalars['String']['input']>;
  twitterCard_contains?: InputMaybe<Scalars['String']['input']>;
  twitterCard_exists?: InputMaybe<Scalars['Boolean']['input']>;
  twitterCard_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  twitterCard_not?: InputMaybe<Scalars['String']['input']>;
  twitterCard_not_contains?: InputMaybe<Scalars['String']['input']>;
  twitterCard_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  twitterDescription?: InputMaybe<Scalars['String']['input']>;
  twitterDescription_contains?: InputMaybe<Scalars['String']['input']>;
  twitterDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  twitterDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  twitterDescription_not?: InputMaybe<Scalars['String']['input']>;
  twitterDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  twitterDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  twitterImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  twitterTitle?: InputMaybe<Scalars['String']['input']>;
  twitterTitle_contains?: InputMaybe<Scalars['String']['input']>;
  twitterTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  twitterTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  twitterTitle_not?: InputMaybe<Scalars['String']['input']>;
  twitterTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  twitterTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export enum SeoExperienciasOrder {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  KeywordsAsc = 'keywords_ASC',
  KeywordsDesc = 'keywords_DESC',
  OpenGraphDescriptionAsc = 'openGraphDescription_ASC',
  OpenGraphDescriptionDesc = 'openGraphDescription_DESC',
  OpenGraphTitleAsc = 'openGraphTitle_ASC',
  OpenGraphTitleDesc = 'openGraphTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TwitterCardAsc = 'twitterCard_ASC',
  TwitterCardDesc = 'twitterCard_DESC',
  TwitterDescriptionAsc = 'twitterDescription_ASC',
  TwitterDescriptionDesc = 'twitterDescription_DESC',
  TwitterTitleAsc = 'twitterTitle_ASC',
  TwitterTitleDesc = 'twitterTitle_DESC'
}

export type SeoFilter = {
  AND?: InputMaybe<Array<InputMaybe<SeoFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SeoFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  openGraphImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SeoHabitacionesFilter = {
  AND?: InputMaybe<Array<InputMaybe<SeoHabitacionesFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SeoHabitacionesFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  keywords?: InputMaybe<Scalars['String']['input']>;
  keywords_contains?: InputMaybe<Scalars['String']['input']>;
  keywords_exists?: InputMaybe<Scalars['Boolean']['input']>;
  keywords_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  keywords_not?: InputMaybe<Scalars['String']['input']>;
  keywords_not_contains?: InputMaybe<Scalars['String']['input']>;
  keywords_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  openGraphDescription?: InputMaybe<Scalars['String']['input']>;
  openGraphDescription_contains?: InputMaybe<Scalars['String']['input']>;
  openGraphDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  openGraphDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  openGraphDescription_not?: InputMaybe<Scalars['String']['input']>;
  openGraphDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  openGraphDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  openGraphImages_exists?: InputMaybe<Scalars['Boolean']['input']>;
  openGraphTitle?: InputMaybe<Scalars['String']['input']>;
  openGraphTitle_contains?: InputMaybe<Scalars['String']['input']>;
  openGraphTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  openGraphTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  openGraphTitle_not?: InputMaybe<Scalars['String']['input']>;
  openGraphTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  openGraphTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  twitterCard?: InputMaybe<Scalars['String']['input']>;
  twitterCard_contains?: InputMaybe<Scalars['String']['input']>;
  twitterCard_exists?: InputMaybe<Scalars['Boolean']['input']>;
  twitterCard_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  twitterCard_not?: InputMaybe<Scalars['String']['input']>;
  twitterCard_not_contains?: InputMaybe<Scalars['String']['input']>;
  twitterCard_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  twitterDescription?: InputMaybe<Scalars['String']['input']>;
  twitterDescription_contains?: InputMaybe<Scalars['String']['input']>;
  twitterDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  twitterDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  twitterDescription_not?: InputMaybe<Scalars['String']['input']>;
  twitterDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  twitterDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  twitterImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  twitterTitle?: InputMaybe<Scalars['String']['input']>;
  twitterTitle_contains?: InputMaybe<Scalars['String']['input']>;
  twitterTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  twitterTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  twitterTitle_not?: InputMaybe<Scalars['String']['input']>;
  twitterTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  twitterTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export enum SeoHabitacionesOrder {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  KeywordsAsc = 'keywords_ASC',
  KeywordsDesc = 'keywords_DESC',
  OpenGraphDescriptionAsc = 'openGraphDescription_ASC',
  OpenGraphDescriptionDesc = 'openGraphDescription_DESC',
  OpenGraphTitleAsc = 'openGraphTitle_ASC',
  OpenGraphTitleDesc = 'openGraphTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TwitterCardAsc = 'twitterCard_ASC',
  TwitterCardDesc = 'twitterCard_DESC',
  TwitterDescriptionAsc = 'twitterDescription_ASC',
  TwitterDescriptionDesc = 'twitterDescription_DESC',
  TwitterTitleAsc = 'twitterTitle_ASC',
  TwitterTitleDesc = 'twitterTitle_DESC'
}

export enum SeoLinkingCollectionsAlliesCollectionOrder {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum SeoOrder {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type SeoSuiteFilter = {
  AND?: InputMaybe<Array<InputMaybe<SeoSuiteFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SeoSuiteFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  keywords?: InputMaybe<Scalars['String']['input']>;
  keywords_contains?: InputMaybe<Scalars['String']['input']>;
  keywords_exists?: InputMaybe<Scalars['Boolean']['input']>;
  keywords_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  keywords_not?: InputMaybe<Scalars['String']['input']>;
  keywords_not_contains?: InputMaybe<Scalars['String']['input']>;
  keywords_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  openGraphDescription?: InputMaybe<Scalars['String']['input']>;
  openGraphDescription_contains?: InputMaybe<Scalars['String']['input']>;
  openGraphDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  openGraphDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  openGraphDescription_not?: InputMaybe<Scalars['String']['input']>;
  openGraphDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  openGraphDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  openGraphImages_exists?: InputMaybe<Scalars['Boolean']['input']>;
  openGraphTitle?: InputMaybe<Scalars['String']['input']>;
  openGraphTitle_contains?: InputMaybe<Scalars['String']['input']>;
  openGraphTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  openGraphTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  openGraphTitle_not?: InputMaybe<Scalars['String']['input']>;
  openGraphTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  openGraphTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  twitterCard?: InputMaybe<Scalars['String']['input']>;
  twitterCard_contains?: InputMaybe<Scalars['String']['input']>;
  twitterCard_exists?: InputMaybe<Scalars['Boolean']['input']>;
  twitterCard_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  twitterCard_not?: InputMaybe<Scalars['String']['input']>;
  twitterCard_not_contains?: InputMaybe<Scalars['String']['input']>;
  twitterCard_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  twitterDescription?: InputMaybe<Scalars['String']['input']>;
  twitterDescription_contains?: InputMaybe<Scalars['String']['input']>;
  twitterDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  twitterDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  twitterDescription_not?: InputMaybe<Scalars['String']['input']>;
  twitterDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  twitterDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  twitterImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  twitterTitle?: InputMaybe<Scalars['String']['input']>;
  twitterTitle_contains?: InputMaybe<Scalars['String']['input']>;
  twitterTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  twitterTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  twitterTitle_not?: InputMaybe<Scalars['String']['input']>;
  twitterTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  twitterTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export enum SeoSuiteOrder {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  KeywordsAsc = 'keywords_ASC',
  KeywordsDesc = 'keywords_DESC',
  OpenGraphDescriptionAsc = 'openGraphDescription_ASC',
  OpenGraphDescriptionDesc = 'openGraphDescription_DESC',
  OpenGraphTitleAsc = 'openGraphTitle_ASC',
  OpenGraphTitleDesc = 'openGraphTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TwitterCardAsc = 'twitterCard_ASC',
  TwitterCardDesc = 'twitterCard_DESC',
  TwitterDescriptionAsc = 'twitterDescription_ASC',
  TwitterDescriptionDesc = 'twitterDescription_DESC',
  TwitterTitleAsc = 'twitterTitle_ASC',
  TwitterTitleDesc = 'twitterTitle_DESC'
}

export type SeoSuperiorFilter = {
  AND?: InputMaybe<Array<InputMaybe<SeoSuperiorFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SeoSuperiorFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  keywords?: InputMaybe<Scalars['String']['input']>;
  keywords_contains?: InputMaybe<Scalars['String']['input']>;
  keywords_exists?: InputMaybe<Scalars['Boolean']['input']>;
  keywords_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  keywords_not?: InputMaybe<Scalars['String']['input']>;
  keywords_not_contains?: InputMaybe<Scalars['String']['input']>;
  keywords_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  openGraphDescription?: InputMaybe<Scalars['String']['input']>;
  openGraphDescription_contains?: InputMaybe<Scalars['String']['input']>;
  openGraphDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  openGraphDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  openGraphDescription_not?: InputMaybe<Scalars['String']['input']>;
  openGraphDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  openGraphDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  openGraphImages_exists?: InputMaybe<Scalars['Boolean']['input']>;
  openGraphTitle?: InputMaybe<Scalars['String']['input']>;
  openGraphTitle_contains?: InputMaybe<Scalars['String']['input']>;
  openGraphTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  openGraphTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  openGraphTitle_not?: InputMaybe<Scalars['String']['input']>;
  openGraphTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  openGraphTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  twitterCard?: InputMaybe<Scalars['String']['input']>;
  twitterCard_contains?: InputMaybe<Scalars['String']['input']>;
  twitterCard_exists?: InputMaybe<Scalars['Boolean']['input']>;
  twitterCard_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  twitterCard_not?: InputMaybe<Scalars['String']['input']>;
  twitterCard_not_contains?: InputMaybe<Scalars['String']['input']>;
  twitterCard_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  twitterDescription?: InputMaybe<Scalars['String']['input']>;
  twitterDescription_contains?: InputMaybe<Scalars['String']['input']>;
  twitterDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  twitterDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  twitterDescription_not?: InputMaybe<Scalars['String']['input']>;
  twitterDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  twitterDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  twitterImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  twitterTitle?: InputMaybe<Scalars['String']['input']>;
  twitterTitle_contains?: InputMaybe<Scalars['String']['input']>;
  twitterTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  twitterTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  twitterTitle_not?: InputMaybe<Scalars['String']['input']>;
  twitterTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  twitterTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export enum SeoSuperiorOrder {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  KeywordsAsc = 'keywords_ASC',
  KeywordsDesc = 'keywords_DESC',
  OpenGraphDescriptionAsc = 'openGraphDescription_ASC',
  OpenGraphDescriptionDesc = 'openGraphDescription_DESC',
  OpenGraphTitleAsc = 'openGraphTitle_ASC',
  OpenGraphTitleDesc = 'openGraphTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TwitterCardAsc = 'twitterCard_ASC',
  TwitterCardDesc = 'twitterCard_DESC',
  TwitterDescriptionAsc = 'twitterDescription_ASC',
  TwitterDescriptionDesc = 'twitterDescription_DESC',
  TwitterTitleAsc = 'twitterTitle_ASC',
  TwitterTitleDesc = 'twitterTitle_DESC'
}

export type SysFilter = {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_exists?: InputMaybe<Scalars['Boolean']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedVersion?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedVersion_gt?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_gte?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  publishedVersion_lt?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_lte?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

export type CfAllyNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfAllyNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfAllyNestedFilter>>>;
  address?: InputMaybe<Scalars['String']['input']>;
  address_contains?: InputMaybe<Scalars['String']['input']>;
  address_exists?: InputMaybe<Scalars['Boolean']['input']>;
  address_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  address_not?: InputMaybe<Scalars['String']['input']>;
  address_not_contains?: InputMaybe<Scalars['String']['input']>;
  address_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  characteristics_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  characteristics_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  characteristics_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  characteristics_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  location_exists?: InputMaybe<Scalars['Boolean']['input']>;
  location_within_circle?: InputMaybe<Scalars['Circle']['input']>;
  location_within_rectangle?: InputMaybe<Scalars['Rectangle']['input']>;
  logo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  phone?: InputMaybe<Scalars['String']['input']>;
  phone_contains?: InputMaybe<Scalars['String']['input']>;
  phone_exists?: InputMaybe<Scalars['Boolean']['input']>;
  phone_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  phone_not?: InputMaybe<Scalars['String']['input']>;
  phone_not_contains?: InputMaybe<Scalars['String']['input']>;
  phone_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  text1?: InputMaybe<Scalars['String']['input']>;
  text1_contains?: InputMaybe<Scalars['String']['input']>;
  text1_exists?: InputMaybe<Scalars['Boolean']['input']>;
  text1_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  text1_not?: InputMaybe<Scalars['String']['input']>;
  text1_not_contains?: InputMaybe<Scalars['String']['input']>;
  text1_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  text2?: InputMaybe<Scalars['String']['input']>;
  text2_contains?: InputMaybe<Scalars['String']['input']>;
  text2_exists?: InputMaybe<Scalars['Boolean']['input']>;
  text2_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  text2_not?: InputMaybe<Scalars['String']['input']>;
  text2_not_contains?: InputMaybe<Scalars['String']['input']>;
  text2_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Scalars['String']['input']>;
  type_contains?: InputMaybe<Scalars['String']['input']>;
  type_exists?: InputMaybe<Scalars['Boolean']['input']>;
  type_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type_not?: InputMaybe<Scalars['String']['input']>;
  type_not_contains?: InputMaybe<Scalars['String']['input']>;
  type_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfSeoNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfSeoNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfSeoNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  openGraphImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type AlliancesDataQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['String']['input']>;
}>;


export type AlliancesDataQuery = { __typename?: 'Query', alliesCollection?: { __typename?: 'AlliesCollection', items: Array<{ __typename?: 'Allies', description?: string | null, image?: { __typename?: 'Asset', url?: string | null } | null, alliesCollection?: { __typename?: 'AlliesAlliesCollection', items: Array<{ __typename?: 'Ally', name?: string | null, text1?: string | null, text2?: string | null, phone?: string | null, address?: string | null, characteristics?: Array<string | null> | null, type?: string | null, sys: { __typename?: 'Sys', id: string }, logo?: { __typename?: 'Asset', url?: string | null } | null, image?: { __typename?: 'Asset', url?: string | null } | null, location?: { __typename?: 'Location', lat?: number | null, lon?: number | null } | null } | null> } | null } | null> } | null };

export type AlliancesSeoQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['String']['input']>;
}>;


export type AlliancesSeoQuery = { __typename?: 'Query', alliesCollection?: { __typename?: 'AlliesCollection', items: Array<{ __typename?: 'Allies', seo?: { __typename?: 'Seo', title?: string | null, description?: string | null, openGraphImage?: { __typename?: 'Asset', url?: string | null } | null } | null } | null> } | null };


export const AlliancesDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AlliancesData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alliesCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"alliesCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"logo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"text1"}},{"kind":"Field","name":{"kind":"Name","value":"text2"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"characteristics"}},{"kind":"Field","name":{"kind":"Name","value":"location"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lat"}},{"kind":"Field","name":{"kind":"Name","value":"lon"}}]}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<AlliancesDataQuery, AlliancesDataQueryVariables>;
export const AlliancesSeoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AlliancesSeo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alliesCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"seo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"openGraphImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<AlliancesSeoQuery, AlliancesSeoQueryVariables>;