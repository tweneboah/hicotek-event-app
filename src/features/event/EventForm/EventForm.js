/** @format */

import React, { Component } from "react";
import { Segment, Form, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import {
  createEvent,
  updateEvent
} from "../../../redux/actions/eventActions/eventActions";
import cuid from "cuid";

class EventForm extends Component {
  state = { ...this.props.event };

  //-----HANDLE INPUT CHANGE-------------

  handleInputchange = (event) => {
    const { name, value } = event.target;
    this.setState({
      // [event.target.name]: event.target.value
      [name]: value
    });
  };

  //--------HANDLE SUBMIT-----------

  handleSubmit = (event) => {
    event.preventDefault();
    //Check if there is an already event data in ourt state because we updated our for state values with componentDidMount

    if (this.state.id) {
      this.props.updateEvent(this.state);
      this.props.history.push(`/events/${this.state.id}`);
    } else {
      //Add new property to the existing data
      const newEvent = {
        ...this.state,
        id: cuid(),
        hostPhotoURL: "/assets/images/user.png"
      };
      this.props.createEvent(newEvent);
      this.props.history.push(`/events`);
    }
  };

  //------POPULATE THE SELECTED EVENT DATA INTO OUR FORM THROUGH STATE-------

  render() {
    const { title, date, city, hostedBy, venue } = this.state;

    return (
      <Segment>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Event Title</label>
            <input
              name="title"
              onChange={this.handleInputchange}
              value={title}
              placeholder="First Name"
            />
          </Form.Field>
          <Form.Field>
            <label>Event Date</label>
            <input
              value={date}
              name="date"
              onChange={this.handleInputchange}
              type="date"
              placeholder="Event Date"
            />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input
              value={city}
              name="city"
              onChange={this.handleInputchange}
              placeholder="City event is taking place"
            />
          </Form.Field>
          <Form.Field>
            <label>Venue</label>
            <input
              value={venue}
              name="venue"
              onChange={this.handleInputchange}
              placeholder="Enter the Venue of the event"
            />
          </Form.Field>
          <Form.Field>
            <label>Hosted By</label>
            <input
              value={hostedBy}
              onChange={this.handleInputchange}
              name="hostedBy"
              placeholder="Enter the name of person hosting"
            />
          </Form.Field>
          <Button positive type="submit">
            Submit
          </Button>
          <Button type="button" onClick={this.props.history.goBack}>
            cancel
          </Button>
        </Form>
      </Segment>
    );
  }
}

//------------MAP STATE TO PROPS-------
const mapStateToProps = (state, ownProps) => {
  const eventId = ownProps.match.params.id;

  //This represent the state of our form

  let event = {
    title: "",
    date: "",
    city: "",
    venue: "",
    hostedBy: ""
  };
  if (eventId && state.events.length > 0) {
    event = state.events.filter((event) => event.id === eventId)[0];
  }

  return {
    event
  };
};

const actions = {
  createEvent,
  updateEvent
};

export default connect(mapStateToProps, actions)(EventForm);
