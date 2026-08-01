import { defineField, defineType } from "sanity";

export const leader = defineType({
  name: "leader",
  title: "Leadership",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "position", title: "Position", type: "string", validation: (r) => r.required() }),
    defineField({ name: "bio", title: "Biography", type: "text", rows: 4 }),
    defineField({ name: "portrait", title: "Portrait", type: "image", options: { hotspot: true }, fields: [{ name: "alt", title: "Alt Text", type: "string" }] }),
    defineField({ name: "displayOrder", title: "Display Order", type: "number", initialValue: 100 }),
    defineField({ name: "featured", title: "Featured Leader", type: "boolean", initialValue: false }),
  ],
  orderings: [{ title: "Display Order", name: "displayOrderAsc", by: [{ field: "displayOrder", direction: "asc" }] }],
  preview: { select: { title: "name", subtitle: "position", media: "portrait" } },
});
