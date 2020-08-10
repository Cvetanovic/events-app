import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import moment from "moment";
import ReactPlayer from "react-player";

const EventDetails = (props) => {
  // console.log(props)
  const { event, auth } = props;
  if (!auth.uid) return <Redirect to="/signin" />;

  if (event) {
    return (
      <div className="container">
        <h2 className="component-title">Event Details</h2>
        <div className="event-details section">
          <div className="card card-details">
            <div className="card-info">
              <div className="card-image info-image">
                <img src={event.imageLink} alt={event.title} />
              </div>
              <div className="info-text">
                <span className="card-title">{event.title}</span> <br />
                <span className="card-place">
                  <i className="fa fa-map-marker"></i>
                  {event.place}
                </span>
                <div className="duration">
                  <span className="date-start">
                    <i className="fa fa-calendar"></i>
                    {moment(event.eventStart).format("ll")}
                  </span>
                  <strong> - </strong>
                  <span className="date-end">
                    {moment(event.eventEnd).format("ll")}
                  </span>
                </div>
                <p>{event.content}</p>
              </div>
            </div>
            <div className="card-action">
              <div className="event-video">
                <ReactPlayer
                  url={event.videoLink}
                  className="react-player"
                  playing
                />
              </div>

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
      </div>
    );
  } else {
    return (
      <div className="container">
        <p>Loading event...</p>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  // console.log(state)
  const id = ownProps.match.params.id;
  const events = state.firestore.data.events;
  const event = events ? events[id] : null;
  return {
    event: event,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps, null),
  firestoreConnect([{ collection: "events" }])
)(EventDetails);
