/** @format */

import React, { Component } from "react";
import { Segment, Form, Button, Grid, Header } from "semantic-ui-react";
import { connect } from "react-redux";
import {
  createEvent,
  updateEvent
} from "../../../redux/actions/eventActions/eventActions";
import cuid from "cuid";
import { reduxForm, Field } from "redux-form";
import TextInput from "../../../app/common/form/TextInput";
import TextAreas from "../../../app/common/form/TextAreas";
import SelectInput from "../../../app/common/form/SelectInput";
import {
  combineValidators,
  isRequired,
  composeValidators,
  hasLengthGreaterThan
} from "revalidate";
import PlacesInput from "../../../app/common/form/PlacesInput";
import DateInput from "../../../app/common/form/DateInput";

//Select Text input options

const category = [
  { key: "drinks", text: "Drinks", value: "drinks" },
  { key: "culture", text: "Culture", value: "culture" },
  { key: "film", text: "Film", value: "film" },
  { key: "food", text: "Food", value: "food" },
  { key: "music", text: "Music", value: "music" },
  { key: "travel", text: "Travel", value: "travel" }
];

//------------VALIDATION------

const validate = combineValidators({
  title: isRequired({ message: "The event title is required" }),
  category: isRequired({ message: "The category is required" }),
  description: composeValidators(
    isRequired({ message: "Please enter a description" }),
    hasLengthGreaterThan(4)({
      message: "Description needs to be at least 5 characters"
    })
  )(),
  city: isRequired("city"),
  venue: isRequired("venue"),
  date: isRequired("date")
});

class EventForm extends Component {
  //--------HANDLE SUBMIT USING REDUX-----------
  //1. This accept the values from the fields
  onFormSubmit = (values) => {
    //The initialValues prop represent all our data values
    console.log(values);
    if (this.props.initialValues.id) {
      this.props.updateEvent(values);
      this.props.history.push(`/events/${this.props.initialValues.id}`);
    } else {
      //Add new property to the existing data
      const newEvent = {
        ...this.values,
        id: cuid(),
        hostPhotoURL: "/assets/images/user.png",
        hostedBy: "Emmanuel"
      };

      this.props.createEvent(newEvent);
      this.props.history.push(`/events/${newEvent.id}`);
    }
  };

  render() {
    const {
      history,
      initialValues,
      invalid,
      submitting,
      pristine
    } = this.props;
    return (
      <Grid>
        <Grid.Column width={10}>
          <Segment>
            <Header sub color="teal" content="Event Details" />
            <Form onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
              <Field
                name="title"
                component={TextInput}
                placeholder="Give your event a name"
              />
              <Field
                name="category"
                options={category}
                component={SelectInput}
                placeholder="Event Category"
              />
              <Field
                name="description"
                rows={3}
                component={TextAreas}
                placeholder="Event Description"
              />
              <Header sub color="teal" content="Event Location Details" />
              <Field
                name="city"
                component={PlacesInput}
                placeholder="Event City"
              />
              <Field
                name="venue"
                component={PlacesInput}
                placeholder="Event Venue"
              />
              <Field
                name="date"
                component={TextInput}
                placeholder="Event Date"
              />
              <Button
                disabled={invalid || submitting || pristine}
                positive
                type="submit"
              >
                Submit
              </Button>
              <Button
                type="button"
                onClick={
                  initialValues.id
                    ? () => history.push(`/events/${initialValues.id}`)
                    : () => history.push(`/events`)
                }
              >
                cancel
              </Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

//------------MAP STATE TO PROPS-------
const mapStateToProps = (state, ownProps) => {
  const eventId = ownProps.match.params.id;

  //This represent the state of our form

  let event = {};

  if (eventId && state.events.length > 0) {
    event = state.events.filter((event) => event.id === eventId)[0];
  }

  //The initialValues prop is from the redux which represent the individual values from the form
  return {
    initialValues: event
  };
};

const actions = {
  createEvent,
  updateEvent
};

export default connect(
  mapStateToProps,
  actions
)(reduxForm({ form: "eventForm", validate })(EventForm));
