import React from "react";
import _ from "lodash";
import { AgGridReact } from 'ag-grid-react';
import classNames from "classnames";
import {columnDefs, getFakeCarData, columnDefsType} from "../data/tabletestData";
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import "./table.css";

interface TableState {
  rowData: [],
  columnDefs: Array<columnDefsType>,
}

export default class Table extends React.Component<{}, TableState> {
  constructor(props: any) {
    super(props);
    this.state = {
      rowData: [],
      columnDefs: [],
    };
  }

  componentDidMount() {
    const options = {
      sortable: true,
      filter: true,
    };
    const newColumnDefs = configureColumnDefs(columnDefs, options);
    getFakeCarData()
    .then(rowData => {
      this.setState({rowData, columnDefs: newColumnDefs});
    })
  }

  render() {
    return (
      <div
      className={classNames("ag-theme-balham", "tableContainer")}>
        <AgGridReact
          columnDefs={this.state.columnDefs}
          rowData={this.state.rowData}>
        </AgGridReact>
      </div>
    );
  }
}

function configureColumnDefs(columnDefs:Array<columnDefsType>, options:object):Array<any> {
  return _.map(columnDefs, (columnDefObj:object) => {
    return {
      ...columnDefObj,
      ...options,
    };
  });
}