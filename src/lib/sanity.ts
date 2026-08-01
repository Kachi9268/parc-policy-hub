import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

/**
 * Read-only Sanity client for the PARC website.
 * Content is not wired into pages yet — this exists so pages can be
 * migrated to the CMS one at a time.
 */
export const sanityClient = createClient({
  projectId: "hcli3lb3",
  dataset: "production",
  apiVersion: "2026-01-01",
  useCdn: true,
});

const builder = imageUrlBuilder(sanityClient);

type SanityImageSource = Parameters<typeof builder.image>[0];

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

export const queries = {
  homepageSettings: `*[_type == "homepageSettings"][0]`,
  siteSettings: `*[_type == "siteSettings"][0]`,
  publishedPosts: `*[_type == "post" && status == "published"] | order(publishDate desc){
    _id, title, slug, excerpt, publishDate, featuredImage, featuredImageCaption, featured,
    "category": category->title, "author": author->{name, position, photo}
  }`,
  postBySlug: `*[_type == "post" && slug.current == $slug && status == "published"][0]{
    _id, title, slug, excerpt, body, publishDate, featuredImage, featuredImageCaption,
    seoTitle, seoDescription, "category": category->title, "author": author->{name, position, photo, bio}
  }`,
  categories: `*[_type == "category"] | order(title asc){ _id, title, slug }`,
  gallery: `*[_type == "galleryImage"] | order(date desc){ _id, image, caption, category, date, alt }`,
  leadership: `*[_type == "leader"] | order(displayOrder asc){ _id, name, position, bio, portrait, featured }`,
  achievements: `*[_type == "achievement"] | order(year desc){ _id, year, title, description, featuredImage, externalLink }`,
  activities: `*[_type == "activity"] | order(date desc){ _id, name, description, date, images, status }`,
};
