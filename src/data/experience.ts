export type ExperienceSlug =
  | "how-mental-on-instagram"
  | "how-mental-on-twitter"
  | "how-mental-newsletter"
  | "community-management-for-playstark";

export type ExperiencePart =
  | { type: "text"; value: string }
  | { type: "link"; href: string; label: string; external?: boolean };

export type ExperienceBlock =
  | { type: "bubble"; parts: ExperiencePart[] }
  | { type: "spacer" }
  | { type: "back-link" };

export interface Experience {
  slug: ExperienceSlug;
  title: string;
  description: string;
  heading: string;
  order: number;
  blocks: ExperienceBlock[];
}

const spacer: ExperienceBlock = { type: "spacer" };
const backLink: ExperienceBlock = { type: "back-link" };
const text = (value: string): ExperiencePart => ({ type: "text", value });
const link = (
  href: string,
  label: string,
  external = false,
): ExperiencePart => ({
  type: "link",
  href,
  label,
  external,
});
const bubble = (...parts: ExperiencePart[]): ExperienceBlock => ({
  type: "bubble",
  parts,
});

export const experiences: Experience[] = [
  {
    slug: "how-mental-on-instagram",
    title: "How Mental on Instagram - Sebastian Bogdan",
    description:
      "Sebastian Bogdan boosted How Mental's Instagram, growing followers from 700k to 800k. Discover his content strategy and efficient scheduling.",
    heading: "How Mental on Instagram:",
    order: 1,
    blocks: [
      spacer,
      bubble(
        text(
          "I spent the majority of my time at How Mental working on growing its ",
        ),
        link(
          "https://www.instagram.com/howmental/",
          "Instagram presence",
          true,
        ),
        text("."),
      ),
      bubble(text("The profile started out at 700,000 followers.")),
      bubble(
        text(
          "After I'd finished my work there, it had grown to 800,000 followers.",
        ),
      ),
      spacer,
      bubble(
        text(
          "A large part of my work included sourcing posts and writing captions.",
        ),
      ),
      bubble(
        text(
          "I maintained the brand voice in each sourced post and written caption.",
        ),
      ),
      spacer,
      bubble(
        text(
          "Outside of posts, I created a more efficient system for sourcing, approvals, and scheduling.",
        ),
      ),
      bubble(
        text(
          "With there being more than one intern working on captions and sourcing at any given time, it was important to have a system that was easy to use and understand. This is something I worked on extensively so we could automate as much as possible to divert our resources to other areas.",
        ),
      ),
      backLink,
    ],
  },
  {
    slug: "how-mental-on-twitter",
    title: "How Mental on Twitter - Sebastian Bogdan",
    description:
      "Sebastian Bogdan grew How Mental's Twitter following from 500 to 1,600+ with notable engagement. Explore his journey and key Twitter campaign insights.",
    heading: "How Mental on Twitter:",
    order: 2,
    blocks: [
      spacer,
      bubble(
        text("I spent almost four months working on How Mental's "),
        link("https://twitter.com/howmental_", "Twitter presence", true),
        text("."),
      ),
      bubble(
        text("It started out at 500 followers with little to no engagement."),
      ),
      bubble(
        text(
          "After those few months, the account reached over 1,600 followers, with each post averaging 18-20 engagements.",
        ),
      ),
      bubble(
        text(
          "The most engaged-with post throughout that period achieved over 140 engagements.",
        ),
      ),
      bubble(text("I was posting 3-5 times a day.")),
      spacer,
      bubble(
        text(
          "Running several Twitter campaigns taught me the value of one-to-one interactions and how to optimise posts that convert followers to consumers.",
        ),
      ),
      backLink,
    ],
  },
  {
    slug: "how-mental-newsletter",
    title: "How Mental Newsletter - Sebastian Bogdan",
    description:
      "Sebastian Bogdan mastered Drip email marketing, doubled How Mental's newsletter subscribers to nearly 3,000, and improved content for better engagement.",
    heading: "How Mental Newsletter:",
    order: 3,
    blocks: [
      spacer,
      bubble(
        text("At one point, I was tasked with sending out the "),
        link("/your-mental-moment", "weekly newsletter"),
        text("."),
      ),
      bubble(
        text(
          "I'd never done anything like that before, and, to be honest, it was difficult adjusting to an email marketing platform.",
        ),
      ),
      bubble(
        text(
          "But I got the hang of it eventually: I thought the best way to familarise myself with the interface is to redesign the newsletter. That way, I'd get comprehensive knowledge of each feature available to me, and the newsletter gets a nice facelift.",
        ),
      ),
      bubble(
        text(
          "The newsletter ended up growing from around 1,500 subscribers to almost 3,000 in the short few months that I took over.",
        ),
      ),
      spacer,
      bubble(
        text(
          "I learned to use the email marketing platform Drip, and managed the subscriber list, optimising the newsletter content for the best open rates and click-through rates.",
        ),
      ),
      backLink,
    ],
  },
  {
    slug: "community-management-for-playstark",
    title: "Community Management for Playstark - Sebastian Bogdan",
    description:
      "Explore Sebastian Bogdan's journey from 16-year-old aspiring to skilled community manager, growing Playstark's gaming community with impressive stats.",
    heading: "Community Management for Playstark:",
    order: 4,
    blocks: [
      spacer,
      bubble(
        text("I started my work for "),
        link("https://playstark.com/", "Playstark", true),
        text(" when I was just 16."),
      ),
      bubble(
        text(
          "I was determined to learn and grow rapidly in the role. And that's exactly what I did.",
        ),
      ),
      spacer,
      bubble(
        text(
          "I knew I loved to motivate and engage with people. Especially in the gaming community.",
        ),
      ),
      bubble(
        text(
          "So Playstark took me under their wing and I was able to learn from the best.",
        ),
      ),
      bubble(
        text("Their project, "),
        link(
          "https://www.youtube.com/watch?v=tV8H9CyZ7OM",
          "Agents: Biohunters",
          true,
        ),
        text(
          ", was a work in progress over several years and I was determined to cultivate them an audience.",
        ),
      ),
      spacer,
      bubble(
        text(
          "My work spanned across multiple social media platforms, including Discord, Reddit, Twitter, Instagram, and Facebook.",
        ),
      ),
      bubble(
        text(
          "I was solely responsible for the growth and management of the community. I wrote engaging copy, scheduled and posted content, and interacted with the community.",
        ),
      ),
      spacer,
      bubble(
        text(
          "My work resulted in the following growth statistics within <1yr:",
        ),
      ),
      bubble(text("100 -> 3,000 members on Discord")),
      bubble(text("0 -> 50 members on Reddit")),
      bubble(text("20 -> 400 followers on Twitter")),
      bubble(text("200 -> 1,600 followers on Instagram")),
      bubble(text("2,500 -> 30,000 followers on Facebook")),
      spacer,
      bubble(
        text(
          "I learned valuable project management, time management, social media management, branding, and remote teamworking skills, working for an expert game development studio based in Spain.",
        ),
      ),
      backLink,
    ],
  },
];

export function getOrderedExperiences(): Experience[] {
  return [...experiences].sort((left, right) => left.order - right.order);
}
