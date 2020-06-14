import React, { useState, useEffect } from 'react';
import InputMask from "react-input-mask";
import axios from "axios";
import {animateScroll as scroll} from "react-scroll";

export default class EditAdminProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            adminID: this.props.match.params.id,

            first_name: '',
            last_name: '',
            email: '',
            phone: '',
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    componentDidMount(){
        axios.get('http://localhost:4000/api/admins/getExactAdmin/' + this.state.adminID)
            .then(response => {
                this.setState({
                    first_name: response.data.first_name,
                    last_name: response.data.last_name,
                    email: response.data.email,
                    phone: response.data.phone,
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    editAdmin(e){
        e.preventDefault();

        const newAdmin = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            phone:this.state.phone,
        };

        axios.post('http://localhost:4000/api/admins/updateAdmin/' + this.state.adminID, newAdmin)
            .then(response => {
                alert("Success!");
            })
            .catch(() => {
                console.log("Error while posting")
            });

        console.log(newAdmin);

        // this.setState({
        //     first_name: '',
        //     last_name: '',
        //     email: '',
        //     phone: '',
        //
        // });

        // this.props.history.push('/all-admins');
        // window.location.reload();
    }

    render() {
        return (
            <div className="employer-cabinet-display">
                <div className="container">

                    <div className="row center-row">
                        <div className="col-9">
                            <div className="row">
                                <div className="col-12">
                                    <p className="name-page-all">
                                        Сторінка адміністратора
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-7">
                                    {/*<p className="small-desricption-text">*/}
                                    {/*    Ви можете відредагувати дані адміністратора.*/}
                                    {/*</p>*/}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row center-row">
                        <div className="col-9">
                            <div className="row">
                                <div className="col-6 create-vac-input-name-title">
                                    Ім'я
                                </div>
                                <div className="col-6 create-vac-input-name-title">
                                    Прізвище
                                </div>

                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <input
                                        type="text"
                                        value={this.state.first_name}
                                        name="first_name"
                                        className={'create-vac-input'}
                                        aria-label="Назва вакансії"
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div className="col-6">
                                    <input
                                        type="text"
                                        name="last_name"
                                        value={this.state.last_name}
                                        className={'create-vac-input'}
                                        aria-label="Назва вакансії"
                                        onChange={this.handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row center-row">
                        <div className="col-9">

                            <div className="row">
                                <div className="col-6 create-vac-input-name">
                                    Пошта
                                </div>
                                <div className="col-6 create-vac-input-name">
                                    Телефон
                                </div>
                            </div>

                            <div className="row margin-bottom--20">
                                <div className="col-6 create-vac-input-name">
                                    <input
                                        type="email"
                                        placeholder="email@email.com"
                                        name="email"
                                        value={this.state.email}
                                        className={'create-vac-input'}
                                        aria-label="Назва вакансії"
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div className="col-6 create-vac-input-name">
                                    <InputMask
                                        name='phone'
                                        mask="+380 (99) 999 99 99"
                                        placeholder="+380 (__) ___ __ __"
                                        value={this.state.phone}
                                        onChange={this.handleChange}
                                        className={'apply-input-2'}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row center-row">
                        <div className="col-9">
                            <button className="save-changes-button" onClick={this.editAdmin.bind(this)}>
                                Зберегти зміни
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}
