import React from 'react';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import 'simplebar/dist/simplebar.min.css';

import Tooltip from "@material-ui/core/Tooltip";

import Footer from "./header_footer/footer";
import axios from "axios";

class CampPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            campID: this.props.match.params.id,
            userID: 1,
            adminID: null,

            isAdmin: false,

            AdministratorAdminId: null,

            name: null,
            description: null,
            price: null,
            oblast: null,
            place_type: null,
            food_and_place: null,
            district: null,
            street: null,
            place_name: '',
            building_number: null,
            admin_first_name: null,
            admin_last_name: null,

            quantity: '',
        };

        this.onChangeQuantity = this.onChangeQuantity.bind(this);
        this.handleOrder = this.handleOrder.bind(this);
    }

    componentDidMount() {
        axios
            .get('http://localhost:4000/api/camps/getExactCamp/' + this.state.campID)
            .then(response => {
                this.setState({
                    name: response.data.name,
                    description: response.data.description,
                    price: response.data.price,
                    oblast: response.data.oblast,
                    place_type: response.data.place_type,
                    food_and_place: response.data.food_and_place,
                    district: response.data.district,
                    street: response.data.street,
                    place_name: response.data.place_name,
                    building_number: response.data.building_number,
                    admin_first_name: response.data.admin_first_name,
                    admin_last_name: response.data.admin_last_name,
                    AdministratorAdminId: response.data.AdministratorAdminId,
                });

            })
            .catch(function(error) {
                console.log(error);
            });
    }

    onChangeQuantity(e){
        this.setState({
            quantity: e.target.value
        });
    }

    handleOrder(e){

        if(this.state.quantity) {
            e.preventDefault();
            const obj = {
                amount: this.state.quantity,
                price: this.state.price,

                user_id: this.state.userID,
                camp_id: this.state.campID,

            };

            axios.post('http://localhost:4000/api/orders/createOrder', obj)
                .then(res => {
                    alert("Замовлення пройшло успішно!");
                    console.log(res.data)
                })
                .catch(() => {
                    console.log("Error while creating order")
                });

            this.setState({
                quantity: '',
            })
        }
        else{
            alert("Будь ласка, введіть бажану кількість :(");
        }
    }

    renderPrice(value){
        const nf = new Intl.NumberFormat("ukr", {
            style: "currency",
            currency: "UAH",
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });

        return nf.format(value);
    }

    renderPlaceType(value){
        if(value===1){
            return "місто";
        }
        else if(value===2){
            return "смт";
        }
        else if(value===3){
            return "село";
        }
    }

    deleteCamp(parameter, event){
        event.preventDefault();

        axios.get('http://localhost:4000/api/camps/deleteCamp/' + parameter)
            .then(res => console.log(res.data))
            .catch(err=> console.log(err));

        this.props.history.push('/');
        window.location.reload();
    }

    render(){
        return (
            <div id="page-container">
                <div className="container-fluid vacancy-container-padding-top">
                    <div className="row align-items-center">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-8">

                                    <p className="vacancy-title-big">
                                        {this.state.name}
                                    </p>
                                    <p className="vacancy-title-small margin-info-row">
                                        {this.state.oblast}, {this.state.place_name}
                                    </p>

                                    {
                                        this.state.isAdmin ?
                                            <div className="margin-edit-delete-buttons">
                                                <Tooltip title={"Редагувати табір"}>
                                                    <a href={"/edit-camp/" + this.state.campID}>
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
                                                <Tooltip title="Видалити табір">
                                                    <button className="delete-button-camp" onClick={this.deleteCamp.bind(this, this.state.campID)}>
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
                                <div className="col-4">
                                    <div className="box-order-camp">

                                        <p className="title-bottom-fixed">
                                            Кількість
                                        </p>
                                        <p className="title-bottom-fixed-text">
                                            <input
                                                type="number"
                                                placeholder="Від одного"
                                                className="quantity-input"
                                                value={this.state.quantity}
                                                onChange={this.onChangeQuantity}
                                            />
                                        </p>

                                        <button className="button-box-side" onClick={this.handleOrder}>
                                            Замовити
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*<div className="container-fluid">*/}
                {/*    <div className="row align-items-center header-vacancy-padding">*/}
                {/*        <div className="col-12 column-with-border">*/}
                <Tabs className="vacancy-new-page-tabs">
                    <TabList>
                        <div className="container">
                            <div className="row center-row header-vacancy-padding">
                                <div className="col-8">
                                    <Tab>Опис табору</Tab>
                                    <Tab>Розміщення</Tab>
                                </div>
                            </div>
                        </div>
                    </TabList>
                    <div className="container">
                        <div className="row center-row">
                            <div className="col-8 min-height-tabs">
                                <TabPanel>
                                    <div className="row row-vacancy-info">
                                        <div className="col-12 column-vacancy-info">
                                            <div className="row">
                                                <div className="col-12">
                                                    <p className="vacancy-text-color">
                                                        {this.state.description}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-5">
                                                    <div className="vacancy-info-categories-color">
                                                        Регіон:
                                                    </div>
                                                </div>
                                                <div className="col-7">
                                                    <div className="vacancy-info-categories-text">
                                                        {this.state.oblast}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-5">
                                                    <div className="vacancy-info-categories-color">
                                                        Адреса:
                                                    </div>
                                                </div>
                                                <div className="col-7">
                                                    <div className="vacancy-info-categories-text">
                                                        {
                                                            this.state.district ?
                                                                <React.Fragment>
                                                                    {this.state.oblast}, {this.renderPlaceType(this.state.place_type)}, {this.state.place_name}, {this.state.district}, {this.state.street} вулиця, {this.state.building_number}
                                                                </React.Fragment>
                                                        :
                                                                <React.Fragment>
                                                                    {this.state.oblast}, {this.renderPlaceType(this.state.place_type)}, {this.state.place_name}, {this.state.street} вулиця, {this.state.building_number}
                                                                </React.Fragment>
                                                        }

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-5">
                                                    <div className="vacancy-info-categories-color">
                                                        Вартість:
                                                    </div>
                                                </div>
                                                <div className="col-7">
                                                    <div className="vacancy-info-categories-text">
                                                        {this.renderPrice(this.state.price)}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-5">
                                                    <div className="vacancy-info-categories-color">
                                                        Адміністратор:
                                                    </div>
                                                </div>
                                                <div className="col-7">
                                                    <div className="vacancy-info-categories-text">
                                                        <a className="admin-vacancy-link" href={`/admin-page/${this.state.AdministratorAdminId}`}>
                                                            {this.state.admin_first_name} {this.state.admin_last_name}
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>

                                <TabPanel>
                                    <div className="row row-vacancy-info">
                                        <div className="col-12 no-gutters">
                                            <div className="row">
                                                <div className="col-12">
                                                    <p className="vacancy-text-color-company">
                                                        {this.state.food_and_place}
                                                    </p>
                                                </div>
                                            </div>
                                            {/*<div className="row">*/}
                                            {/*    <div className="col-12">*/}
                                            {/*        <div className="row">*/}
                                            {/*            <div className="col-12">*/}
                                            {/*                <p className="vacancy-text-color">*/}
                                            {/*                    {this.state.food_and_place}*/}
                                            {/*                </p>*/}
                                            {/*            </div>*/}
                                            {/*        </div>*/}
                                            {/*    </div>*/}
                                            {/*</div>*/}
                                        </div>
                                    </div>
                                </TabPanel>
                            </div>
                        </div>
                    </div>
                </Tabs>

                {/*</div>*/}
                {/*</div>*/}
                {/*</div>*/}
                <Footer/>
            </div>
        );
    }
};

export default CampPage;