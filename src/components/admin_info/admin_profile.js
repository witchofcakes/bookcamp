import React from 'react';
import InputMask from "react-input-mask";
import axios from "axios";
import Tooltip from "@material-ui/core/Tooltip";

export default class AdminProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            adminID: this.props.match.params.id,

            first_name: '',
            last_name: '',
            email: '',
            phone: '',

            isAdmin: false,
        };
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

    deleteAdmin(parameter, event){
        event.preventDefault();

        axios.get('http://localhost:4000/api/admins/deleteAdmin/' + parameter)
            .then(res => console.log(res.data))
            .catch(err=> console.log(err));

        this.props.history.push('/all-admins');
        window.location.reload();
    }

    render() {
        return (
            <div className="employer-cabinet-display">
                <div className="container">

                    <div className="row center-row">
                        <div className="col-9">
                            <div className="row align-items-center">
                                <div className="col-7">
                                    <p className="name-page-all-edit">
                                        Сторінка адміністратора
                                    </p>
                                </div>

                                {
                                    this.state.isAdmin ?
                                        <div className="col-5 justify-content-end">
                                            <Tooltip title={"Редагувати адміна"}>
                                                <a href={"/edit-admin/" + this.state.adminID}>
                                                    <button className="edit-button-camp">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                            className="feather-edit-employer"
                                                        >
                                                            <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
                                                        </svg>
                                                    </button>
                                                </a>
                                            </Tooltip>
                                            <Tooltip title="Видалити адміна">
                                                <button className="delete-button-camp" onClick={this.deleteAdmin.bind(this, this.state.adminID)}>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        className="feather-trash-employer"
                                                    >
                                                        <polyline points="3 6 5 6 21 6" />
                                                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                                    </svg>
                                                </button>
                                            </Tooltip>
                                        </div>
                                        :
                                        ""
                                }
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
                                        disabled
                                        className={'create-vac-input-disabled'}
                                        aria-label="Назва вакансії"
                                    />
                                </div>
                                <div className="col-6">
                                    <input
                                        type="text"
                                        name="last_name"
                                        value={this.state.last_name}
                                        disabled
                                        className={'create-vac-input-disabled'}
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
                                        disabled
                                        className={'create-vac-input-disabled'}
                                        aria-label="Назва вакансії"
                                    />
                                </div>
                                <div className="col-6 create-vac-input-name">
                                    <InputMask
                                        name='phone'
                                        mask="+380 (99) 999 99 99"
                                        placeholder="+380 (__) ___ __ __"
                                        value={this.state.phone}
                                        disabled
                                        className={'create-vac-input-disabled'}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
