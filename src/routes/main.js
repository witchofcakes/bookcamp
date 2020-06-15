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
import UserProfile from "../components/user_profile/user_profile";
import EditCamp from "../components/edit_camp/edit_camp";
import AllAdmins from "../components/admin_info/all_admins";
import CreateAdmin from "../components/create_camp/create_admin";
import AdminProfile from "../components/admin_info/admin_profile";
import EditAdminProfile from "../components/admin_info/edit_admin_profile";

import axios from "axios";

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

            isAdmin: true,
            loggedIn: false,

            user: '',
            authenticated: true

        };
    }

    // componentDidMount() {
    //     axios.get('http://localhost:4000/api/users/userCheck', {withCredentials: true}).then(response => {
    //         if (typeof response.data.user !== 'undefined')
    //             this.setState({
    //                 user: response.data.user,
    //                 authenticated: true
    //             });
    //         else{
    //             this.setState({
    //                 user: {},
    //                 authenticated: false
    //             });
    //         }
    //     }) .catch(error => {
    //         console.log(error)
    //         return this.setState({
    //             user: {},
    //             authenticated: false
    //         });
    //     });
    // }

    render(){
        return(
            <div>
                {this.state.isAdmin ?
                    <NavbarAdmin/>
                    :
                    <React.Fragment>
                        {
                            this.state.authenticated ? <NavbarLoggedIn/> : <NavbarNotLoggedIn/>
                        }

                    </React.Fragment>
                }

                <Switch>
                    <Route exact path="/" component={AllCamps} />
                    <Route path="/camp-page/:id" component={CampPage} />
                    <Route path="/user-profile" component={UserProfile} />
                    <Route path="/create-camp" component={CreateCamp} />
                    <Route path="/create-admin" component={CreateAdmin} />
                    <Route path="/all-admins" component={AllAdmins} />
                    <Route path="/admin-page/:id" component={AdminProfile} />
                    <Route path="/edit-camp/:id" component={EditCamp} />
                    <Route path="/edit-admin/:id" component={EditAdminProfile} />
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