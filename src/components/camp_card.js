import React from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

import Tooltip from '@material-ui/core/Tooltip';

class CampCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row center-row">
                <div className="col-12 col-lg-12">
                    <Link
                        to={{
                            pathname: `/camp-page`,
                            
                        }}
                        className="card-form-link-big"
                    >
                        <div className="form-card-employer">
                            <div className="row">
                                <div className="col-6 ellipsis-col-details padding-top-5">
                                    <span className="title-card-form">
                                        {/*<Link*/}
                                        {/*    to={{*/}
                                        {/*        pathname: `/employer-vacancy/${this.props.employerID}`,*/}
                                        {/*        search: `?vacancyID=${this.props.vacancyID}`*/}
                                        {/*    }}>*/}
                                        Абетка на воді
                                        {/*</Link>*/}
                                    </span>
                                </div>
                                <div className="col-6 justify-content-end">
                                    <Tooltip title={'Подивитись форму'}>
                                        <button className="edit-button-table-form-new margin-right-5">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                className="feather-eye-form-table margin-bottom-2"
                                            >
                                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                                <circle cx="12" cy="12" r="3" />
                                            </svg>
                                        </button>
                                    </Tooltip>

                                    <Tooltip title={'Редагувати'}>
                                        <Link
                                            to={{
                                                pathname: `/employer-vacancy-create/${this.props.employerID}`,
                                                search: `?vacancyID=${
                                                    this.props.vacancyID
                                                }&activeStep=${5}`,
                                            }}
                                        >
                                            <button className="edit-button-table-form-new margin-right--10">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    className="feather-edit-form-table margin-bottom-3"
                                                >
                                                    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
                                                </svg>
                                            </button>
                                        </Link>
                                    </Tooltip>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6 align-items-center">
                                    3 000 гривень
                                </div>
                                <div className="col-6 justify-content-end">
                                    <span className="small-text-form-light-gray">
                                        Замовити
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        );
    }
}
export default CampCard;