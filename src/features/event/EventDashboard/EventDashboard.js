import React, { Component } from "react";
import { Grid, Button } from "semantic-ui-react";
import EventList from "../EventList/EventList";
import EventForm from "../EventForm/EventForm";
import cuid from "cuid";

const eventsFromDashboard = [
    {
        id: '1',
        title: 'Trip to Tower of London',
        date: '2018-03-27',
        category: 'culture',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
        city: 'London, UK',
        venue: "Tower of London, St Katharine's & Wapping, London",
        hostedBy: 'Bob',
        hostPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
        attendees: [
            {
                id: 'a',
                name: 'Bob',
                photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
            },
            {
                id: 'b',
                name: 'Tom',
                photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
            }
        ]
    },
    {
        id: '2',
        title: 'Trip to Punch and Judy Pub',
        date: '2018-03-28',
        category: 'drinks',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
        city: 'London, UK',
        venue: 'Punch & Judy, Henrietta Street, London, UK',
        hostedBy: 'Tom',
        hostPhotoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
        attendees: [
            {
                id: 'b',
                name: 'Tom',
                photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
            },
            {
                id: 'a',
                name: 'Bob',
                photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
            }
        ]
    }
]


class EventDashboard extends Component {
    state = {
        events: eventsFromDashboard,
        isOpen: false,
        selectedEventData: null
    }

    //Create form open
    handleCreateFormOpen = () => {
        this.setState({
            isOpen: true,
            selectedEventData: null
        })
    }


    //cancelFormOpen
    handleFormCancel = () => {
        this.setState({
            isOpen: false,
            selectedEventData: null
        })
    }


    //CREATE EVENT
    createEvent = (newEvent) => {
        //Before adding anything to the array first look at the structure and build the same structure before adding
        newEvent.id = cuid()
        newEvent.hostPhotoURL = '/assets/images/user.png'

        this.setState({
            events: [...this.state.events, newEvent],
            isOpen: false
        })

    }


    //selected events
    handleSelectedEvent = (event) => {

        this.setState({
            selectedEventData: event,
            isOpen: true,

        })


    }



    handleUpdateEvent = (updatedEventFromForm) => {
        this.setState(({ events }) => ({
            events: events.map((event) => {
                if (event.id === updatedEventFromForm.id) {
                    return { ...updatedEventFromForm }
                } else {
                    return event
                }
            }),
            isOpen: false,
            selectedEventData: null
        }))
    }


    handleDelete = (id) => {
        console.log('DELETED')
        this.setState(({ events }) => ({
            events: events.filter((event) => {
                return event.id !== id
            })
        }))
    }


    render() {
        //destructure state
        const { events, isOpen, selectedEventData } = this.state

        return (
            <Grid>
                <Grid.Column width={10}>
                    <EventList
                        handleDelete={this.handleDelete}
                        handleSelectedEvent={this.handleSelectedEvent}
                        events={events}
                        selectedEventData={selectedEventData}
                    />
                </Grid.Column>
                <Grid.Column width={6}>
                    <Button onClick={this.handleCreateFormOpen} positive content='Create Event' />
                    {isOpen &&

                        <EventForm
                            key={selectedEventData ? selectedEventData.id : 0}
                            handleUpdateEvent={this.handleUpdateEvent}
                            selectedEventData={selectedEventData}
                            createEvent={this.createEvent}
                            handleFormCancel={this.handleFormCancel}
                        />}
                </Grid.Column>
            </Grid>
        );
    }
}

export default EventDashboard;