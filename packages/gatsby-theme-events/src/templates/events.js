import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout/index";
import EventList from "../components/events-list/index";

function EventsTemplate() {
  const data = useStaticQuery(graphql`
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

  const events = data.allEvent.nodes;
  return (
    <Layout>
      <EventList events={events} />
    </Layout>
  );
}

export default EventsTemplate;
