import React from 'react';
import CampCard from "./camp_card";
import BannerAllCamps from "./banner_all_camps";
import Footer from "./header_footer/footer";
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

class AllCamps extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="padding-top-main" id="page-container">
                <BannerAllCamps/>

                <div className="container padding-top-bottom-container-camps">
                    <div className="row">
                        <div className="col-12">
                            <Element name="allCamps" className="element" >
                                <div className="all-camps-big-text">Всі табори</div>
                            </Element>
                        </div>
                    </div>

                    <CampCard title={"Абетка на воді"} location={"1749 Wheeler Ridge, Delaware"} description={"Літній мовний табір ICEA це захоплюючі канікули для Вашої дитини.\n" +
                    "                                        Крім відпочинку і прийняття лікувальних процедур, табір пропонує унікальну\n" +
                    "                                        програму тематичних заходів. Тут діти зможуть не тільки поліпшити свої знання\n" +
                    "                                        англійської мови, а й знайти нових друзів, зміцнити здоров\n" +
                    "                                        Тут діти зможуть не тільки поліпшити свої знання\n" +
                    "                                        англійської мови, а й знайти нових друзів, зміцнити здоров"}

                    price={"3 000"}
                    />

                    <CampCard title={"Абетка на воді"} location={"1749 Wheeler Ridge, Delaware"} description={"Літній мовний табір ICEA це захоплюючі канікули для Вашої дитини.\n" +
                    "                                        Крім відпочинку і прийняття лікувальних процедур, табір пропонує унікальну\n" +
                    "                                        програму тематичних заходів. Тут діти зможуть не тільки поліпшити свої знання\n" +
                    "                                        англійської мови, а й знайти нових друзів, зміцнити здоров\n" +
                    "                                        Тут діти зможуть не тільки поліпшити свої знання\n" +
                    "                                        англійської мови, а й знайти нових друзів, зміцнити здоров"}

                              price={"3 000"}
                    />

                </div>

                <Footer/>
            </div>
        );
    }
}
export default AllCamps;