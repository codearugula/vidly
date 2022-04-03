import React, { Component } from "react";

class TableHeader extends Component {
  raiseSort = (path) => {
    let sortColumn = { ...this.props.sortColumn };
    sortColumn.path === path
      ? sortColumn.order === "asc"
        ? (sortColumn.order = "desc")
        : (sortColumn.order = "asc")
      : (sortColumn = { path: path, order: "asc" });
    this.props.onSort(sortColumn);
  };

  renderSortIcon = (col) => {
    if (col.path !== this.props.sortColumn.path) {
      return;
    }
    if (this.props.sortColumn.order === "asc") {
      return <i className="fa fa-sort-asc" aria-hidden="true"></i>;
    }
    return <i className="fa fa-sort-desc" aria-hidden="true"></i>;
  };

  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map((col) => {
            return (
              <td
                className="clickable"
                key={Math.random() * 100000}
                onClick={() => this.raiseSort(col.path)}
              >
                {col.label}
                {this.renderSortIcon(col)}
              </td>
            );
          })}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
