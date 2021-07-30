export default {
  name: "page",
  title: "Page",
  type: "document",
  liveEdit: false,
  // You probably want to uncomment the next line once you've made the pages documents in the Studio. This will remove the pages document type from the create-menus.
  // __experimental_actions: ['update', 'publish', /* 'create', 'delete' */],
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "subtitle",
      title: "Subtitle",
      type: "string",
    },
    {
      name: "mainImage",
      type: "mainImage",
      title: "Main image",
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
    {
      title: "Jobs Title",
      name: "jobs",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "job" }],
        },
      ],
    },
    {
      name: "separator",
      type: "text",
      title: "Separator",
    },
    {
      title: "Skills",
      name: "skills",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
    },
  ],
};
