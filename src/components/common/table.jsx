import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const Table = ({ onSort, sortColumn, data, columns }) => {
  return (
    <table className="table">
      <TableHeader onSort={onSort} sortColumn={sortColumn} columns={columns} />
      <TableBody data={data} columns={columns} />
    </table>
  );
};

export default Table;
