import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import axios from "axios";

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

import StepOneEdit from "./step_1_edit";
import StepTwoEdit from "./step_2_edit";

class EditCamp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            activeStep: 0,
            campID: this.props.match.params.id,
            AdministratorAdminId: null,

            name: '',
            description: '',
            price: null,
            oblast: '',
            place_type: null,
            food_and_place: '',
            district: '',
            street: '',
            building_number: null,
            place_name: '',

        };
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeFieldValue = this.handleChangeFieldValue.bind(this);
    }

    componentDidMount(){
        axios.get('http://localhost:4000/api/camps/getExactCamp/' + this.state.campID)
            .then(response => {
                this.setState({
                    name: response.data.name,
                    description: response.data.description,
                    price: response.data.price,
                    oblast: response.data.oblast,
                    place_type: response.data.place_type,
                    food_and_place: response.data.food_and_place,
                    district: response.data.district,
                    street: response.data.street,
                    building_number: response.data.building_number,
                    place_name: response.data.place_name,
                    AdministratorAdminId: response.data.AdministratorAdminId,
                })
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    getNumberOfSteps() {
        return 1;
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleChangeFieldValue = (field, value) => {
        this.setState({
            [field]: value,
        });
    };

    handleNext = async () => {
        this.setState({
            activeStep: this.state.activeStep + 1,
        });
        scroll.scrollToTop({
            duration: 500,
            delay: 0,
            smooth: true
        });
    };

    handleBack = async () => {
        await this.setState( {
            activeStep: this.state.activeStep - 1,
        });
        scroll.scrollToTop({
            duration: 500,
            delay: 0,
            smooth: true
        });
    };

    handlePublish = (e) => {
        e.preventDefault();

        this.setState({
            activeStep: this.state.activeStep + 1,
        });

        scroll.scrollToTop({
            duration: 500,
            delay: 0,
            smooth: true
        });

        const newCamp = {
            name: this.state.name,
            description: this.state.description,
            price: this.state.price,
            oblast: this.state.oblast,
            place_type: this.state.place_type,
            food_and_place: this.state.food_and_place,
            district: this.state.district,
            street: this.state.street,
            building_number: this.state.building_number,
            place_name: this.state.place_name,
            AdministratorAdminId: this.state.AdministratorAdminId,
        };

        axios.post('http://localhost:4000/api/camps/updateCamp/' + this.state.campID, newCamp)
            .then(response => {
                alert("Success!")
            })
            .catch(() => {
                console.log("Error while posting")
            });

        console.log(newCamp);

        // this.setState({
        //     first_name: '',
        //     last_name: '',
        //     email: '',
        //     phone: '',
        //
        //     name: '',
        //     description: '',
        //     price: '',
        //     oblast: '',
        //     place_type: '',
        //     food_and_place: '',
        //     district: '',
        //     street: '',
        //     building_number: '',
        //     place_name: '',
        //     AdministratorAdminId: '',
        // });
    };

    renderContentBy(step) {
        switch (step) {
            case 0:
                return (
                    <StepTwoEdit
                        name={this.state.name}
                        description={this.state.description}
                        price={this.state.price}
                        oblast={this.state.oblast}
                        place_type={this.state.place_type}
                        food_and_place={this.state.food_and_place}
                        district={this.state.district}
                        street={this.state.street}
                        building_number={this.state.building_number}
                        place_name={this.state.place_name}
                        AdministratorAdminId={this.state.AdministratorAdminId}
                        onChange={this.handleChange}
                        onChangeFieldValue={this.handleChangeFieldValue}
                    />
                );

            default:
                return null;
        }
    }

    render() {
        return (
            <div className="employer-cabinet-display">
                <div className="row justify-content-center">
                    <Stepper
                        className="col-11"
                        id="stepper-icons"
                        activeStep={this.state.activeStep}
                        alternativeLabel
                    >

                    </Stepper>
                </div>

                <div className="container">
                    {this.state.activeStep === this.getNumberOfSteps() ? (
                        <div>
                            <div className="row row-expansion-panel-center">
                                <div className="col-9 align-center-text">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        className="feather-smile-create"
                                    >
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                                        <line x1="9" y1="9" x2="9.01" y2="9" />
                                        <line x1="15" y1="9" x2="15.01" y2="9" />
                                    </svg>
                                    Інформація про табір відредагована!
                                </div>
                            </div>

                            <div className="row row-expansion-panel-center">
                                <div className="col-9 align-center-btn">
                                    <Link
                                        className="look-at-vac-link"
                                        to={{
                                            pathname: `/camp-page/${this.state.campID}`,
                                        }}
                                    >
                                        <button className="look-at-vac-btn">
                                            Переглянути табір
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="row center-row">
                            {this.renderContentBy(this.state.activeStep)}
                            <div className="col-9">
                                <div className="buttons-vac-div">
                                    <div className="col-12 no-gutters">

                                        {this.state.activeStep === this.getNumberOfSteps() - 1 ? (
                                            <button
                                                id="publish-btn-stepper"
                                                onClick={this.handlePublish.bind(this)}
                                            >
                                                Опублікувати
                                            </button>
                                        ) : (
                                            <button
                                                id="next-btn-stepper-apply"
                                                onClick={this.handleNext.bind(this)}
                                            >
                                                Далі
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default EditCamp;