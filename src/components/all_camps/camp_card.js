import React from 'react';

import { Link } from 'react-router-dom';

class CampCard extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            // campID: this.props.match.params.id,
            campID: this.props.index
        };
    }

    render() {
        return (
            <div className="row center-row">
                <div className="col-12 col-lg-12">
                    <a href={`/camp-page/${this.state.campID}`} className="card-form-link-big">
                        <div className="form-card-employer">
                            <div className="row">
                                <div className="col-6 ellipsis-col-details padding-top-5">
                                    <span>
                                        <a className="title-card-form" href={`/camp-page/${this.state.campID}`}>
                                        {this.props.title}
                                        </a>
                                    </span>
                                    <p className="location-margin-text-card">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="feather-standart feather-location-camp">
                                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                                            <circle cx="12" cy="10" r="3"/>
                                        </svg>
                                        {this.props.location}
                                    </p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-12">
                                    <p className="text-description-camp">
                                        {this.props.description}
                                    </p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-6 align-items-center">
                                    <span className="price-card-camp">₴‎ {this.props.price}</span>
                                </div>
                                <div className="col-6 justify-content-end">
                                    <button className="button-book-card-camp">
                                        Замовити
                                    </button>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        );
    }
}
export default CampCard;