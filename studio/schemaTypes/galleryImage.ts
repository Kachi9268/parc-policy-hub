import { defineField, defineType } from "sanity";

export const GALLERY_CATEGORIES = [
  "Weekly Intellectual Sessions",
  "Research Presentations",
  "Community Outreach",
  "Leadership & Executive Activities",
  "Community & Member Life",
];

export const galleryImage = defineType({
  name: "galleryImage",
  title: "Gallery Image",
  type: "document",
  fields: [
    defineField({ name: "image", title: "Image", type: "image", options: { hotspot: true }, validation: (r) => r.required() }),
    defineField({ name: "caption", title: "Caption", type: "string" }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: { list: GALLERY_CATEGORIES.map((title) => ({ title, value: title })) },
      validation: (r) => r.required(),
    }),
    defineField({ name: "date", title: "Date", type: "date" }),
    defineField({ name: "alt", title: "Alt Text", type: "string", validation: (r) => r.required() }),
  ],
  preview: { select: { title: "caption", subtitle: "category", media: "image" } },
});
