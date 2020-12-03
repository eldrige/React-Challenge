import React from "react";

const Event = ({ events }) => {
  return (
    <>
      {events.map((ev) => {
        const { date, id, title, details, time, location } = ev;

        return (
          <article className="row" key={id}>
            <h3 className="col-md-3 p-3 ">{date}</h3>
            <div className="col-md-6 p-3">
              <h2 className="title">{title}</h2>
              <p className="details">{details}</p>
              <button>+ Event Details</button>
            </div>
            <div className="col-md-3 p-3">
              <h2 className="time">{time}</h2>
              <p className="location">{location}</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default Event;
