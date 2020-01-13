/** @format */

import React, { Component, Fragment } from "react";
import EventListItem from "./EventListItem";

class EventList extends Component {
  render() {
    const { events, handleSelectEvent, handleDeleteEvent } = this.props;
    return (
      <Fragment>
        {events.map((event) => (
          <EventListItem
            key={event.id}
            event={event}
            handleSelectEvent={handleSelectEvent}
            handleDeleteEvent={handleDeleteEvent}
          />
        ))}
      </Fragment>
    );
  }
}

export default EventList;
