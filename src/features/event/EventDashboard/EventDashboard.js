/** @format */

import React, { Component } from "react";
import { Grid, Button } from "semantic-ui-react";
import EventList from "../EventList/EventList";
import EventForm from "../EventForm/EventForm";
import cuid from "cuid";
import { connect } from "react-redux";
import {
  createEvent,
  deleteEvent,
  updateEvent
} from "../../../redux/actions/eventActions/eventActions";

class EventDashboard extends Component {
  state = {
    isOpen: false,
    selectedEventData: null
  };

  //--------HANDLE SELECT EVENT------------------

  //Select event and display it into our form
  handleSelectEvent = (event) => {
    this.setState({
      selectedEventData: event,
      isOpen: true
    });
  };

  //------------CREATE EVENT-----------------------

  handleCreateEvent = (newEvent) => {
    //Adding properties to the object
    newEvent.id = cuid();
    newEvent.hostPhotoURL = "/assets/images/user.png";

    //CREATE EVENT FROM REDUX
    this.props.createEvent(newEvent);
    //We still need setStatw to update our local state
    this.setState({
      isOpen: false
    });
  };

  //----------------HANDLEFORM OPEN------------
  handleCreateFormOpen = () => {
    this.setState({
      isOpen: true,
      selectedEventData: null
    });
  };

  //----------------HANDLEFORM CANCEL------------
  handleFormCancel = () => {
    this.setState({
      isOpen: false,
      selectedEventData: null
    });
  };

  //--------UPDATE EVENT---------------
  handleUpdateEvent = (updatedEvent) => {
    //UPDATE EVENT FROM REDUX

    this.props.updateEvent(updatedEvent);
    this.setState({
      isOpen: true,
      selectedEventData: null
    });
  };

  //---------DELETE EVENT---------
  handleDeleteEvent = (id) => {
    //DELETE EVENT FROM REDUX
    this.props.deleteEvent(id);
  };

  render() {
    const { isOpen, selectedEventData } = this.state;
    //Our state now act as props from redux
    const { events } = this.props;
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList
            events={events}
            handleSelectEvent={this.handleSelectEvent}
            handleDeleteEvent={this.handleDeleteEvent}
          />
        </Grid.Column>
        <Grid.Column width={6}>
          <Button
            positive
            content="Create Event"
            onClick={this.handleCreateFormOpen}
          />
          {isOpen && (
            <EventForm
              //Thi is use to update data in the form input when a user clicks on view button
              key={selectedEventData ? selectedEventData.id : 0}
              cancelFormOpen={this.handleFormCancel}
              handleCreateEvent={this.handleCreateEvent}
              selectedEventData={selectedEventData}
              handleUpdateEvent={this.handleUpdateEvent}
            />
          )}
        </Grid.Column>
      </Grid>
    );
  }
}

//-------MAP STATE TO PROPS-------

const mapStateToProps = (state) => {
  return {
    events: state.events
  };
};

//------ACTIONS-------
const actions = {
  createEvent,
  deleteEvent,
  updateEvent
};

export default connect(mapStateToProps, actions)(EventDashboard);
