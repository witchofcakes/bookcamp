import React from 'react';

import InputMask from "react-input-mask";

export default class StepOneEdit extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeFieldValue = this.handleChangeFieldValue.bind(this);
    }

    handleChange(event) {
        this.props.onChange(event);
    }

    handleChangeFieldValue = (field, value) => {
        this.props.onChangeFieldValue(field, value);
    };

    render() {
        return (
            <div className="col-9">
                <div className="title-vac-div">
                    <div className="col-12 no-gutters create-vac-input-name-title">
                        Ім'я
                        <div className="required-mark">*</div>
                    </div>
                    <div className="col-12 no-gutters">
                        <input
                            type="text"
                            value={this.props.first_name}
                            name="first_name"
                            className={'create-vac-input'}
                            aria-label="Назва вакансії"
                            onChange={this.handleChange}
                        />
                    </div>
                </div>

                <div className="title-vac-div">
                    <div className="col-12 no-gutters create-vac-input-name">
                        Прізвище
                        <div className="required-mark">*</div>
                    </div>
                    <div className="col-12 no-gutters">
                        <input
                            type="text"
                            name="last_name"
                            value={this.props.last_name}
                            className={'create-vac-input'}
                            aria-label="Назва вакансії"
                            onChange={this.handleChange}
                        />
                    </div>
                </div>

                <div className="title-vac-div">
                    <div className="col-12 no-gutters create-vac-input-name">
                        Пошта
                        <div className="required-mark">*</div>
                    </div>
                    <div className="col-12 no-gutters">
                        <input
                            type="email"
                            placeholder="email@email.com"
                            name="email"
                            value={this.props.email}
                            className={'create-vac-input'}
                            aria-label="Назва вакансії"
                            onChange={this.handleChange}
                        />
                    </div>
                </div>

                <div className="title-vac-div">
                    <div className="col-12 no-gutters create-vac-input-name">
                        Телефон
                        <div className="required-mark">*</div>
                    </div>
                    <div className="col-12 no-gutters">
                        <InputMask
                            name='phone'
                            mask="+380 (99) 999 99 99"
                            placeholder="+380 (__) ___ __ __"
                            value={this.props.phone}
                            onChange={this.handleChange}
                            className={'apply-input-2'}
                        />
                    </div>
                </div>

            </div>
        );
    }
}