import React from 'react'
import cssModules from 'react-css-modules'
import style from './datatableWidget.style.scss'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'

export const DatatableWidgetView = cssModules(() => {
    let products = [
        {
            id: 1,
            name: "Item name 1",
            price: 100,
            status: 'over'
        },
        {
            id: 2,
            name: "Item name 2",
            price: 10,
            status: 'low'
        },
        {
            id: 3,
            name: "Item name 3",
            price: 1000,
            status: 'high'
        },
        {
            id: 3,
            name: "Item name 3",
            price: 1000,
            status: 'high'
        },
        {
            id: 3,
            name: "Item name 3",
            price: 1000,
            status: 'high'
        },
        {
            id: 3,
            name: "Item name 3",
            price: 1000,
            status: 'high'
        },
        {
            id: 3,
            name: "Item name 3",
            price: 1000,
            status: 'high'
        },
        {
            id: 3,
            name: "Item name 3",
            price: 1000,
            status: 'high'
        },
        {
            id: 3,
            name: "Item name 3",
            price: 1000,
            status: 'high'
        },
        {
            id: 3,
            name: "Item name 3",
            price: 1000,
            status: 'high'
        },
        {
            id: 3,
            name: "Item name 3",
            price: 1000,
            status: 'high'
        }
    ]
    const options = {
        page: 1,  // which page you want to show as default
        sizePerPage: 4,  // which size per page you want to locate as default
        pageStartIndex: 1, // where to start counting the pages
        paginationSize: 3,  // the pagination bar size.
        prePage: '<<', // Previous page button text
        nextPage: '>>', // Next page button text
        hideSizePerPage: true,
        alwaysShowAllBtns: true,
        paginationPosition: 'top'
    }

    return (
        <div>
            <div className="panel panel-default" styleName="panel">
                <div className="panel-heading" styleName="panel-heading">
                    Add Widget
                    <span className="glyphicon glyphicon-cog" styleName="panel-heading--icon"></span>
                </div>
                <div className="panel-body" styleName="panel-body">
                    <h4 styleName="datatable--note">1 to 5 of 20 contacts</h4>
                    <BootstrapTable data={products} striped hover pagination condensed={true} options={ options } styleName='datatable' bordered={ false }>
                        <TableHeaderColumn dataField="id" isKey dataAlign="center" dataSort>Product ID</TableHeaderColumn>
                        <TableHeaderColumn dataField="name" dataSort>Product Name</TableHeaderColumn>
                        <TableHeaderColumn dataField="price" dataSort>Product Price</TableHeaderColumn>
                        <TableHeaderColumn dataField="status" dataSort>Status</TableHeaderColumn>
                    </BootstrapTable>
                </div>
            </div>
        </div>
    )
}, style)