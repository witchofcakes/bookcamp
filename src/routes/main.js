import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import AllCamps from "../components/all_camps/all_camps";
import CampPage from "../components/camp_page";
import NavbarNotLoggedIn from "../components/header_footer/navbar";
import Registrate from "../components/login_registrate/registrate";
import LogIn from "../components/login_registrate/log_in_user";
import CreateCamp from "../components/create_camp/create_camp";
import NavbarAdmin from "../components/header_footer/navbar_admin";
import NavbarLoggedIn from "../components/header_footer/navbar_logged_in";
import UserProfile from "../components/user_profile";

class Main extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route path="/registrate-user" component={LoginContainer}/>
                        <Route path="/login-user" component={LoginContainer}/>
                        <Route component={DefaultContainer}/>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

class DefaultContainer extends React.Component{

    constructor(props) {
        super(props);
        this.state = {

            isAdmin: false,
            loggedIn: false,

        };
    }

    render(){
        return(
            <div>
                {this.state.isAdmin ?
                    <NavbarAdmin/>
                    :
                    <React.Fragment>
                        {
                            this.state.loggedIn ? <NavbarLoggedIn/> : <NavbarNotLoggedIn/>
                        }

                    </React.Fragment>
                }

                <Switch>
                    <Route exact path="/" component={AllCamps} />
                    <Route path="/camp-page/:id" component={CampPage} />
                    <Route path="/create-camp" component={CreateCamp} />
                    <Route path="/user-profile" component={UserProfile} />
                </Switch>
            </div>
        )
    }

}

class LoginContainer extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/registrate-user" component={Registrate}/>
                    <Route path="/login-user" component={LogIn}/>
                </Switch>
            </div>
        )
    }
}

export default Main;