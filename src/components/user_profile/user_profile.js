import React, { useState, useEffect } from 'react';
import InputMask from "react-input-mask";
import TableOrders from "./orders_table";
import axios from "axios";

export default class UserProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userID: 1,

            email: '',
            first_name: '',
            last_name: '',
            phone_1: '',
            phone_2: '',
            phone_3: '',
            password: '',
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    componentDidMount(){
        axios.get('http://localhost:4000/api/users/findUserInfo/' + this.state.userID)
            .then(response => {
                this.setState({
                    first_name: response.data.first_name,
                    last_name: response.data.last_name,
                    email: response.data.email,
                    phone_1: response.data.phone_1,
                    phone_2: response.data.phone_2,
                    phone_3: response.data.phone_3,
                    password: response.data.password,
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    editUser(e){
        e.preventDefault();

        if (!this.state.email || !this.state.password  || !this.state.first_name || !this.state.last_name || !this.state.phone_1) {
            alert("Будь ласка, заповніть всі обов'язкові поля");
        }

        else  if (this.state.password.length < 8) {
            alert("Довжина паролю має бути від 8 символів");
        }

        else {

            const newUser = {
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                password: this.state.password,
                email: this.state.email,
                phone_1: this.state.phone_1,
                phone_2: this.state.phone_2,
                phone_3: this.state.phone_3,
            };

            axios.post('http://localhost:4000/api/users/userUpdate/', newUser)
                .then(response => {
                    alert("Success!");
                })
                .catch((response) => {
                    console.log(response);
                    console.log("Error while posting")
                });

            console.log(newUser);
        }

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
                        <div className="col-12">
                            <div className="row">
                                <div className="col-12">
                                    <p className="name-page-all">
                                        Особистий профіль
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-7">
                                    <p className="small-desricption-text">
                                        Ви можете відредагувати свої дані та подивитися всі свої замовлення.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row center-row">
                        <div className="col-12">
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
                        <div className="col-12">

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
                                        name='phone_1'
                                        mask="+380 (99) 999 99 99"
                                        placeholder="+380 (__) ___ __ __"
                                        value={this.state.phone_1}
                                        className={'apply-input-2'}
                                        onChange={this.handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row center-row">
                        <div className="col-12">

                            <div className="row">
                                <div className="col-6 create-vac-input-name">
                                    Телефон (Необов'язковий)
                                </div>
                                <div className="col-6 create-vac-input-name">
                                    Телефон (Необов'язковий)
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-6 create-vac-input-name">
                                    <InputMask
                                        mask="+380 (99) 999 99 99"
                                        placeholder="+380 (__) ___ __ __"
                                        name='phone_2'
                                        value={this.state.phone_2}
                                        className={'create-vac-input'}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div className="col-6 create-vac-input-name">
                                    <InputMask
                                        name='phone_3'
                                        mask="+380 (99) 999 99 99"
                                        placeholder="+380 (__) ___ __ __"
                                        value={this.state.phone_3}
                                        className={'apply-input-2'}
                                        onChange={this.handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row center-row">
                        <div className="col-6">
                            <button className="save-changes-button" onClick={this.editUser.bind(this)}>
                                Зберегти зміни
                            </button>
                        </div>
                    </div>

                    <div className="row center-row">
                        <div className="col-12">
                            <p className="text-orders-user">
                                Таблиця замовлень
                            </p>
                        </div>
                    </div>

                    <div className="row center-row">
                        <div className="col-12">
                            <TableOrders/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
