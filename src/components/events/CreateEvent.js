import React, { Component } from "react";
import { connect } from "react-redux";
import { createEvent } from "../../redux/actions/eventActions";
import { Redirect } from "react-router-dom";

class CreateEvent extends Component {
  state = {
    title: "",
    eventDate: "",
    content: "",
    imageLink: "",
    videoLink: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    // console.log(this.state);
    this.props.createEvent(this.state);
    this.props.history.push("/");
  };

  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;

    return (
      <div className="container">
        <h2 className="component-title">Create New Event</h2>
        <div className="create-event section">
          <form onSubmit={this.handleSubmit} className="white">
            <div className="input-field">
              <label htmlFor="title">Title</label>
              <input type="text" id="title" onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <label htmlFor="eventStart">Event Start Date</label>
              <input type="date" id="eventStart" onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <label htmlFor="eventEnd">Event End Date</label>
              <input type="date" id="eventEnd" onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <label htmlFor="place">Event Place</label>
              <input type="text" id="place" onChange={this.handleChange} />
            </div>

            <div className="input-field">
              <label htmlFor="content">Event Content</label>
              <textarea
                id="content"
                className="event-textarea"
                onChange={this.handleChange}
              ></textarea>
            </div>
            <div className="input-field">
              <label htmlFor="imageLink">Event Image</label>
              <input type="text" id="imageLink" onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <label htmlFor="videoLink">Event Video</label>
              <input type="text" id="videoLink" onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <button className="btn btn-form">Create</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createEvent: event => dispatch(createEvent(event))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateEvent);
