/** @format */

import React from "react";
import { Grid } from "semantic-ui-react";
import EventDetailedHeader from "./EventDetailedHeader";
import EventDetailedInfo from "./EventDetailedInfo";
import EventDetailedChat from "./EventDetailedChat";
import EventDetailedSidebar from "./EventDetailedSidebar";
import { connect } from "react-redux";

const EventDetailPage = ({ event }) => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <EventDetailedHeader event={event} />
        <EventDetailedInfo event={event} />
        <EventDetailedChat />
      </Grid.Column>

      <Grid.Column width={6}>
        <EventDetailedSidebar attendees={event.attendees} />
      </Grid.Column>
    </Grid>
  );
};

const mapStateToprops = (state, ownProps) => {
  //Since our component is rendered by react routerDOM, it imposes additional props like match.params.id and since this is not from redux we can access all the that components onw props by passing a second argument to mapStateToProps

  //We want to get the id from this component

  const eventId = ownProps.match.params.id;
  let event = {}; //for making logic

  //Check if there is eventId and there is event in our store

  if (eventId && state.events.length > 0) {
    //Display the content that matches the id in the params and then give that data to this component to  render
    event = state.events.filter((event) => event.id === eventId)[0]; //This helps to access the actual event;
  }
  return {
    event
  };
};

export default connect(mapStateToprops)(EventDetailPage);
