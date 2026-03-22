import type { ImageMetadata } from "astro";
import Aura from "../assets/newsletter/Aura.png";
import FacebookLogo from "../assets/newsletter/FacebookLogo.png";
import HowMentalDark from "../assets/newsletter/HowMentalDark.jpg";
import HowMentalLight from "../assets/newsletter/HowMentalLight.png";
import Instagram from "../assets/newsletter/Instagram.jpg";
import InstagramLogo from "../assets/newsletter/InstagramLogo.png";
import LinkedInLogo from "../assets/newsletter/LinkedInLogo.png";
import MentalBeanie from "../assets/newsletter/MentalBeanie.png";
import MentalCap from "../assets/newsletter/MentalCap.png";
import MentalInstas from "../assets/newsletter/MentalInstas.png";
import MentalMovement from "../assets/newsletter/MentalMovement.png";
import MentalTips from "../assets/newsletter/MentalTips.png";
import MentalTools from "../assets/newsletter/MentalTools.png";
import MentalTweets from "../assets/newsletter/MentalTweets.png";
import PinterestLogo from "../assets/newsletter/PinterestLogo.png";
import Twitter from "../assets/newsletter/Twitter.jpg";
import TwitterLogo from "../assets/newsletter/TwitterLogo.png";

export interface NewsletterLink {
  href: string;
  label: string;
  className: string;
}

export interface NewsletterMediaSectionData {
  backgroundClass: string;
  headerImage: ImageMetadata;
  headerAlt: string;
  previewImage: ImageMetadata;
  previewAlt: string;
  previewHref: string;
  body: string;
  cta: NewsletterLink;
}

interface NewsletterProductLink {
  href: string;
  image: ImageMetadata;
  alt: string;
}

export interface NewsletterSocialLink {
  href: string;
  icon: ImageMetadata;
  alt: string;
}

export const newsletterBackPath = "/how-mental-newsletter";

export const newsletterAssets = {
  aura: Aura,
  howMentalDark: HowMentalDark,
  howMentalLight: HowMentalLight,
  mentalBeanie: MentalBeanie,
  mentalCap: MentalCap,
  mentalMovement: MentalMovement,
  mentalTips: MentalTips,
  mentalTools: MentalTools,
} as const;

export const tipsLink: NewsletterLink = {
  href: "https://www.howmental.com/discover",
  label: "Find more Tips",
  className:
    "mx-auto block w-48 rounded bg-[#46D71F] py-3 font-bold text-white",
};

export const instagramSection: NewsletterMediaSectionData = {
  backgroundClass: "bg-[#FEE9FE]",
  headerImage: MentalInstas,
  headerAlt: "Mental Instas",
  previewImage: Instagram,
  previewAlt: "Instagram post",
  previewHref: "https://www.instagram.com/p/CcMX14IoV2q/",
  body: `Setting boundaries has NEVER been my strong point, in friendships, in relationships, with anyone tbh! 🤣 It was one of my friends who brought this up to me actually, and they said I was being a bit of “pushover”. And I couldn't disagree with them, at all, because it was true 😬 I'd rather let someone cross the line than make a big fuss about it and be 'difficult'. But sometimes, we HAVE to be difficult whether we like it or not. Our feelings matter, regardless of what anyone has told us. So darlings, let's set those boundaries and stick to them, ok? 😏`,
  cta: {
    href: "https://www.instagram.com/howmental/",
    label: "See more Instas",
    className:
      "mx-auto block w-48 rounded bg-[#FB00ED] py-3 font-bold text-white",
  },
};

export const twitterSection: NewsletterMediaSectionData = {
  backgroundClass: "bg-[#EDEDFF]",
  headerImage: MentalTweets,
  headerAlt: "Mental Tweets",
  previewImage: Twitter,
  previewAlt: "Twitter post",
  previewHref: "https://twitter.com/howmental_/status/1510663859266281474",
  body: `It's an all-too-familiar scene... my friend's just told me something very personal to them, something that's reaaally hard for them to talk about, and I'm struggling to say anything in response 😬 It's the WORST fucking feeling everrrrrrr. I want to be supportive. I want my friend to know that I'm there, I'm listening, I care, but - I just don't know how. And that's where these phrases come in handy! They help, a lot. Just imagine hearing some of the top 3 after telling your bestie something that's been on your mind for WEEKS... now compare it to the bottom 3. Much kinder, and healthier, right? 💁‍♀️ So let's be more mindful of the words we use when we're listening to the people we love, we want them to feel our full support, so let's work that vocab honey! 💪😘`,
  cta: {
    href: "https://twitter.com/howmental_",
    label: "See more Tweets",
    className:
      "mx-auto block w-48 rounded bg-[#1A00FF] py-3 font-bold text-white",
  },
};

export const movementProducts: NewsletterProductLink[] = [
  {
    href: "https://www.howmental.com/product/emblem-cap",
    image: MentalCap,
    alt: "Mental Cap",
  },
  {
    href: "https://www.howmental.com/product/the-mental-beanie",
    image: MentalBeanie,
    alt: "Mental Beanie",
  },
];

export const movementLink: NewsletterLink = {
  href: "https://www.howmental.com/represent",
  label: "Represent the Movement",
  className:
    "mx-auto block w-64 rounded bg-[#FDB21C] py-3 font-bold text-white",
};

export const auraLink: NewsletterLink = {
  href: "https://www.howmental.com/item/aura",
  label: "Check out Aura",
  className:
    "mx-auto block w-48 rounded bg-[#FB00AB] py-3 font-bold text-white",
};

export const toolsLink: NewsletterLink = {
  href: "https://www.howmental.com/all/apps-products",
  label: "Find more tools",
  className: "mx-auto block w-48 rounded bg-black py-3 font-bold text-white",
};

export const newsletterSocialLinks: NewsletterSocialLink[] = [
  {
    href: "https://www.facebook.com/howmental",
    icon: FacebookLogo,
    alt: "Facebook logo",
  },
  {
    href: "https://twitter.com/howmental_",
    icon: TwitterLogo,
    alt: "Twitter logo",
  },
  {
    href: "https://www.instagram.com/howmental/",
    icon: InstagramLogo,
    alt: "Instagram logo",
  },
  {
    href: "https://www.linkedin.com/company/howmental",
    icon: LinkedInLogo,
    alt: "LinkedIn logo",
  },
  {
    href: "https://www.pinterest.co.uk/howmental/",
    icon: PinterestLogo,
    alt: "Pinterest logo",
  },
];
