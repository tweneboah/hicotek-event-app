/** @format */

import React, { Component } from "react";
import { Grid, Button } from "semantic-ui-react";
import EventList from "../EventList/EventList";
import EventForm from "../EventForm/EventForm";
import cuid from "cuid";

const eventsFromDashboard = [
  {
    id: "1",
    title: "Trip to Tower of London",
    date: "2018-03-27",
    category: "culture",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: "London, UK",
    venue: "Tower of London, St Katharine's & Wapping, London",
    hostedBy: "Bob",
    hostPhotoURL: "https://randomuser.me/api/portraits/men/20.jpg",
    attendees: [
      {
        id: "a",
        name: "Bob",
        photoURL: "https://randomuser.me/api/portraits/men/20.jpg"
      },
      {
        id: "b",
        name: "Tom",
        photoURL: "https://randomuser.me/api/portraits/men/22.jpg"
      }
    ]
  },
  {
    id: "2",
    title: "Trip to Punch and Judy Pub",
    date: "2018-03-28",
    category: "drinks",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: "London, UK",
    venue: "Punch & Judy, Henrietta Street, London, UK",
    hostedBy: "Tom",
    hostPhotoURL: "https://randomuser.me/api/portraits/men/22.jpg",
    attendees: [
      {
        id: "b",
        name: "Tom",
        photoURL: "https://randomuser.me/api/portraits/men/22.jpg"
      },
      {
        id: "a",
        name: "Bob",
        photoURL: "https://randomuser.me/api/portraits/men/20.jpg"
      }
    ]
  }
];

class EventDashboard extends Component {
  state = {
    events: eventsFromDashboard,
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
    this.setState(({ events }) => ({
      events: [...events, newEvent],
      isOpen: false
    }));
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
    this.setState(({ events }) => ({
      events: events.map((event) => {
        if (event.id === updatedEvent.id) {
          return { ...updatedEvent };
        } else {
          return event;
        }
      }),
      isOpen: false,
      selectedEvent: null
    }));
  };

  //---------DELETE EVENT---------
  handleDeleteEvent = (id) => {
    this.setState(({ events }) => ({
      events: events.filter((e) => e.id !== id)
    }));
  };

  render() {
    const { events, isOpen, selectedEventData } = this.state;
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

export default EventDashboard;
