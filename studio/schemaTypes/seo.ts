import { defineField, defineType } from "sanity";

export const seo = defineType({
  name: "seo",
  title: "SEO",
  type: "object",
  options: { collapsible: true, collapsed: true },
  fields: [
    defineField({ name: "title", title: "SEO Title", type: "string", validation: (r) => r.max(60) }),
    defineField({ name: "description", title: "SEO Description", type: "text", rows: 3, validation: (r) => r.max(160) }),
  ],
});
