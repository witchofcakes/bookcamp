import React from 'react';

import { Link } from 'react-router-dom';

class AdminCard extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            // campID: this.props.match.params.id,
            adminID: this.props.index
        };
    }

    render() {
        return (
            <div className="row center-row">
                <div className="col-12 col-lg-12">
                    <a
                        href={`/admin-page/${this.state.adminID}`}
                        className="card-form-link-big"
                    >
                        <div className="form-card-employer">
                            <div className="row">
                                <div className="col-6 ellipsis-col-details padding-top-5">
                                    <span>
                                        <a
                                            className="title-card-form"
                                            href={`/admin-page/${this.state.adminID}`}
                                        >
                                            {this.props.index}. {this.props.name} {this.props.surname}
                                        </a>
                                    </span>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-6 align-items-center">
                                    <span className="text-description-admin">{this.props.phone}</span>
                                </div>
                                <div className="col-6 align-items-center justify-content-end">
                                    <span className="text-description-admin">{this.props.email}</span>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        );
    }
}
export default AdminCard;