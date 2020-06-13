import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import axios from 'axios';

export default class Registrate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            name: null,
            surname: null,
            password: null,
            email: null,
            phone: null,
            phone1: null,
            phone2: null,

            showPassword: false,
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = evt => {
        this.setState({
            [evt.target.name]: evt.target.value,
        });
    };


    handleClickShowPassword = () => {
        this.setState({
            showPassword: !this.state.showPassword,
        });
    };

    handleMouseDownPassword = event => {
        event.preventDefault();
    };

    handleRegistrateClick = (e) => {
        e.preventDefault();
        const { name, surname, password, email, phone, phone1, phone2} = this.state;

        if (!name || !surname || !password || !email || !phone) {
            return this.setState({
                success: false,
                response: 'Please complete the form'
            });
        }

        this.setState({
            response:'Checking email...',
        });

        axios.post('/api/users/register', { name, surname, password, email, phone, phone1, phone2})
            .then(response => {
                this.setState({ success: true });
                console.log(response.data);
                this.setState({response: response.data})
            }).catch(error => {
            this.setState({ success: false, response: error.response.data });
        });
    };

    InputFieldName() {
        return (
            <Input
                name="name"
                aria-role="textbox"
                className={'login-input'}
                value={this.state.name}
                onChange={this.handleChange}
            />
        );
    }

    InputFieldSurname() {
        return (
            <Input
                name="surname"
                aria-role="textbox"
                className={'login-input'}
                value={this.state.surname}
                onChange={this.handleChange}
            />
        );
    }

    InputFieldEmail() {
        return (
            <Input
                name="email"
                aria-role="textbox"
                className={'login-input'}
                value={this.state.email}
                onChange={this.handleChange}
            />
        );
    }

    InputFieldPhone() {
        return (
            <Input
                name="phone"
                aria-role="textbox"
                className={'login-input'}
                value={this.state.phone}
                onChange={this.handleChange}
            />
        );
    }

    InputFieldPhone1() {
        return (
            <Input
                name="phone1"
                aria-role="textbox"
                className={'login-input'}
                value={this.state.phone1}
                onChange={this.handleChange}
            />
        );
    }

    InputFieldPhone2() {
        return (
            <Input
                name="phone2"
                aria-role="textbox"
                className={'login-input'}
                value={this.state.phone2}
                onChange={this.handleChange}
            />
        );
    }

    InputFieldPassword() {
        return (
            <Input
                name={'password'}
                aria-role="textbox"
                data-testid="password"
                className={'login-input'}
                type={this.state.showPassword ? 'text' : 'password'}
                value={this.state.password}
                onChange={this.handleChange}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            className="button-login-bg"
                            disableRipple="true"
                            disableFocusRipple="true"
                            aria-label="toggle password visibility"
                            onClick={this.handleClickShowPassword.bind(this)}
                            onMouseDown={this.handleMouseDownPassword}
                        >
                            {this.state.showPassword ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    className="feather-eye-login"
                                >
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                    <circle cx="12" cy="12" r="3" />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    className="feather-eye-off-login"
                                >
                                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                                    <line x1="1" y1="1" x2="23" y2="23" />
                                </svg>
                            )}
                        </IconButton>
                    </InputAdornment>
                }
            />
        );
    }

    render() {

            return (
                <div>
                    <div className="container-fluid container-fluid-login employer-vacancies-desktop">
                        <div className="row">
                            <div className="col-12">
                                <div className="row login-center">
                                    <div className="login-container">
                                        <a href="/" className="login-logo-link">
                                            <div className="login-logo">
                                                <p className="logo-text-login">BOOKCAMP</p>
                                            </div>
                                        </a>
                                        <p className="registrate-user-text">
                                            Реєстрація користувача
                                        </p>
                                        <p className="login-name-login">
                                            Ім'я
                                            <div className="required-mark">*</div>
                                        </p>
                                        <FormControl className="col-12 form-control-login">
                                            {this.InputFieldName()}
                                        </FormControl>

                                        <div className="row password-div">
                                            <div className="col-12 login-name">
                                                Прізвище
                                                <div className="required-mark">*</div>
                                            </div>
                                        </div>
                                        <FormControl className="col-12 form-control-login">
                                            {this.InputFieldSurname()}
                                        </FormControl>

                                        <div className="row password-div">
                                            <div className="col-12 login-name">
                                                Пароль
                                                <div className="required-mark">*</div>
                                            </div>
                                        </div>
                                        <FormControl className="col-12 form-control-login">
                                            {this.InputFieldPassword()}
                                        </FormControl>

                                        <div className="row password-div">
                                            <div className="col-12 login-name">
                                                Пошта
                                                <div className="required-mark">*</div>
                                            </div>
                                        </div>
                                        <FormControl className="col-12 form-control-login">
                                            {this.InputFieldEmail()}
                                        </FormControl>

                                        <div className="row password-div">
                                            <div className="col-12 login-name">
                                                Телефон
                                                <div className="required-mark">*</div>
                                            </div>
                                        </div>
                                        <FormControl className="col-12 form-control-login">
                                            {this.InputFieldPhone()}
                                        </FormControl>

                                        <div className="row password-div">
                                            <div className="col-12 login-name">
                                                Телефон
                                            </div>
                                        </div>
                                        <FormControl className="col-12 form-control-login">
                                            {this.InputFieldPhone1()}
                                        </FormControl>

                                        <div className="row password-div">
                                            <div className="col-12 login-name">
                                                Телефон
                                            </div>
                                        </div>
                                        <FormControl className="col-12 form-control-login">
                                            {this.InputFieldPhone2()}
                                        </FormControl>

                                        <button
                                            onClick={this.handleRegistrateClick.bind(this)}
                                            className="button-login"
                                        >
                                            Реєстрація
                                        </button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );

    }
}