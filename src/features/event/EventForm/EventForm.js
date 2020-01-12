import React, { Component } from "react";
import { Segment, Form, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { updateEvent, createEvent } from "../../redux/actions/eventActions";


class EventForm extends Component {
    state = {
        title: '',
        date: '',
        city: '',
        venue: '',
        hostedBy: ''
    }

    componentDidMount() {

        if (this.props.selectedEventData !== null)
            this.setState({
                ...this.props.selectedEventData
            })
    }

    //handlechange
    handleInputchange = (event) => {
        //destructure event object
        const { name, value } = event.target
        this.setState({
            // [event.target.name]: event.target.value
            [name]: value
        })
    }


    //handleSubmit
    handleSubmit = (event) => {
        //Check if there is already a value for the state which has an id because at this stage all the state is from an already data which is not from the form so originally there is an id which is not created from the form
        event.preventDefault()
        console.log(this.state.id)
        if (this.state.id) {
            return this.props.updateEvent(this.state);
        } else {
            this.props.createEvent(this.state)

        }



    }




    render() {

        console.log('form', this.state)
        //destructure
        const { handleFormCancel } = this.props

        //destructuring form Inpunts
        const { title, date, city, hostedBy, venue } = this.state
        return (
            <Segment>
                <Form onSubmit={() => this.props.updateEvent(this.state)}>
                    <Form.Field>
                        <label>Event Title</label>
                        <input name='title' onChange={this.handleInputchange} value={title} placeholder="First Name" />
                    </Form.Field>
                    <Form.Field>
                        <label>Event Date</label>
                        <input
                            value={date}
                            name='date'
                            onChange={this.handleInputchange} type="date"
                            placeholder="Event Date" />
                    </Form.Field>
                    <Form.Field>
                        <label>City</label>
                        <input
                            value={city}
                            name='city'
                            onChange={this.handleInputchange} placeholder="City event is taking place" />
                    </Form.Field>
                    <Form.Field>
                        <label>Venue</label>
                        <input
                            value={venue}
                            name='venue'
                            onChange={this.handleInputchange} placeholder="Enter the Venue of the event"
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Hosted By</label>
                        <input
                            value={hostedBy}
                            name='hostedBy'
                            onChange={this.handleInputchange} placeholder="Enter the name of person hosting"
                        />
                    </Form.Field>
                    <Button positive type="submit">
                        Submit
                      </Button>
                    <Button type="button" onClick={() => this.props.usersAction(this.state)}>fetch</Button>
                </Form>
            </Segment>
        );
    }
}

const actions = {
    updateEvent,
    createEvent
}



const mapData = (state) => {
    return {
        data: state
    }
}

export default connect(mapData, actions)(EventForm);