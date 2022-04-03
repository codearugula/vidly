import { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import MoviesTable from "./moviesTable";
import Pagination from "./common/Pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "./common/ListGroup";
import { getGenres } from "../services/fakeGenreService";
import { orderBy } from "lodash";

class Movies extends Component {
  state = {
    movies: getMovies(),
    genres: getGenres(),
    pageSize: 4,
    currentPage: 1,
    currentListGroupItem: "All Genres",
    sortColumn: {
      order: "asc",
      path: "title",
    },
  };

  handleDelete = (e) => {
    this.setState({ movies: this.state.movies.filter((f) => f !== e) });
  };

  handleLike = (movie) => {
    let movies = [...this.state.movies];
    let index = movies.indexOf(movie);
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleListGroup = (genre) => {
    this.setState({ currentListGroupItem: genre, currentPage: 1 });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  getPagedData = () => {
    let { movies, pageSize, currentPage, currentListGroupItem, sortColumn } =
      this.state;

    const filteredMovies =
      currentListGroupItem === "All Genres"
        ? movies
        : movies.filter((movie) => movie.genre.name === currentListGroupItem);

    const sorted = orderBy(
      filteredMovies,
      [sortColumn.path],
      [sortColumn.order]
    );

    const currentMovies = paginate(sorted, pageSize, currentPage);

    return [filteredMovies.length, currentMovies];
  };

  render() {
    let { movies, pageSize, currentPage, genres, currentListGroupItem } =
      this.state;

    if (movies.length === 0) {
      return <div>There are no movies to show.</div>;
    }
    return (
      <>
        <div className="row">
          <div className="col-3 m-5">
            <ListGroup
              onListGroup={this.handleListGroup}
              genres={genres}
              currentListGroupItem={currentListGroupItem}
            />
          </div>
          <div className="col">
            <div>Showing {this.getPagedData()[0]} movies in the database.</div>
            <MoviesTable
              onSort={this.handleSort}
              currentMovies={this.getPagedData()[1]}
              onLike={this.handleLike}
              onDelete={this.handleDelete}
              sortColumn={this.state.sortColumn}
            />

            <Pagination
              itemCount={this.getPagedData()[0]}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
            />
          </div>
        </div>
      </>
    );
  }
}

export default Movies;
