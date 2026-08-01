import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "organizationName", title: "Organization Name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "motto", title: "Motto", type: "string" }),
    defineField({ name: "contactEmail", title: "Contact Email", type: "string" }),
    defineField({ name: "phoneNumber", title: "Phone Number", type: "string" }),
    defineField({ name: "address", title: "Address", type: "text", rows: 3 }),
    defineField({
      name: "socialLinks",
      title: "Social Media Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "platform", title: "Platform", type: "string" }),
            defineField({ name: "url", title: "URL", type: "url" }),
          ],
          preview: { select: { title: "platform", subtitle: "url" } },
        },
      ],
    }),
    defineField({ name: "footerCopyright", title: "Footer Copyright", type: "string" }),
    defineField({ name: "logo", title: "Logo", type: "image" }),
    defineField({ name: "favicon", title: "Favicon", type: "image" }),
  ],
  preview: { select: { title: "organizationName" }, prepare: ({ title }) => ({ title: "Site Settings", subtitle: title }) },
});
