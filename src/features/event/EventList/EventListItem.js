import React, { Component } from "react";
import { Segment, Item, Icon, List, Button } from "semantic-ui-react";
import EventListAttendee from './EventListAttendee'
import { connect } from "react-redux";
import { deleteEvent, updateEvent } from "../../redux/actions/eventActions";
class EventListItem extends Component {



    handleUpdateEvent = (event) => {
        this.props.updateEvent(event);
    }

    render() {
        const { event, handleSelectedEvent, handleDelete } = this.props;

        return (
            <Segment.Group>
                <Segment>
                    <Item.Group>
                        <Item>
                            <Item.Image size="tiny" circular src={event.hostPhotoURL} />
                            <Item.Content>
                                <Item.Header>{event.title}</Item.Header>
                                <Item.Description>
                                    Hosted by <a href='/' alt='img '>{event.hostedBy}</a>
                                </Item.Description>
                            </Item.Content>
                        </Item>
                    </Item.Group>
                </Segment>
                <Segment>
                    <span>
                        <Icon name="clock" /> {event.date} |
                <Icon name="marker" /> {event.venue}
                    </span>
                </Segment>
                <Segment secondary>
                    <List horizontal>
                        {event.attendees && event.attendees.map((attendee) => (
                            <EventListAttendee key={attendee.id} attendee={attendee} />
                        ))}

                    </List>
                </Segment>
                <Segment clearing>
                    <span>{event.description}</span>
                    <Button
                        onClick={() => this.handleDelete(event.id)}
                        as="a" color="red"
                        floated="right"
                        content="Delete" />

                    <Button
                        onClick={() => handleSelectedEvent(event)}
                        as="a" color="teal"
                        floated="right"
                        content="View" />


                </Segment>
            </Segment.Group>
        );
    }
}

const actions = {
    deleteEvent,
    updateEvent
}



export default connect(null, actions)(EventListItem);