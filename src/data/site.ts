export const siteName = "Sebastian Bogdan";
export const themeColor = "#008282";
export const defaultDescription =
  "Discover Sebastian Bogdan's portfolio as a digital marketer and web developer, specialising in social media, community management, and tech-integrated marketing.";

export const profileLinks = {
  linkedin: "https://www.linkedin.com/in/sbstnbgdn/",
} as const;

export interface PageMetadata {
  title: string;
  description?: string;
  pathname?: string;
  robots?: string;
  includeCanonical?: boolean;
}
