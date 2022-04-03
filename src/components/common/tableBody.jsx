import React, { Component } from "react";
import _ from "lodash";

class TableBody extends Component {
  renderCell = (datum, col) => {
    if (col.content) {
      return col.content(datum);
    }
    return _.get(datum, col.path);
  };

  render() {
    const { data, columns } = this.props;
    return (
      <tbody>
        {data.map((datum) => (
          <tr key={Math.random() * 1000000}>
            {columns.map((col) => (
              <td key={Math.random() * 1000000}>
                {this.renderCell(datum, col)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
