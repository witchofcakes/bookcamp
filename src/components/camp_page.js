import React from 'react';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import 'simplebar/dist/simplebar.min.css';

import Footer from "./header_footer/footer";
import axios from "axios";

class CampPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: null,
            description: null,
            price: null,
            oblast: null,
            place_type: null,
            food_and_place: null,
            district: null,
            street: null,
            building_number: null,
            quantity: '',
        };

        this.onChangeQuantity = this.onChangeQuantity.bind(this);
        this.handleOrder = this.handleOrder.bind(this);
    }

    componentDidMount() {
        axios
            .get("/api/camps/" + this.props.match.params.id)
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
                    building_number: response.data.building_number,
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
        e.preventDefault();
        const obj = {
            quantity: this.state.quantity,
        };
        console.log(obj);
        axios.post('http://localhost:4000/camps/order/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));

        this.props.history.push('/');
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
                                        {this.state.oblast}
                                    </p>

                                </div>
                                <div className="col-4">
                                    <div className="box-order-camp">
                                        {/*<p className="title-bottom-fixed">*/}
                                        {/*    Адміністратор табору*/}
                                        {/*</p>*/}
                                        {/*<p>*/}
                                        {/*    <a href={"#"} className="admin-box-camp">*/}
                                        {/*        Юлій Цезар*/}
                                        {/*    </a>*/}
                                        {/*</p>*/}

                                        {/*<p className="title-bottom-fixed">*/}
                                        {/*    Вартість*/}
                                        {/*</p>*/}
                                        {/*<p className="title-bottom-fixed-text">*/}
                                        {/*    6 500 гривень*/}
                                        {/*</p>*/}

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
                            <div className="col-8">
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
                                                        {this.state.oblast}, {this.state.place_type},
                                                        {this.state.district}, {this.state.street}, {this.state.building_number}
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
                                                        {this.state.price} гривень
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
                                                        <a className="admin-vacancy-link" href="#">
                                                            Юлій Цезар
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