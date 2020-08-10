import React, { Component } from "react";
import EventList from "../events/EventList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

class Main extends Component {
  render() {
    // console.log(this.props);
    const { events, auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div className="main">
        <EventList events={events} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    events: state.firestore.ordered.events,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps, null),
  firestoreConnect([{ collection: "events", orderBy: ["createdAt", "desc"] }])
)(Main);
