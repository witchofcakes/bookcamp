import React from 'react';

import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';

import Paper from '@material-ui/core/Paper';
import TableCell from '@material-ui/core/TableCell';
import RowOrder from "./order_row";
import axios from "axios";

export default class TableOrders extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userID: 1,
            orders: [],
        };
    }

    componentDidMount() {
        axios
            .get('http://localhost:4000/api/orders/getUserOrder/' + this.state.userID)
            .then(response => {
                this.setState({
                    orders: response.data,
                });
                console.log(this.state.orders);
                // console.log(this.state.ordersCamps);
            })
            .catch(function(error) {
                console.log(error);
            });
    }

    render() {
        return (
            <Paper>
                {/*<div className="kanban-board">*/}
                    <TableContainer className="container-mui-table">
                        {this.state.orders.length !== 0 ?

                            <Table stickyHeader aria-label="simple table">
                                <TableHead className="table-head">
                                    <TableRow>
                                        <TableCell/>
                                        <TableCell className="table-head" align="left">
                                            #
                                        </TableCell>
                                        <TableCell align="left">Дата замовлення</TableCell>
                                        <TableCell align="left">Дата сплати</TableCell>
                                        <TableCell align="left">Сума до сплати</TableCell>
                                        <TableCell align="left">К-сть</TableCell>
                                        <TableCell/>
                                        <TableCell/>
                                    </TableRow>
                                </TableHead>

                                <TableBody>
                                    {
                                        this.state.orders.map((order, idx) => {
                                            return (
                                                <RowOrder
                                                    index={order.order_id}
                                                    createdAt={order.createdAt}
                                                    updatedAt={order.updatedAt}
                                                    sum_of_pay={order.sum_of_pay}
                                                    isPaid={order.isPaid}
                                                    camps={order.Camps}
                                                />
                                            );
                                        })
                                    }
                                </TableBody>
                            </Table>

                            :
                            <div>
                                <div className="empty-orders-text-table">
                                    Ви не маєте замовлень :(
                                </div>
                            </div>

                        }
                    </TableContainer>
                {/*</div>*/}
            </Paper>
        )
    }
}
