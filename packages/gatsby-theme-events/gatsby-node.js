const fs = require("fs");

// 1. make sure the data directory exists
exports.onPreBootstrap = ({ reporter }, options) => {
  const contentPath = options.contentPath || "data";

  if (!fs.existsSync(contentPath)) {
    reporter.info(`creating the ${contentPath} directory`);
    fs.mkdirSync(contentPath);
  }
};

// 2 . define the event type
// exports.sourceNodes = ({ actions }) => {
//   actions.createTypes(`
//     type event implements Node @dontInfer {
//         id: ID
//         location: String!
//         startDate: Date! @dateformat @proxy(from: "start_date")
//         endDate: Date! @dateformat @proxy(from: "end_date")
//         url: String!
//         slug: String!
//     }
//     `);
// };

// 2. Add a slug field to yamlEvents and jsonEvents grahpql types
exports.sourceNodes = ({ actions }) => {
  actions.createTypes(`
      type yamlEvents implements Node {
          slug: String!
      }
      `);
  actions.createTypes(`
    type jsonEvents implements Node {
        slug: String!
    }
    `);
};

// 3 a. Create a slug and add it to the slug field on jsonEvents and yamlEvents graphql types
exports.createResolvers = ({ createResolvers }, options) => {
  const basePath = options.basePath || "/";

  const slugify = str => {
    const slug = str
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");

    return `/${basePath}/${slug}/`.replace(/\/\/+/g, "/");
  };

  createResolvers({
    jsonEvents: {
      slug: {
        resolve: source => slugify(source.name)
      }
    },
    yamlEvents: {
      slug: {
        resolve: source => slugify(source.name)
      }
    }
  });
};

// 3 b. define the Event interface which combines data from two source types
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
      interface Event @nodeInterface {
        id: ID!
        name: String!
        location: String!
        startDate: Date! @dateformat @proxy(from: "start_date")
        endDate: Date! @dateformat @proxy(from: "end_date")
        url: String!
        slug: String!

      }
      type jsonEvents implements Node & Event {
        id: String!
        name: String!
        location: String!
        startDate: Date! @dateformat @proxy(from: "start_date")
        endDate: Date! @dateformat @proxy(from: "end_date")
        url: String!
        slug: String!
      }
      type yamlEvents implements Node & Event {
        id: String!
        name: String!
        location: String!
        startDate: Date! @dateformat @proxy(from: "start_date")
        endDate: Date! @dateformat @proxy(from: "end_date")
        url: String!
        slug: String!
      }
    `;
  createTypes(typeDefs);
};

// 4. query for events and create pages
exports.createPages = async ({ actions, graphql, reporter }, options) => {
  const basePath = options.basePath || "/";

  actions.createPage({
    path: basePath,
    component: require.resolve("./src/templates/events.js")
  });

  const result = await graphql(`
    query {
      allEvent(sort: { fields: startDate, order: ASC }) {
        totalCount
        nodes {
          id
          name
          slug
          location
          startDate
          endDate
          url
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic("error loading events: ", reporter.errors);
    return;
  }

  const events = result.data.allEvent.nodes;

  events.forEach(event => {
    const slug = event.slug;

    actions.createPage({
      path: slug,
      component: require.resolve("./src/templates/event.js"),
      context: {
        eventID: event.id
      }
    });
  });
};
