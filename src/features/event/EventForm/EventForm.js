/** @format */

import React, { Component } from "react";
import { Segment, Form, Button } from "semantic-ui-react";

class EventForm extends Component {
  state = {
    title: "",
    date: "",
    city: "",
    venue: "",
    hostedBy: ""
  };

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
      this.props.handleUpdateEvent(this.state);
    } else {
      this.props.handleCreateEvent(this.state);
    }
  };

  //------POPULATE THE SELECTED EVENT DATA INTO OUR FORM THROUGH STATE-------

  componentDidMount() {
    if (this.props.selectedEventData !== null) {
      this.setState({
        ...this.props.selectedEventData
      });
    }
  }

  render() {
    const { cancelFormOpen, handleUpdateEvent } = this.props;

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
          <Button type="button" onClick={cancelFormOpen}>
            cancel
          </Button>
        </Form>
      </Segment>
    );
  }
}

export default EventForm;
