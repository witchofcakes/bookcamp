import React from 'react';
import { Link } from 'react-scroll'

export default class BannerAllCamps extends React.Component {
    render() {
        return (
            <div className="container-fluid banner-camps-background">
                <div className="row height-vh align-items-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-10">
                                <div className="banner-big-text">
                                    Найкращі табори за найкращими цінами!
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <Link activeClass="active" className="test8" to="allCamps" spy={true} smooth={true} duration={500}>
                                    <button className="banner-button">
                                        Дивитись табори
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
