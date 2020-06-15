import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import axios from "axios";

export default class RowOrderCamp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };

        this.deleteOrderLine = this.deleteOrderLine.bind(this)
    }

    campElement(){
        return (
            <div className="col-3 ellipsis-col-details">
                <div className="row">
                    <div className="col-4 collapse-name-details">Табір:</div>
                    <div className="col-8 collapse-details">{this.props.name}</div>
                </div>
            </div>
        );
    };

    campAmountElement(){
        return (
            <div className="col-2 ellipsis-col-details">
                <div className="row">
                    <div className="col-6 collapse-name-details">К-сть:</div>
                    <div className="col-6 collapse-details">{this.props.amount}</div>
                </div>
            </div>
        );
    };

    campSumToPayElement(){
        const nf = new Intl.NumberFormat("ukr", {
            style: "currency",
            currency: "UAH",
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });


        return (
            <div className="col-3 ellipsis-col-details">
                <div className="row">
                    <div className="col-4 collapse-name-details">Ціна:</div>

                    <div className="col-8 collapse-details">{nf.format(this.props.price)}</div>
                </div>
            </div>
        );
    };

    campAllSumToPayElement(){
        const nf = new Intl.NumberFormat("ukr", {
            style: "currency",
            currency: "UAH",
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });

        return (
            <div className="col-3 ellipsis-col-details">
                <div className="row">
                    <div className="col-4 collapse-name-details">Всього:</div>
                    <div className="col-8 collapse-details">{nf.format(parseInt(this.props.price)*parseInt(this.props.amount))}</div>
                </div>
            </div>
        );
    };

    deleteOrderLine(e){
        e.preventDefault();

        const order = {
            order_id: this.props.index_order,
            camp_id: this.props.index,
            price: this.props.price,
            sum_of_pay: this.props.sum_of_pay,
            amount: this.props.amount,
        };

        axios.post('http://localhost:4000/api/orders/deleteOrderLine/', order)
            .then(res => console.log(res.data))
            .catch(err=> console.log(err));

        console.log(order);
        // this.props.history.push('/');
        window.location.reload();
    }

    render() {
        return (
            <div className="row">
                <div className="col-12 margin-table-collapse">
                    <div className="row details-row-margin">
                        {this.campElement()}
                        {this.campAmountElement()}
                        {this.campSumToPayElement()}
                        {this.campAllSumToPayElement()}

                        <div className="col ellipsis-col-details">
                            <div className="row">
                                <div className="col-8 collapse-details">
                                    <Tooltip title="Видалити замовлення">
                                        <button className="delete-order-camp-row" onClick={this.deleteOrderLine.bind(this)}>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                className="feather-trash-delete-order-camp-row"
                                            >
                                                <polyline points="3 6 5 6 21 6" />
                                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                            </svg>
                                        </button>
                                    </Tooltip>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}
