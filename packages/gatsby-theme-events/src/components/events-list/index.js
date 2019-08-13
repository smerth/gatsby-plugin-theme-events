import React from "react";
import { StyledLink } from "../styled-link/";
import { Styled } from "theme-ui";

function EventList({ events }) {
  return (
    <>
      <Styled.h1>Upcoming Events</Styled.h1>
      {/* <pre>{JSON.stringify(events, null, 2)}</pre> */}
      <Styled.ul>
        {events.map(event => (
          <Styled.li key={event.id}>
            <strong>
              <StyledLink to={event.slug}>{event.name}</StyledLink>
            </strong>
            <br />
            {new Date(event.startDate).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric"
            })}{" "}
            in {event.location}
          </Styled.li>
        ))}
      </Styled.ul>
    </>
  );
}

export default EventList;
