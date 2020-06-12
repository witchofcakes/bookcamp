import React from 'react';
import CampCard from "./camp_card";
import BannerAllCamps from "./banner_all_camps";
import Footer from "./header_footer/footer";

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
                            <div className="all-camps-big-text">Всі табори</div>
                        </div>
                    </div>
                    <CampCard/>
                </div>

                <Footer/>
            </div>
        );
    }
}
export default AllCamps;