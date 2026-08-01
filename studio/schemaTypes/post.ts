import { defineField, defineType } from "sanity";

export const post = defineType({
  name: "post",
  title: "Blog Post",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title", maxLength: 96 }, validation: (r) => r.required() }),
    defineField({ name: "featuredImage", title: "Featured Image", type: "image", options: { hotspot: true }, fields: [{ name: "alt", title: "Alt Text", type: "string" }] }),
    defineField({ name: "featuredImageCaption", title: "Featured Image Caption", type: "string" }),
    defineField({ name: "category", title: "Category", type: "reference", to: [{ type: "category" }], validation: (r) => r.required() }),
    defineField({ name: "author", title: "Author", type: "reference", to: [{ type: "author" }] }),
    defineField({ name: "publishDate", title: "Publish Date", type: "datetime", initialValue: () => new Date().toISOString() }),
    defineField({ name: "excerpt", title: "Excerpt", type: "text", rows: 3, validation: (r) => r.max(300) }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      of: [
        { type: "block" },
        { type: "image", options: { hotspot: true }, fields: [{ name: "alt", title: "Alt Text", type: "string" }, { name: "caption", title: "Caption", type: "string" }] },
      ],
    }),
    defineField({ name: "featured", title: "Featured Post", type: "boolean", initialValue: false }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: { list: [{ title: "Draft", value: "draft" }, { title: "Published", value: "published" }, { title: "Archived", value: "archived" }], layout: "radio" },
      initialValue: "draft",
      validation: (r) => r.required(),
    }),
    defineField({ name: "seoTitle", title: "SEO Title", type: "string", validation: (r) => r.max(60) }),
    defineField({ name: "seoDescription", title: "SEO Description", type: "text", rows: 3, validation: (r) => r.max(160) }),
  ],
  orderings: [{ title: "Publish Date, newest", name: "publishDateDesc", by: [{ field: "publishDate", direction: "desc" }] }],
  preview: { select: { title: "title", subtitle: "status", media: "featuredImage" } },
});
