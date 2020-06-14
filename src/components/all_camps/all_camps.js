import React from 'react';
import CampCard from "./camp_card";
import BannerAllCamps from "./banner_all_camps";
import Footer from "../header_footer/footer";
import { Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import axios from "axios";

class AllCamps extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            camp_id: null,
            name: '',
            price: null,
            oblast: '',
            description: '',
            place_name: '',

            camps: []
        };
    }

    // componentDidMount() {
    //     axios
    //         .get('http://localhost:4000/api/camps/getExactCamp/' + this.state.campID)
    //         .then(response => {
    //             this.setState({
    //                 camp_id: response.data.camp_id,
    //                 name: response.data.name,
    //                 description: response.data.description,
    //                 price: response.data.price,
    //                 oblast: response.data.oblast,
    //                 place_name: response.data.place_name
    //             });
    //
    //         })
    //         .catch(function(error) {
    //             console.log(error);
    //         });
    // }

    componentDidMount() {
        axios
            .get('http://localhost:4000/api/camps/getAllCamps')
            .then(response => {
                this.setState({
                    camps: response.data
                });
            })
            .catch(function(error) {
                console.log(error);
            });
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
                                <CampCard index={camp.camp_id} title={camp.name} location={camp.oblast} description={camp.description} price={camp.price}/>
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