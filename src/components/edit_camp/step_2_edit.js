import React from 'react';

import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';

import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';

export default class StepTwoEdit extends React.Component {
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
                <div className="all-camps-big-text">Редагування табору</div>
                <div className="title-vac-div">
                    <div className="col-12 no-gutters create-vac-input-name-title">
                        Назва
                        <div className="required-mark">*</div>
                    </div>
                    <div className="col-12 no-gutters">
                        <input
                            type="text"
                            name="name"
                            value={this.props.name}
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
                        <FormControl id="course-select-course-form">
                            <Select
                                name="place_type"
                                value={this.props.place_type}
                                onChange={this.handleChange}
                                displayEmpty
                                id="course-select-course"
                                IconComponent={ExpandMoreRoundedIcon}
                            >
                                <MenuItem value={""} disabled id="all-cat-select">
                                    <p className="course-placeholder">Оберіть зі списку</p>
                                </MenuItem>
                                <MenuItem value={1} id="all-cat-select">
                                    Місто
                                </MenuItem>
                                <MenuItem value={2} id="all-cat-select">
                                    Селище міського типу
                                </MenuItem>
                                <MenuItem value={3} id="all-cat-select">
                                    Село
                                </MenuItem>
                            </Select>
                        </FormControl>

                    </div>
                </div>

                <div className="title-vac-div">
                    <div className="col-12 no-gutters create-vac-input-name">
                        Назва населеного пункту
                        <div className="required-mark">*</div>
                    </div>
                    <div className="col-12 no-gutters">
                        <input
                            type="text"
                            name="place_name"
                            value={this.props.place_name}
                            className={'create-vac-input'}
                            aria-label="Назва вакансії"
                            onChange={this.handleChange}
                        />
                    </div>
                </div>

                <div className="title-vac-div">
                    <div className="col-12 no-gutters create-vac-input-name">
                        Область
                        <div className="required-mark">*</div>
                    </div>
                    <div className="col-12 no-gutters">
                        <FormControl id="course-select-course-form">
                            <Select
                                value={this.props.oblast}
                                name="oblast"
                                onChange={this.handleChange}
                                displayEmpty
                                id="course-select-course"
                                IconComponent={ExpandMoreRoundedIcon}
                            >
                                <MenuItem value="" disabled id="all-cat-select">
                                    <p className="course-placeholder">Оберіть зі списку</p>
                                </MenuItem>
                                <MenuItem value={"Вінницька область"} id="all-cat-select">
                                    Вінницька область
                                </MenuItem>
                                <MenuItem value={"Волинська область"} id="all-cat-select">
                                    Волинська область
                                </MenuItem>
                                <MenuItem value={"Дніпропетровська область"} id="all-cat-select">
                                    Дніпропетровська область
                                </MenuItem>
                                <MenuItem value={"Донецька область"} id="all-cat-select">
                                    Донецька область
                                </MenuItem>
                                <MenuItem value={"Житомирська область"} id="all-cat-select">
                                    Житомирська область
                                </MenuItem>
                                <MenuItem value={"Закарпатська область"} id="all-cat-select">
                                    Закарпатська область
                                </MenuItem>
                                <MenuItem value={"Запорізька область"} id="all-cat-select">
                                    Запорізька область
                                </MenuItem>
                                <MenuItem value={"Івано-Франківська область"} id="all-cat-select">
                                    Івано-Франківська область
                                </MenuItem>

                                <MenuItem value={"Київська область"} id="all-cat-select">
                                    Київська область
                                </MenuItem>
                                <MenuItem value={"Кіровоградська область"} id="all-cat-select">
                                    Кіровоградська область
                                </MenuItem>
                                <MenuItem value={"Кримська область"} id="all-cat-select">
                                    Кримська область
                                </MenuItem>
                                <MenuItem value={"Луганська область"} id="all-cat-select">
                                    Луганська область
                                </MenuItem>
                                <MenuItem value={"Львівська область"} id="all-cat-select">
                                    Львівська область
                                </MenuItem>
                                <MenuItem value={"Миколаївська область"} id="all-cat-select">
                                    Миколаївська область
                                </MenuItem>
                                <MenuItem value={"Одеська область"} id="all-cat-select">
                                    Одеська область
                                </MenuItem>
                                <MenuItem value={"Полтавська область"} id="all-cat-select">
                                    Полтавська область
                                </MenuItem>
                                <MenuItem value={"Рівненська область"} id="all-cat-select">
                                    Рівненська область
                                </MenuItem>

                                <MenuItem value={"Сумська область"} id="all-cat-select">
                                    Сумська область
                                </MenuItem>
                                <MenuItem value={"Тернопільська область"} id="all-cat-select">
                                    Тернопільська область
                                </MenuItem>
                                <MenuItem value={"Харківська область"} id="all-cat-select">
                                    Харківська область
                                </MenuItem>
                                <MenuItem value={"Херсонська область"} id="all-cat-select">
                                    Херсонська область
                                </MenuItem>
                                <MenuItem value={"Хмельницька область"} id="all-cat-select">
                                    Хмельницька область
                                </MenuItem>
                                <MenuItem value={"Черкаська область"} id="all-cat-select">
                                    Черкаська область
                                </MenuItem>
                                <MenuItem value={"Чернівецька область"} id="all-cat-select">
                                    Чернівецька область
                                </MenuItem>
                                <MenuItem value={"Чернігівська область"} id="all-cat-select">
                                    Чернігівська область
                                </MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </div>

                <div className="title-vac-div">
                    <div className="col-12 no-gutters create-vac-input-name">
                        Район
                    </div>
                    <div className="col-12 no-gutters">
                        <input
                            type="text"
                            value={this.props.district}
                            name="district"
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

                        <FormControl className="salary-filter-form-mobile-apply" variant="outlined">
                            <OutlinedInput
                                type="text"
                                value={this.props.street}
                                name="street"
                                className="salary-filter-input"
                                endAdornment={<InputAdornment position="end">вулиця</InputAdornment>}
                                aria-describedby="outlined-weight-helper-text"
                                inputProps={{
                                    'aria-label': 'street',
                                }}
                                placeholder="Центральна"
                                labelWidth={0}
                                onChange={this.handleChange}
                            />
                        </FormControl>
                    </div>
                </div>

                <div className="title-vac-div">
                    <div className="col-12 no-gutters create-vac-input-name">
                        Номер дому
                        <div className="required-mark">*</div>
                    </div>
                    <div className="col-12 no-gutters">
                        <input
                            type="text"
                            value={this.props.building_number}
                            name="building_number"
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
                                value={this.props.price}
                                name="price"
                                className="salary-filter-input"
                                endAdornment={<InputAdornment position="end">гривень</InputAdornment>}
                                aria-describedby="outlined-weight-helper-text"
                                inputProps={{
                                    'aria-label': 'salary',
                                }}
                                placeholder="Ціна табору"
                                labelWidth={0}
                                onChange={this.handleChange}
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
                            value={this.props.description}
                            name="description"
                            onChange={this.handleChange}
                            rows="10"
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
                            rows="10"
                            className={'create-vac-input'}
                            aria-label="Назва вакансії"
                            value={this.props.food_and_place}
                            name="food_and_place"
                            onChange={this.handleChange}
                        />
                    </div>
                </div>
            </div>
        );
    }
}