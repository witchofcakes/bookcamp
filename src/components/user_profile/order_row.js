import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';

import { withStyles } from '@material-ui/core';

import TableRow from '@material-ui/core/TableRow';

import Tooltip from '@material-ui/core/Tooltip';
import Collapse from '@material-ui/core/Collapse';
import TableCell from '@material-ui/core/TableCell';

import axios from 'axios';
import RowOrderCamp from "./order_camp_row";

const styles = theme => ({
    rootTable: {
        '& > *': {
            borderBottom: 'unset',
        },
    },
});

class RowOrder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            openCollapse: false,

            ordersCamps: [],
            amountCamps: 0
        };

        this.handleExpand = this.handleExpand.bind(this);
        this.deleteOrder = this.deleteOrder.bind(this);
    }

    sumPay() {
        const nf = new Intl.NumberFormat("ukr", {
            style: "currency",
            currency: "UAH",
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });

        return nf.format(this.props.sum_of_pay);
    }

    paymentDate() {
        if(this.props.isPaid){
            return Intl.DateTimeFormat('uk-UA', {
                year: '2-digit',
                month: '2-digit',
                day: '2-digit',
            })
                .format(new Date(this.props.updatedAt))
                .toString();
        }
        else{
            return(
                <span className="not-paid-price">Не сплачено</span>
            )
        }
    }

    creationDate() {
        return Intl.DateTimeFormat('uk-UA', {
            year: '2-digit',
            month: '2-digit',
            day: '2-digit',
        })
            .format(new Date(this.props.createdAt))
            .toString();
    }

    amountAllCamps(){
        // this.props.camps.map((camp, idx) => {
        //     return (
        //         this.setState({
        //             amountCamps: this.state.amountCamps + this.state.camps.OrderCamp.amount
        //         })
        //     );
        // });
    }

    handleExpand = (evt, index) => {
        this.setState({
            openCollapse: !this.state.openCollapse,
        });
        // if (!this.state.openCollapse) {
        //     let row = document.getElementsByClassName('tableRow')[index];
        //     row.setAttribute('style', 'background: #e0e0e029');
        //
        //     // let rowB = document.getElementsByClassName("rowTableButton")[index];
        //     // rowB.setAttribute("style", "border-left: 5px solid #b9cae9");
        // } else {
        //     let row = document.getElementsByClassName('tableRow')[index];
        //     row.setAttribute('style', 'background: white');
        //
        //     // let rowB = document.getElementsByClassName("rowTableButton")[index];
        //     // rowB.setAttribute("style", "border-left: none");
        // }
    };

    deleteOrder(parameter, e){
        e.preventDefault();

        axios.get('http://localhost:4000/api/orders/deleteOrder/' + parameter)
            .then(res => console.log(res.data))
            .catch(err=> console.log(err));

        // this.props.history.push('/');
        window.location.reload();
    }

    payOrder(parameter, e){
        e.preventDefault();

        axios.get('http://localhost:4000/api/orders/payOrder/' + parameter)
            .then(response => {
                alert("Замовлення успішно сплачене!");
            })
            .catch(function (error) {
                console.log(error);
            });

        window.location.reload();
    }

    amountAllOrder() {
        let amount = 0;
        this.props.camps.map((camp) => {
                return (
                    amount += parseInt(camp.OrderCamp.amount)
                )
            }
        );

        return amount;
    }

    render() {
        const { classes } = this.props;

        return (
            <React.Fragment>
                <TableRow key={this.props.index} className={classes.rootTable + ' tableRow'}>
                    <TableCell component="th" scope="row" className="rowTableButton">
                        <button
                            aria-label="expand row"
                            className="chevron-button-table"
                            onClick={evt => this.handleExpand(evt, this.props.index - 1)}
                        >
                            {this.state.openCollapse ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    className="feather-chevron-button-table"
                                >
                                    <polyline points="18 15 12 9 6 15" />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    className="feather-chevron-button-table"
                                >
                                    <polyline points="6 9 12 15 18 9" />
                                </svg>
                            )}
                        </button>
                    </TableCell>

                    <TableCell component="th" scope="row">
                        {this.props.index}
                    </TableCell>

                    <TableCell className="vac-row-date" align="left">
                        <p className="td-margin">{this.creationDate()}</p>
                    </TableCell>

                    <TableCell className="vac-row-date" align="left">
                        <p className="td-margin">{this.paymentDate()}</p>
                    </TableCell>

                    <TableCell className="vac-row-date" align="left">
                        <p className="td-margin">{this.sumPay()}</p>
                    </TableCell>

                    <TableCell className="vac-row-date" align="left">
                        <p className="td-margin">
                            {this.amountAllOrder()}
                        </p>
                    </TableCell>

                    <TableCell className="vac-row-date empty-more-button-cell" align="center">
                        <Tooltip title={'Видалити все замовлення'}>
                            <button onClick={this.deleteOrder.bind(this, this.props.index)} className="edit-button-table">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    className="feather-edit-2"
                                >
                                    <polyline points="3 6 5 6 21 6" />
                                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                </svg>
                            </button>
                        </Tooltip>
                    </TableCell>

                    <TableCell className="vac-row-date button-paid-width-150" align="center">
                        {
                            this.props.isPaid ?
                                <button disabled className="pay-button-table-paid">
                                    Сплачено
                                </button>
                                :
                                <button onClick={this.payOrder.bind(this, this.props.index)} className="pay-button-table">
                                    Сплатити
                                </button>
                        }

                    </TableCell>


                </TableRow>

                <TableRow>
                    <TableCell
                        style={{
                            paddingBottom: 0,
                            paddingTop: 0,
                            paddingLeft: '20px',
                            borderLeft: '5px solid #b9cae9',
                        }}
                        colSpan={9}
                    >
                        <Collapse in={this.state.openCollapse} timeout="auto" unmountOnExit>
                            {
                                this.props.camps.map((camp, idx) => {
                                    return (
                                        <RowOrderCamp sum_of_pay = {this.props.sum_of_pay} index_order = {this.props.index} index={camp.camp_id} name = {camp.name} price={camp.price} amount={camp.OrderCamp.amount}/>
                                    );
                                })
                            }
                        </Collapse>
                    </TableCell>
                </TableRow>
            </React.Fragment>
        );
    }
}
export default withStyles(styles, { withTheme: true })(RowOrder);