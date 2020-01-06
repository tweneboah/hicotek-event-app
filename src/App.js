import React, { Component } from "react";
import EventDashboard from "./features/event/EventDashboard/EventDashboard";
import Navbar from "./features/nav/Navbar/Navbar";
import { Container } from "semantic-ui-react";
import { Route } from "react-router-dom";
import EventDetailPage from "./features/event/EventDetailPage/EventDetailPage";
import HomePage from "./features/home/HomePage";
import PeopleDashboard from "./features/user/PeopleDashboard/PeopleDashboard";
import UserDetailed from "./features/user/userDetailed/UserDetailed";
import SettingsDashboard from "./features/user/Settings/SettingsDashboard";
import EventForm from "./features/event/EventForm/EventForm";


class App extends Component {
  render() {
    return (
      <>
        <Route exact path='/' component={HomePage} />

        <Route path='/(.+)'
          render={() => (
            <>
              <Navbar />

              <Container className='main'>

                <Route exact path='/events' component={EventDashboard} />
                <Route exact path='/people' component={PeopleDashboard} />
                <Route exact path='/profile/:id' component={UserDetailed} />

                <Route exact path='/settings' component={SettingsDashboard} />

                <Route exact path='/create-event' component={EventForm} />


              </Container>
            </>
          )}

        />
      </>
    );
  }
}

export default App;