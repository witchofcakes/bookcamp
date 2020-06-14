import React from 'react';
import MUIDataTable from "mui-datatables";

// const columns = ["Код", "Дата", "Дата сплати", "Сума до сплати", "К-сть таборів", "Табір", "Дія"];
//
// const data = [
//     ["1", "23.05.2020", "23.05.2020", "3000", "2", "Абетка на воді", "Сплатити"],
//     ["2", "24.05.2020", "23.05.2020","6000", "1", "ABC camp", "Сплатити"],
//     ["3", "26.05.2020", "23.05.2020","2000", "1", "Пелюстка", "Сплатити"],
// ];
//
// const options = {
//     filterType: 'checkbox',
// };

export default class TableOrders extends React.Component {
    render() {

        const columns = [
            {
                name: "Код",
                options: {
                    filter: false
                }
            },
            {
                name: "Табір",
                options: {
                    filter: false
                }
            },
            {
                name: "К-сть",
                options: {
                    filter: true
                }
            },
            {
                name: "Дата",
                options: {
                    filter: true,
                    customBodyRender: (value, tableMeta, updateValue) => {
                        const nf = new Intl.DateTimeFormat("ukr", {
                            year: '2-digit',
                            month: '2-digit',
                            day: '2-digit',
                        });

                        return nf.format(value);
                    }
                }
            },
            {
                name: "Дата сплати",
                options: {
                    filter: true,
                    customBodyRender: (value, tableMeta, updateValue) => {
                        if(value){
                            const nf = new Intl.DateTimeFormat("ukr", {
                                year: '2-digit',
                                month: '2-digit',
                                day: '2-digit',
                            });

                            return nf.format(value);
                        }
                        else{
                            return(
                                <span className="not-paid-price">Не сплачено</span>
                            )
                        }
                    }
                }
            },
            {
                name: "Сума до сплати",
                options: {
                    filter: true,
                    customBodyRender: (value, tableMeta, updateValue) => {
                        const nf = new Intl.NumberFormat("ukr", {
                            style: "currency",
                            currency: "UAH",
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                        });

                        return nf.format(value);
                    }
                }
            },
            {
                name: "Дія",
                options: {
                    filter: false,
                    customBodyRender: (value) => {
                        return (
                            <React.Fragment>
                            {
                                value ?
                                    <button disabled className="pay-button-table-paid">Сплачено</button>
                                    :
                                    <button className="pay-button-table">Сплатити</button>
                            }
                            </React.Fragment>
                        );
                    }
                }
            },
        ];

        const data = [
            [1, "Абетка на воді", 2, 23052020, 23052020, 3000, true],
            [2, "ABC camp", 1, 24052020, false, 6000, false],
            [3, "Пелюстка", 1, 26052020, 23052020, 2000, true],
            [4, "Сонечко", 2, 23052020, false, 3000, false],
        ];

        const options = {
            filter: true,
            filterType: "dropdown",
            responsive: "scroll"
        };

        return (
            <MUIDataTable
                title={"Ваші замовлення"}
                data={data}
                columns={columns}
                options={options}
                className={"orders-table-main"}
            />
        )
    }
}
