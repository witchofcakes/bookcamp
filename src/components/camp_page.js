import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import 'simplebar/dist/simplebar.min.css';

import axios from 'axios';

class CampPage extends React.Component {

    render(){
        return (
            <div>
                <div className="container-fluid vacancy-container-padding-top">
                    <div className="row align-items-center">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-9 no-left-padding">
                                    <p className="vacancy-title-big">
                                        Абетка на воді
                                    </p>
                                </div>
                                <div className="col-3 no-padding">

                                </div>
                            </div>
                            <div className="row margin-info-row">
                                <div className="col-12 no-gutters">

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
                            <div className="row justify-content-center header-vacancy-padding">
                                <div className="col-8 no-gutters">
                                    <Tab>Опис вакансії</Tab>
                                    <Tab>Про компанію</Tab>
                                </div>
                            </div>
                        </div>
                    </TabList>
                    <div className="container">
                        <div className="row justify-content-center ">
                            <div className="col-8">
                                <TabPanel>
                                    <div className="row row-vacancy-info">
                                        <div className="col-12 no-gutters column-vacancy-info">
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="tags-labels">Спеціалізація</div>

                                                    <div className="tags-labels">Мови</div>

                                                    <div className="tags-labels">Навички</div>

                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12">
                                                    {/*<div className="vacancy-info-categories-color-first">Кого ми шукаємо:</div>*/}
                                                    <p className="vacancy-text-color-align-first">
                                                        {/*<Markdown*/}
                                                        {/*    escapeHtml={true}*/}
                                                        {/*    source={state.whoWeSearching}*/}
                                                        {/*/>*/}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="vacancy-info-categories-color">
                                                        Графік роботи
                                                    </div>
                                                    <p className="vacancy-text-color">
                                                        {/*<Markdown*/}
                                                        {/*    escapeHtml={true}*/}
                                                        {/*    source={state.workingSchedule}*/}
                                                        {/*/>*/}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="vacancy-info-categories-color">
                                                        Задачі
                                                    </div>
                                                    {/*<Markdown*/}
                                                    {/*    escapeHtml={true}*/}
                                                    {/*    source={state.duties}*/}
                                                    {/*/>*/}
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="vacancy-info-categories-color">
                                                        Вимоги
                                                    </div>
                                                    {/*<Markdown*/}
                                                    {/*    escapeHtml={true}*/}
                                                    {/*    source={state.requirements}*/}
                                                    {/*/>*/}
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="vacancy-info-categories-color">
                                                        Від компанії
                                                    </div>
                                                    {/*<Markdown*/}
                                                    {/*    escapeHtml={true}*/}
                                                    {/*    source={state.companyOffers}*/}
                                                    {/*/>*/}
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="vacancy-info-categories-color">
                                                        Локація
                                                    </div>
                                                    {/*<p className="vacancy-text">*/}
                                                    {/*    м. {state.city}, {state.street}*/}
                                                    {/*</p>*/}
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
            </div>
        );
    }
};

export default CampPage;