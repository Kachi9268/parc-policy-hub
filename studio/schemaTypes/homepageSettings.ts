import { defineField, defineType } from "sanity";

export const homepageSettings = defineType({
  name: "homepageSettings",
  title: "Homepage Settings",
  type: "document",
  fields: [
    defineField({ name: "heroTitle", title: "Hero Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "heroSubtitle", title: "Hero Subtitle", type: "string" }),
    defineField({ name: "heroDescription", title: "Hero Description", type: "text", rows: 4 }),
    defineField({ name: "motto", title: "Motto", type: "string" }),
    defineField({ name: "visionStatement", title: "Vision Statement", type: "text", rows: 6 }),
    defineField({ name: "missionStatement", title: "Mission Statement", type: "text", rows: 6 }),
    defineField({
      name: "featuredImages",
      title: "Featured Homepage Images",
      type: "array",
      of: [{ type: "image", options: { hotspot: true }, fields: [{ name: "alt", title: "Alt Text", type: "string" }] }],
    }),
    defineField({ name: "seoTitle", title: "Homepage SEO Title", type: "string", validation: (r) => r.max(60) }),
    defineField({ name: "seoDescription", title: "Homepage SEO Description", type: "text", rows: 3, validation: (r) => r.max(160) }),
  ],
  preview: { select: { title: "heroTitle" }, prepare: ({ title }) => ({ title: "Homepage Settings", subtitle: title }) },
});
