import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import AllCamps from "../components/all_camps";
import CampPage from "../components/camp_page";
import NavbarNotLoggedIn from "../components/header_footer/navbar";
import Registrate from "../components/registrate";
import LogIn from "../components/log_in_user";
import CreateCamp from "../components/create_camp/create_camp";

const Main = () => (
    <div>
        <BrowserRouter>
            <Switch>
                <Route path="/registrate-user" component={LoginContainer} />
                <Route path="/login-user" component={LoginContainer} />
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
            <Route path="/camp-page" component={CampPage} />
            <Route path="/create-camp" component={CreateCamp} />
        </Switch>
    </div>
);

const LoginContainer = () => (
    <div>
        <Switch>
            <Route path="/registrate-user" component={Registrate} />
            <Route path="/login-user" component={LogIn} />
        </Switch>
    </div>
);


export default Main;