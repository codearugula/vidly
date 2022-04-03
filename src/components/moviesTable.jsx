import React, { Component } from "react";
import Like from "./common/Like";
import Table from "./common/table";

class MoviesTable extends Component {
  columns = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      content: (movie) => (
        <Like movie={movie} onLike={() => this.props.onLike(movie)} />
      ),
    },
    {
      content: (movie) => (
        <button
          className="btn btn-sm btn-danger"
          onClick={() => this.props.onDelete(movie)}
        >
          Delete
        </button>
      ),
    },
  ];
  render() {
    const { currentMovies, sortColumn, onSort } = this.props;
    return (
      <Table
        onSort={onSort}
        sortColumn={sortColumn}
        data={currentMovies}
        columns={this.columns}
      />
    );
  }
}

export default MoviesTable;
