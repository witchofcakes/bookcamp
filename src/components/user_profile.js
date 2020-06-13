import React, { useState, useEffect } from 'react';
import InputMask from "react-input-mask";

export default class UserProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
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
                                        name="jobName"
                                        className={'create-vac-input'}
                                        aria-label="Назва вакансії"
                                    />
                                </div>
                                <div className="col-6">
                                    <input
                                        type="text"
                                        name="jobName"
                                        className={'create-vac-input'}
                                        aria-label="Назва вакансії"
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
                                        name="jobName"
                                        className={'create-vac-input'}
                                        aria-label="Назва вакансії"
                                    />
                                </div>
                                <div className="col-6 create-vac-input-name">
                                    <InputMask
                                        name='telephone'
                                        mask="+380 (99) 999 99 99"
                                        placeholder="+380 (__) ___ __ __"
                                        className={'apply-input-2'}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row center-row">
                        <div className="col-9">
                            <button className="save-changes-button">
                                Зберегти зміни
                            </button>
                        </div>
                    </div>

                    <div className="row center-row">
                        <div className="col-9">
                            <p className="text-orders-user">
                                Таблиця замовлень
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}
