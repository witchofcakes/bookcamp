import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import axios from "axios";

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

import StepOne from "./step_1_admin";
import StepTwo from "./step_2_camp";

class CreateAdmin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            adminID: null,
            activeStep: 0,

            first_name: '',
            last_name: '',
            email: '',
            phone: '',

        };
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeFieldValue = this.handleChangeFieldValue.bind(this);
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

        const { first_name, last_name, email, phone} = this.state;

        if (!first_name || !last_name || !email || !phone) {
            alert("Будь ласка, заповніть всі обов'язкові поля")
        }

        else {

            this.setState({
                activeStep: this.state.activeStep + 1,
            });

            scroll.scrollToTop({
                duration: 500,
                delay: 0,
                smooth: true
            });

            const newAdmin = {
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                email: this.state.email,
                phone: this.state.phone,
            };

            axios.post('http://localhost:4000/api/admins/createAdmin', newAdmin)
                .then(response => {
                    this.setState({
                        adminID: response.data.admin_id
                    });
                })
                .catch(() => {
                    console.log("Error while posting")
                });

            console.log(newAdmin);


            this.setState({
                first_name: '',
                last_name: '',
                email: '',
                phone: '',

            });
        }
    };

    renderContentBy(step) {
        switch (step) {
            case 0:
                return (
                    <StepOne
                        first_name={this.state.first_name}
                        last_name={this.state.last_name}
                        email = {this.state.email}
                        phone = {this.state.phone}
                        onChange={this.handleChange}
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
                        {/*<Step key={0}>*/}
                        {/*    <StepLabel>*/}
                        {/*        Дані про адміністратора*/}
                        {/*    </StepLabel>*/}
                        {/*</Step>*/}
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
                                    Адміністратор доданий!
                                </div>
                            </div>

                            <div className="row row-expansion-panel-center">
                                <div className="col-9 align-center-btn">
                                    <a
                                        className="look-at-vac-link"
                                        href={`/admin-page/${this.state.adminID}`}
                                    >
                                        <button className="look-at-vac-btn">
                                            Переглянути адміна
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="row center-row">
                            {this.renderContentBy(this.state.activeStep)}
                            <div className="col-9">
                                <div className="buttons-vac-div">
                                    <div className="col-12 no-gutters">
                                        {/*<button*/}
                                        {/*    onClick={this.handleBack.bind(this)}*/}
                                        {/*    id="back-btn-stepper-apply"*/}
                                        {/*    disabled={this.state.activeStep === 0}*/}
                                        {/*>*/}
                                        {/*    Назад*/}
                                        {/*</button>*/}

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

export default CreateAdmin;