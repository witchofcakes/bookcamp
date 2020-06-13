import React from 'react';
import CampCard from "./camp_card";
import BannerAllCamps from "./banner_all_camps";
import Footer from "../header_footer/footer";
import { Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

class AllCamps extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            camps: [
                {camp_id: 1, name: "Абетка на воді", price: "3000", oblast: "Полтавська", description: "Літній мовний табір ICEA це захоплюючі канікули для Вашої дитини. Крім відпочинку і прийняття лікувальних процедур, табір пропонує унікальну програму тематичних заходів. Тут діти зможуть не тільки поліпшити свої знання англійської мови, а й знайти нових друзів, зміцнити здоров Тут діти зможуть не тільки поліпшити свої знання англійської мови, а й знайти нових друзів, зміцнити здоров"},
                {camp_id: 1, name: "Каштан", price: "7000", oblast: "Київська", description: "Запрошуємо тебе! Літній мовний табір ICEA це захоплюючі канікули для Вашої дитини. Крім відпочинку і прийняття лікувальних процедур, табір пропонує унікальну програму тематичних заходів. Тут діти зможуть не тільки поліпшити свої знання англійської мови, а й знайти нових друзів, зміцнити здоров Тут діти зможуть не тільки поліпшити свої знання англійської мови, а й знайти нових друзів, зміцнити здоров"},
            ]
        };
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

                    {
                        this.state.camps.map((camp) => {
                            return (
                                <CampCard index={camp.camp_id} title={camp.name} location={camp.oblast + ' область'} description={camp.description} price={camp.price}/>
                            );
                        })
                    }

                </div>

                <Footer/>
            </div>
        );
    }
}
export default AllCamps;