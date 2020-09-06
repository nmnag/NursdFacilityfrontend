////////////////////////////////////////////////////////////////////////////////////
////////       THE TITLES ARE ACCORDING TO THE TITLES GIVEN ON FIGMA        ////////
////////////////////////////////////////////////////////////////////////////////////
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Faci from './1/index';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


import login from "./screens/login/login";

///For Facilities

import Dashboard from "./screens/dashboard/dashboard";
import Billing from "./screens/billing/index";
import EditWard from "./screens/editward/index";
import LiveFeed from "./screens/live feed/App";
import Insights from "./screens/insights/App";
import ShiftSettings from './screens/shiftsettingsMain/ShiftsSetting'
import EditShift from "./screens/editshift/index";
import Facility from "./screens/facility/index";
import Request from "./screens/request/index";
import Schedule from "./screens/schedule/index";
import UpcomingShifts from "./screens/upcoming/index";



// ///For Nurses
import cards from "./screen-nurses/cards/demo";
import detaliedJobs from "./screen-nurses/detailed-jobs/index";
import desktop41 from "./screen-nurses/desktop41/index";
import desktop43 from "./screen-nurses/desktop43/index";
import desktop45 from "./screen-nurses/desktop45/index";
import profile from "./screen-nurses/profile/index";
import Application from "./screen-nurses/xyz/index";
import cancelShifts from "./screen-nurses/cancelShifts/index";
import licenses from "./screen-nurses/licensesProfile/index"; 

import Auth from "./auth";

ReactDOM.render(
  <React.StrictMode>
    

    <BrowserRouter>
      <Switch>

      <Route exact path="/" component={login} />
      <Route exact path="/auth" component={Auth} />
      {/* <Route exact path="/" component={Dashboard} /> */}


        <Route exact path="/dashboard-facility" component={Dashboard} />
        <Route exact path="/livefeed" component={LiveFeed} />
        <Route path="/insights" component={Insights} />
        <Route path="/shiftset" component={ShiftSettings} />
        <Route path="/billing" component={Billing} />
        <Route path="/editward" component={EditWard} />
        <Route path="/editshift" component={EditShift} />
        <Route path="/facility" component={Facility} />
        <Route path="/request" component={Request} />
        <Route path="/upcomingshifts" component={UpcomingShifts} />
        <Route path="/schedule" component={Schedule} />


        <Route path="/n-cards" component={cards} />
        <Route path="/n-detaliedJobs" component={detaliedJobs} />
        <Route path="/n-desktop41" component={desktop41} />
        <Route path="/n-desktop43" component={desktop43} />
        <Route path="/n-desktop45" component={desktop45} />
        <Route path="/n-application" component={Application} />
        <Route path="/n-profile" component={profile} />
        <Route path="/n-cancelShifts" component={cancelShifts} />
        <Route path="/n-licenses" component={licenses} />

       
      </Switch>
      </BrowserRouter>


  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
