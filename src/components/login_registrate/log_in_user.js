import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import axios from 'axios';

export default class LogIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            password: null,
            email: null,

            verified: null,
            authenticated:null,

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

    authenticateUser() {
        axios.get('http://localhost:4000/api/users/login').then(response => {
            if (typeof response.data.user !== 'undefined')
                this.setState({
                    user: response.data.user,
                    authenticated: true
                });
            else{
                this.setState({
                    user: {},
                    authenticated: false
                });
            }
        }).catch(error => {
            return this.setState({
                user: {},
                authenticated: false
            });
        });
    }

    componentDidMount() {
        this.authenticateUser();
    }

    handleLoginClick = (e) => {
        e.preventDefault();
        const { email, password } = this.state;

        if (!password || !email) {
            return this.setState({
                success: false,
                response: 'Please complete the form',

            });

        }

        axios.post('/api/users/checkVerified', { email }).then(response =>{

            console.log(response.data);

            this.setState({
                response: response.data
            });

            if(response.data === true){
                this.setState({
                    verified: true
                });
                const { email, password, verified } = this.state;
                //if(verified===true){
                axios.post('/api/users/login', { email, password })
                    .then(response => {
                        console.log(response);
                        this.setState({ success: true, response: response.data });
                        if(response.data==='success'){
                            this.props.history.push('/');
                            window.location.reload();
                        }
                    }).catch(error => {
                    this.setState({ success: false, response: 'Invalid username or password.' });
                });
                //}
            }


        }).catch(error => {
            this.setState({ success: false, response: 'Error.' });

        });
    };

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

    InputFieldPassword() {
        return (
            <Input
                name={'password'}
                aria-role="textbox"
                data-testid="password"
                className={'login-input-padding'}
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
                                        Вхід для користувача
                                    </p>

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
                                            Пароль
                                            <div className="required-mark">*</div>
                                        </div>
                                    </div>
                                    <FormControl className="col-12 form-control-login">
                                        {this.InputFieldPassword()}
                                    </FormControl>

                                    <button
                                        onClick={this.handleLoginClick.bind(this)}
                                        className="button-login"
                                    >
                                        Вхід
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