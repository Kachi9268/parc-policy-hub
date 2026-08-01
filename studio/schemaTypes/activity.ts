import { defineField, defineType } from "sanity";

export const activity = defineType({
  name: "activity",
  title: "Activity",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Activity Name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "description", title: "Description", type: "text", rows: 5 }),
    defineField({ name: "date", title: "Date", type: "date" }),
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "image", options: { hotspot: true }, fields: [{ name: "alt", title: "Alt Text", type: "string" }] }],
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: { list: [{ title: "Upcoming", value: "upcoming" }, { title: "Completed", value: "completed" }], layout: "radio" },
      initialValue: "upcoming",
      validation: (r) => r.required(),
    }),
  ],
  preview: { select: { title: "name", subtitle: "status", media: "images.0" } },
});
