import React from 'react';

import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';

import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';

function CourseSelect(props) {
    const [state, setState] = React.useState({
        course: props.course || '',
    });

    const handleChangeCourse = name => event => {
        props.onChange(props.field, event.target.value);
        setState({
            ...state,
            [name]: event.target.value,
        });
    };

    return (
        <FormControl id="course-select-course-form">
            <Select
                value={state.course}
                onChange={handleChangeCourse('course')}
                displayEmpty
                id="course-select-course"
                IconComponent={ExpandMoreRoundedIcon}
            >
                <MenuItem value="" disabled id="all-cat-select">
                    <p className="course-placeholder">Оберіть зі списку</p>
                </MenuItem>
                <MenuItem value={1} id="all-cat-select">
                    Місто
                </MenuItem>
                <MenuItem value={2} id="all-cat-select">
                    Село
                </MenuItem>
                <MenuItem value={3} id="all-cat-select">
                    Селище міського типу
                </MenuItem>
            </Select>
        </FormControl>
    );
}

export default class StepTwo extends React.Component {
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
                        Назва
                        <div className="required-mark">*</div>
                    </div>
                    <div className="col-12 no-gutters">
                        <input
                            type="text"
                            name="jobName"
                            className={'create-vac-input'}
                            aria-label="Назва вакансії"
                            onChange={this.handleChange}
                        />
                    </div>
                </div>

                <div className="title-vac-div">
                    <div className="col-12 no-gutters create-vac-input-name">
                        Тип населеного пункту
                        <div className="required-mark">*</div>
                    </div>
                    <div className="col-12 no-gutters">
                        <CourseSelect
                            onChange={this.handleChangeFieldValue}
                            course={this.props.course}
                            field="course"
                        />
                    </div>
                </div>

                <div className="title-vac-div">
                    <div className="col-12 no-gutters create-vac-input-name">
                        Регіон
                        <div className="required-mark">*</div>
                    </div>
                    <div className="col-12 no-gutters">
                        <input
                            type="text"
                            name="jobName"
                            className={'create-vac-input'}
                            aria-label="Назва вакансії"
                            onChange={this.handleChange}
                        />
                    </div>
                </div>

                <div className="title-vac-div">
                    <div className="col-12 no-gutters create-vac-input-name">
                        Район
                        <div className="required-mark">*</div>
                    </div>
                    <div className="col-12 no-gutters">
                        <input
                            type="text"
                            name="jobName"
                            className={'create-vac-input'}
                            aria-label="Назва вакансії"
                            onChange={this.handleChange}
                        />
                    </div>
                </div>

                <div className="title-vac-div">
                    <div className="col-12 no-gutters create-vac-input-name">
                        Вулиця
                        <div className="required-mark">*</div>
                    </div>
                    <div className="col-12 no-gutters">
                        <input
                            type="text"
                            name="jobName"
                            className={'create-vac-input'}
                            aria-label="Назва вакансії"
                            onChange={this.handleChange}
                        />
                    </div>
                </div>

                <div className="title-vac-div">
                    <div className="col-12 no-gutters create-vac-input-name">
                        Номер дому
                        <div className="required-mark">*</div>
                    </div>
                    <div className="col-12 no-gutters">
                        <input
                            type="number"
                            name="jobName"
                            className={'create-vac-input'}
                            aria-label="Назва вакансії"
                            onChange={this.handleChange}
                        />
                    </div>
                </div>

                <div className="title-vac-div">
                    <div className="col-12 no-gutters create-vac-input-name">
                        Ціна
                        <div className="required-mark">*</div>
                    </div>
                    <div className="col-12 no-gutters">
                        <FormControl className="salary-filter-form-mobile-apply" variant="outlined">
                            <OutlinedInput
                                type="number"
                                className="salary-filter-input"
                                endAdornment={<InputAdornment position="end">гривень</InputAdornment>}
                                aria-describedby="outlined-weight-helper-text"
                                inputProps={{
                                    'aria-label': 'salary',
                                }}
                                placeholder="Ціна табору"
                                labelWidth={0}
                            />
                        </FormControl>
                    </div>
                </div>

                <div className="title-vac-div">
                    <div className="col-12 no-gutters create-vac-input-name">
                        Опис табору
                        <div className="required-mark">*</div>
                    </div>
                    <div className="col-12 no-gutters">
                        <textarea
                            rows="6"
                            className={'create-vac-input'}
                            aria-label="Назва вакансії"
                        />
                    </div>
                </div>

                <div className="title-vac-div">
                    <div className="col-12 no-gutters create-vac-input-name">
                        Їжа та розміщення
                        <div className="required-mark">*</div>
                    </div>
                    <div className="col-12 no-gutters">
                        <textarea
                            rows="6"
                            className={'create-vac-input'}
                            aria-label="Назва вакансії"
                        />
                    </div>
                </div>
            </div>
        );
    }
}