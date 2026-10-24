import type { ImageMetadata } from "astro";
import FacebookLogo from "../assets/newsletter/FacebookLogo.png";
import Instagram from "../assets/newsletter/Instagram.jpg";
import InstagramLogo from "../assets/newsletter/InstagramLogo.png";
import LinkedInLogo from "../assets/newsletter/LinkedInLogo.png";
import MentalBeanie from "../assets/newsletter/MentalBeanie.png";
import MentalCap from "../assets/newsletter/MentalCap.png";
import MentalInstas from "../assets/newsletter/MentalInstas.png";
import MentalTweets from "../assets/newsletter/MentalTweets.png";
import PinterestLogo from "../assets/newsletter/PinterestLogo.png";
import Twitter from "../assets/newsletter/Twitter.jpg";
import TwitterLogo from "../assets/newsletter/TwitterLogo.png";

export interface Link {
  href: string;
  label: string;
  width: string;
  background: string;
}

export interface Post {
  background: string;
  header: ImageMetadata;
  headerAlt: string;
  image: ImageMetadata;
  imageAlt: string;
  href: string;
  body: string;
  cta: Link;
}

export const links = {
  tips: {
    href: "https://www.howmental.com/discover",
    label: "Find more Tips",
    width: "w-48",
    background: "bg-[#46D71F]",
  },
  movement: {
    href: "https://www.howmental.com/represent",
    label: "Represent the Movement",
    width: "w-64",
    background: "bg-[#FDB21C]",
  },
  aura: {
    href: "https://www.howmental.com/item/aura",
    label: "Check out Aura",
    width: "w-48",
    background: "bg-[#FB00AB]",
  },
  tools: {
    href: "https://www.howmental.com/all/apps-products",
    label: "Find more tools",
    width: "w-48",
    background: "bg-black",
  },
} satisfies Record<string, Link>;

export const instagram: Post = {
  background: "bg-[#FEE9FE]",
  header: MentalInstas,
  headerAlt: "Mental Instas",
  image: Instagram,
  imageAlt: "Instagram post",
  href: "https://www.instagram.com/p/CcMX14IoV2q/",
  body: `Setting boundaries has NEVER been my strong point, in friendships, in relationships, with anyone tbh! 🤣 It was one of my friends who brought this up to me actually, and they said I was being a bit of “pushover”. And I couldn't disagree with them, at all, because it was true 😬 I'd rather let someone cross the line than make a big fuss about it and be 'difficult'. But sometimes, we HAVE to be difficult whether we like it or not. Our feelings matter, regardless of what anyone has told us. So darlings, let's set those boundaries and stick to them, ok? 😏`,
  cta: {
    href: "https://www.instagram.com/howmental/",
    label: "See more Instas",
    width: "w-48",
    background: "bg-[#FB00ED]",
  },
};

export const twitter: Post = {
  background: "bg-[#EDEDFF]",
  header: MentalTweets,
  headerAlt: "Mental Tweets",
  image: Twitter,
  imageAlt: "Twitter post",
  href: "https://twitter.com/howmental_/status/1510663859266281474",
  body: `It's an all-too-familiar scene... my friend's just told me something very personal to them, something that's reaaally hard for them to talk about, and I'm struggling to say anything in response 😬 It's the WORST fucking feeling everrrrrrr. I want to be supportive. I want my friend to know that I'm there, I'm listening, I care, but - I just don't know how. And that's where these phrases come in handy! They help, a lot. Just imagine hearing some of the top 3 after telling your bestie something that's been on your mind for WEEKS... now compare it to the bottom 3. Much kinder, and healthier, right? 💁‍♀️ So let's be more mindful of the words we use when we're listening to the people we love, we want them to feel our full support, so let's work that vocab honey! 💪😘`,
  cta: {
    href: "https://twitter.com/howmental_",
    label: "See more Tweets",
    width: "w-48",
    background: "bg-[#1A00FF]",
  },
};

export const products = [
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

export const socials = [
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
