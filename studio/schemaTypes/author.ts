import { defineField, defineType } from "sanity";

export const author = defineType({
  name: "author",
  title: "Author",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "position", title: "Position", type: "string" }),
    defineField({ name: "photo", title: "Photo", type: "image", options: { hotspot: true }, fields: [{ name: "alt", title: "Alt Text", type: "string" }] }),
    defineField({ name: "bio", title: "Short Biography", type: "text", rows: 4 }),
  ],
  preview: { select: { title: "name", subtitle: "position", media: "photo" } },
});
