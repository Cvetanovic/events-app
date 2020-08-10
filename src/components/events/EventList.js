import React from "react";
import Event from "./Event";
import { Link } from "react-router-dom";

const EventList = ({ events }) => {
  return (
    <div className="container">
      <h2 className="component-title">Events</h2>
      <div className="event-list section">
        {events &&
          events.map(event => {
            return (
              <Link to={"/event/" + event.id} key={event.id}>
                <Event event={event} />
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default EventList;
