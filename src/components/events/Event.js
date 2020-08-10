import React from "react";
import moment from "moment";

const Event = ({ event }) => {
  return (
    <div className="event">
      <div className="card event-card">
        <div className="card-image">
          <img src={event.imageLink} alt={event.title} />
        </div>

        <div className="card-content">
          <span className="card-title">{event.title}</span>
          <p className="user-text">
            <strong>Posted by: </strong>
            <span>{event.authorFirstName} </span>
            <span>{event.authorLastName}</span>
          </p>
          <p className="date-text">
            <span>{moment(event.createdAt.toDate()).calendar()}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Event;
