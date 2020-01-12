import { CREATE_EVENET, UPDATE_EVENET, DELETE_EVENET } from "../eventConstants"
import cuid from 'cuid';


export const createEvent = (event) => {
    return {
        type: CREATE_EVENET,
        payload: {
            id: cuid(),
            event
        }
    }
}


export const updateEvent = (newEvent) => {
    newEvent.id = cuid()
    newEvent.hostPhotoURL = '/assets/images/user.png'
    return {
        type: UPDATE_EVENET,
        payload: newEvent
    }
}


export const deleteEvent = (eventId) => {
    return {
        type: DELETE_EVENET,
        payload: {
            eventId
        }
    }
}

