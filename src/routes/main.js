import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import AllCamps from "../components/all_camps";
import CampPage from "../components/camp_page";
import NavbarNotLoggedIn from "../components/header_footer/navbar";

const Main = () => (
    <div>
        <BrowserRouter>
            <Switch>
                <Route component={DefaultContainer} />
            </Switch>
        </BrowserRouter>
    </div>
);

const DefaultContainer = () => (
    <div>
        {/*<NavBarLoggedIn />*/}
        <NavbarNotLoggedIn/>
        <Switch>
            <Route exact path="/" component={AllCamps} />
            <Route exact path="camp-page" component={CampPage} />
        </Switch>
    </div>
);

export default Main;