import React from "react";
import { Styled } from "theme-ui";

const getDate = (date, { day = true, month = true, year = true } = {}) =>
  date.toLocaleDateString("en-US", {
    day: day ? "numeric" : undefined,
    month: month ? "long" : undefined,
    year: year ? "numeric" : undefined
  });

const EventDate = ({ startDate, endDate }) => {
  const start = new Date(startDate);
  const end = new Date(endDate);

  const isOneDay = start.toDateString() === end.toDateString();

  return (
    <>
      <time dateTime={start.toISOString()}>
        {getDate(start, { year: isOneDay })}
      </time>
      {!isOneDay && (
        <>
          {" "}
          -{" "}
          <time dateTime={end.toISOString()}>
            {getDate(end, { month: start.getMonth() !== end.getMonth() })}
          </time>
        </>
      )}
    </>
  );
};

function index({ name, url, startDate, endDate, location }) {
  return (
    <div>
      <Styled.h1>
        {name} ({location})
      </Styled.h1>
      <Styled.p>
        <EventDate startDate={startDate} endDate={endDate} />
      </Styled.p>

      <Styled.p>
        Website: <Styled.a href={url}>{url}</Styled.a>
      </Styled.p>
    </div>
  );
}

export default index;
