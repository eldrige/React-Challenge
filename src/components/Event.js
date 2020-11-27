import React from "react";

const Event = ({ events }) => {
  return (
    <>
      {events.map((even) => {
        const { date, id, title, details, time, location } = even;

        return (
          <article className="row">
            <h3 className="col-md-3 p-3">{date}</h3>
            <div className="col-md-6 p-3">
              <h2 className="title">{title}</h2>
              <p className="details">{details}</p>
              <button>+ Event Details</button>
            </div>
            <div className="col-md-3 p-3">
              <p className="time">{time}</p>
              <p className="location">{location}</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default Event;
