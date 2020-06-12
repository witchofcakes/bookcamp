import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import 'simplebar/dist/simplebar.min.css';

import axios from 'axios';
import Footer from "./header_footer/footer";

class CampPage extends React.Component {

    render(){
        return (
            <div id="page-container">
                <div className="container-fluid vacancy-container-padding-top">
                    <div className="row align-items-center">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-8">
                                    <p className="vacancy-title-big">
                                        Абетка на воді
                                    </p>

                                    <p className="vacancy-title-small margin-info-row">
                                        Полтавська область, Україна
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
                                            <input type="number" placeholder="Від одного" className="quantity-input"/>
                                        </p>

                                        <button className="button-box-side">
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
                                                    {/*<div className="vacancy-info-categories-color">*/}
                                                    {/*    Графік роботи*/}
                                                    {/*</div>*/}
                                                    <p className="vacancy-text-color">
                                                        Дитячий мовний табір «Celyn ABC-camp» - це незабутній дитячий відпочинок на мові великого Шекспіра. Тут діти від 7 до 16 років вивчають англійську мову і вдосконалюють навички спілкування. З хлопцями займаються викладачі та activity-лідери з Великобританії, які мають досвід роботи в дитячих таборах і необхідні сертифікати. У таборі діти долають мовний бар'єр, застосовуючи свої знання в безпосередньому спілкуванні.

                                                        Програма проводиться в дитячо-юнацькому санаторному таборі «Буревісник» в Полтавській області - відомого курортного регіону з унікальним м'яким кліматом. Діти за зміну по-справжньому відпочивають від міста, стають більш здоровими, завдяки найчистішому повітрю, сосновому бору, цілющою Новосанжарської воді.

                                                        Трансфер до дитячого табору (туди-назад) організований з Києва, а також (за доп. Плату) з Харкова і Бєлгорода на автобусі.
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
                                                        Полтава, Україна
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
                                                        Полтавська область, Новосанжарський район, с. Клюсівка
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
                                                        6 500 гривень
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
                                                        {/*<Markdown*/}
                                                        {/*    escapeHtml={true}*/}
                                                        {/*    source={state.aboutCompany}*/}
                                                        {/*/>*/}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="vacancy-info-categories-color">
                                                        Переваги компанії
                                                    </div>
                                                    <p className="vacancy-text-color">
                                                        {/*<Markdown*/}
                                                        {/*    escapeHtml={true}*/}
                                                        {/*    source={state.advantageCompany}*/}
                                                        {/*/>*/}
                                                    </p>
                                                </div>
                                            </div>
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