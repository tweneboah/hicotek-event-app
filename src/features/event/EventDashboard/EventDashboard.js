/** @format */

import React, { Component } from "react";
import { Grid, Button } from "semantic-ui-react";
import EventList from "../EventList/EventList";

import { connect } from "react-redux";
import {
  createEvent,
  deleteEvent,
  updateEvent
} from "../../../redux/actions/eventActions/eventActions";
import { firestoreConnect } from "react-redux-firebase";

class EventDashboard extends Component {
  //---------DELETE EVENT---------
  handleDeleteEvent = (id) => {
    //DELETE EVENT FROM REDUX
    this.props.deleteEvent(id);
  };

  render() {
    //Our state now act as props from redux
    const { events } = this.props;

    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList
            events={events}
            handleDeleteEvent={this.handleDeleteEvent}
          />
        </Grid.Column>
        <Grid.Column width={6}>
          <Button positive content="Create Event" />

          <h2>Activities Feed</h2>
        </Grid.Column>
      </Grid>
    );
  }
}

//-------MAP STATE TO PROPS-------

const mapStateToProps = (state) => {
  return {
    events: state.firestore.ordered.events
  };
};

//------ACTIONS-------
const actions = {
  createEvent,
  deleteEvent,
  updateEvent
};

//------CONNECT TO FIRESTORE DATABASE-----
//Use firestoreConnect
//Pass the component as argument to firestoreConnect
export default connect(
  mapStateToProps,
  actions
)(
  firestoreConnect([
    {
      //Contains array of queries or tables in our firestore
      collection: "events"
    }
  ])(EventDashboard)
);
