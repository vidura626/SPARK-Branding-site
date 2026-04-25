/**
 * Represents a single social media link from the CMS.
 */
export interface SocialMediaLink {
  MUIIcon: string;
  ShortName: string;
  ProfileLink: string;
  SocialMediaName: string;
}

/**
 * Represents the raw contact data structure as returned by the Hygraph API.
 * The `socialMedia` field is an array of structured objects.
 */
export interface CMS_Contact {
  id: string;
  email: string | null;
  mobile: string | null;
  socialMedia: SocialMediaLink[] | null;
}

/**
 * Represents the processed contact data structure.
 * Comma-separated string fields from the CMS are converted into arrays.
 * The `socialMedia` field is carried over.
 */
export interface ContactDetails {
  id: string;
  email: string[];
  mobile: string[];
  socialMedia: SocialMediaLink[];
}