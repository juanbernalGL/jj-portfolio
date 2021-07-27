export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "610059e0e404aa0e6576f024",
                  title: "Sanity Studio",
                  name: "jj-portfolio-studio",
                  apiId: "f854d360-16d9-4bf2-8607-b58e5c664794",
                },
                {
                  buildHookId: "610059e07000470e14b8fa80",
                  title: "Blog Website",
                  name: "jj-portfolio-web",
                  apiId: "a6d057d5-6655-482b-b87b-f3bbb191dcc4",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/juanbernalGL/jj-portfolio",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://jj-portfolio-web.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
