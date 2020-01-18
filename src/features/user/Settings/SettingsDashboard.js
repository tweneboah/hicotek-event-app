/** @format */

import React from "react";
import { Grid } from "semantic-ui-react";
import SettingsNav from "./SettingsNav";
import { Route } from "react-router-dom";
import BasicPage from "./BasicPage";
import AboutPage from "./AboutPage";
import PhotosPage from "./PhotosPage";
import AccountPage from "./AccountPage";
import { connect } from "react-redux";
import { updatePassword } from "../../../redux/actions/authActions/authActions";

const SettingsDashboard = ({ updatePassword }) => {
  return (
    <Grid>
      <Grid.Column width={12}>
        <Route path="/settings/basic" component={BasicPage} />
        <Route path="/settings/about" component={AboutPage} />
        <Route path="/settings/photos" component={PhotosPage} />
        <Route
          path="/settings/account"
          render={() => <AccountPage updatePassword={updatePassword} />}
        />
      </Grid.Column>
      <Grid.Column width={4}>
        <SettingsNav />
      </Grid.Column>
    </Grid>
  );
};

//
const actions = {
  updatePassword
};

export default connect(null, actions)(SettingsDashboard);
