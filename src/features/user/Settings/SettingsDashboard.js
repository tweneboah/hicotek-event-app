import React from 'react';
import { Grid } from 'semantic-ui-react';
import SettingsNav from './SettingsNav';
import { Route } from 'react-router-dom';
import BasicPage from './BasicPage';
import AboutPage from './AboutPage';
import PhotosPage from './PhotosPage';
import AccountPage from './AccountPage';

const SettingsDashboard = () => {
    return (
        <Grid>
            <Grid.Column width={12}>
                <Route path='/settings/basic' component={BasicPage} />
                <Route path='/settings/about' component={AboutPage} />
                <Route path='/settings/photos' component={PhotosPage} />
                <Route path='/settings/account' component={AccountPage} />
            </Grid.Column>
            <Grid.Column width={4}>
                <SettingsNav />
            </Grid.Column>
        </Grid>
    )
}

export default SettingsDashboard;
