import React, { Component } from 'react';
import EventListItem from './EventListItem';

class EventList extends Component {

    render() {
        const { events, handleSelectedEvent, selectedEventData, handleDelete } = this.props


        return (
            <>
                {events.map((event) => {
                    return < EventListItem
                        key={event.id} event={event}
                        handleSelectedEvent={handleSelectedEvent}
                        selectedEventData={selectedEventData}
                        handleDelete={handleDelete}
                    />
                })}

            </>
        );
    }
}

export default EventList;