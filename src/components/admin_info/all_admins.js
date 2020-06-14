import React from 'react';

import InputMask from "react-input-mask";
import {Element} from "react-scroll";
import CampCard from "../all_camps/camp_card";
import axios from "axios";
import AdminCard from "./admin_card";

export default class AllAdmins extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            admins: [],
        }
    }

    componentDidMount() {
        axios
            .get('http://localhost:4000/api/admins/getAllAdmins')
            .then(response => {
                this.setState({
                    admins: response.data
                });
                console.log(this.state.admins);
            })
            .catch(function(error) {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="container padding-top-stepper">
                <div className="row center-row">
                    <div className="col-9">

                        <div className="row">
                            <div className="col-12">
                                <div className="all-camps-big-text">Всі адміни</div>
                            </div>
                        </div>

                        {
                            this.state.admins.map((admin) => {
                                return (
                                    <AdminCard index={admin.admin_id} name={admin.first_name} surname={admin.last_name} phone={admin.phone} email={admin.email}/>
                                );
                            })
                        }


                    </div>
                </div>
            </div>
        );
    }
}