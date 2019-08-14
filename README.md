# Gatsby Theme Events

## Overview

This is the code base for the NPM package: [@smerth/gatsby-theme-events](https://www.npmjs.com/package/@smerth/gatsby-theme-events)

The repo contains the theme and a site for testing the theme, organised as a yarn workspace. The two workspaces are:

- `site`
- `@smerth/gatsby-theme-events`

`@smerth/gatsby-theme-events` creates a simple events content type and adds a listing page for events and a page for each separate event.

This theme is based on the free online course [gatsby-theme-authoring](https://egghead.io/courses/gatsby-theme-authoring) by Jason Lengstorf at the egg-cellant [Egghead.IO](https://egghead.io/) with the following changes:

- implementation of a custom grahpql interface to merge json and yaml data sources into a single graphql type called `event`
- use of the new `gatsby-plugin-theme-ui`
- example of using the JSX prama `/** @jsx jsx */` in the `StyledLink` component be able to access `theme.js` variables to style the Gatsby `Link` component

## Usage:

### Data source:

Either an `events.json` or an `events.yaml` file, (or both,) must be added to a data source folder.

Events data should take this form:

```json
[
  {
    "id": "6d9aecc5-722a-4562-aa18-c30b01d8484a",
    "name": "convallis duis consequat dui nec",
    "location": "62538 Di Loreto Place",
    "start_date": "2019-01-16",
    "end_date": "2019-06-13",
    "url": "https://nba.com/non/interdum.json"
  },
  {
    "id": "8702366c-b742-4832-9b28-fbb079edceb6",
    "name": "lobortis sapien sapien non mi",
    "location": "742 Rigney Junction",
    "start_date": "2019-04-13",
    "end_date": "2019-01-23",
    "url": "http://bloomberg.com/eget/rutrum/at.jpg"
  },
```

or, for yaml this:

```yaml
- id: dc6a999d-292b-4fa4-bbb5-e87f39f53128
  name: nulla justo aliquam quis turpis
  location: 6122 Grayhawk Road
  start_date: "2019-02-02"
  end_date: "2018-10-29"
  url: http://google.cn/felis/eu/sapien/cursus/vestibulum/proin.jpg
- id: 64d24fe6-1084-45ff-bc05-e173c8efd642
  name: ante ipsum primis in faucibus orci
  location: 91212 Dorton Place
  start_date: "2018-08-17"
  end_date: "2019-04-25"
  url: http://craigslist.org/libero.png
```

By default the theme creates a `data` folder @ `host-site/site/src` but this can be overridden in the plugin config. The base path for listing and event pages can also be set in the config, like this:

@ host-site/gatsby-config.js

```javascript
module.exports = {
  plugins: [
    {
      resolve: "@smerth/gatsby-theme-events",
      options: {
        basePath: "/events",
        contentPath: "events"
      }
    }
  ]
};
```

### Theme UI

The theme uses `gatsby-plugin-theme-ui` to deliver a theme object to components. The `theme.js` file and any components can be overriden using "component shadowing".

## GraphQL Customization

This theme contains an example of customizing Gatsby's GraphQL Schema.

An `event` interface is defined. This interface is then implemented by the jsonEvents and yamlEvents types.

Field extentions are used to rename fields (for example: `@proxy(from: "start_date")`), and to set date formats (for example: `@dateformat`.)
