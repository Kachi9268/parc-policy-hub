export type GalleryAlbum = {
  title: string;
  description: string;
};

export type GalleryImage = {
  src: string;
  event: string;
  alt: string;
};

export const GALLERY_ALBUMS: GalleryAlbum[] = [
  {
    title: "Weekly Intellectual Sessions",
    description:
      "Weekly academic sessions where members present papers, discuss policy issues, ask questions and strengthen critical thinking.",
  },
  {
    title: "Research Presentations",
    description:
      "Original research presentations delivered by members covering economics, public policy and contemporary national and international issues.",
  },
  {
    title: "Community Outreach",
    description:
      "PARC's outreach activities promoting education, mentorship and community engagement, including the Holy Stars Schools outreach programme.",
  },
  {
    title: "Leadership & Executive Activities",
    description:
      "Executive meetings, leadership planning sessions, founder engagements and official executive activities.",
  },
  {
    title: "Community & Member Life",
    description:
      "Group photographs, behind-the-scenes moments and activities that reflect the culture and community of PARC.",
  },
];

const album = (
  event: string,
  prefix: string,
  count: number,
  altBase: string,
): GalleryImage[] =>
  Array.from({ length: count }, (_, i) => ({
    src: `/images/gallery/${prefix}-${String(i + 1).padStart(2, "0")}.jpg`,
    event,
    alt: `${altBase} ${i + 1}`,
  }));

export const GALLERY_IMAGES: GalleryImage[] = [
  ...album("Weekly Intellectual Sessions", "weekly-session", 4, "PARC weekly intellectual session"),
  ...album("Research Presentations", "research-presentation", 4, "PARC research presentation"),
  ...album("Community Outreach", "community-outreach", 4, "PARC community outreach"),
];
