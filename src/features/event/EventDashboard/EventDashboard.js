/** @format */

import React, { Component } from "react";
import { Grid, Button } from "semantic-ui-react";
import EventList from "../EventList/EventList";
import EventForm from "../EventForm/EventForm";
import cuid from "cuid";
import { connect } from "react-redux";
import {
  deleteEvent,
  updateEvent,
  createEvent
} from "../../redux/actions/eventActions";

class EventDashboard extends Component {
  state = {
    events: this.props.eventsFromRedux.events,
    isOpen: false,
    selectedEventData: null
  };

  //Create form open
  handleCreateFormOpen = () => {
    this.setState({
      isOpen: true,
      selectedEventData: null
    });
  };

  //cancelFormOpen
  handleFormCancel = () => {
    this.setState({
      isOpen: false,
      selectedEventData: null
    });
  };

  //CREATE EVENT
  createEvent = (newEvent) => {
    //Before adding anything to the array first look at the structure and build the same structure before adding
    newEvent.id = cuid();
    newEvent.hostPhotoURL = "/assets/images/user.png";

    this.setState({
      events: [...this.state.events, newEvent],
      isOpen: false
    });
  };

  //selected events
  handleSelectedEvent = (event) => {
    this.setState({
      selectedEventData: event,
      isOpen: true
    });
  };

  handleUpdateEvent = (updatedEventFromForm) => {
    this.setState((prevEvents) => ({
      events: prevEvents.map((event) => {
        if (event.id === updatedEventFromForm.id) {
          return { ...updatedEventFromForm };
        } else {
          return event;
        }
      }),
      isOpen: false,
      selectedEventData: null
    }));
  };

  handleDelete = (id) => {};

  render() {
    //destructure state
    const { isOpen, selectedEventData } = this.state;

    console.log("EVENT DATA", this.state.events);

    const { eventsFromRedux } = this.props;
    console.log(eventsFromRedux);
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList
            handleDelete={this.handleDelete}
            handleSelectedEvent={this.handleSelectedEvent}
            events={eventsFromRedux.events}
            selectedEventData={selectedEventData}
          />
        </Grid.Column>
        <Grid.Column width={6}>
          <Button
            onClick={this.handleCreateFormOpen}
            positive
            content="Create Event"
          />
          {isOpen && (
            <EventForm
              key={selectedEventData ? selectedEventData.id : 0}
              handleUpdateEvent={this.handleUpdateEvent}
              selectedEventData={selectedEventData}
              createEvent={this.createEvent}
              handleFormCancel={this.handleFormCancel}
            />
          )}
        </Grid.Column>
      </Grid>
    );
  }
}

const mapStateToprops = (state) => {
  return {
    eventsFromRedux: state
  };
};

const actions = {
  deleteEvent,
  updateEvent,
  createEvent
};

export default connect(mapStateToprops, actions)(EventDashboard);
