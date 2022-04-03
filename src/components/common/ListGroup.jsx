import React, { Component } from "react";

class ListGroup extends Component {
  render() {
    const {
      onListGroup,
      currentListGroupItem,
      genres,
      textProperty,
      valueProperty,
    } = this.props;

    return (
      <ul className="list-group">
        <li
          onClick={() => onListGroup("All Genres")}
          key="All Genres"
          className={
            currentListGroupItem === "All Genres"
              ? "list-group-item active"
              : "list-group-item"
          }
        >
          All Genres
        </li>
        {genres.map((genre) => {
          return (
            <li
              onClick={() => onListGroup(genre[textProperty])}
              key={genre[valueProperty]}
              className={
                currentListGroupItem === genre[textProperty]
                  ? "list-group-item active"
                  : "list-group-item"
              }
            >
              {genre[textProperty]}
            </li>
          );
        })}
      </ul>
    );
  }
}

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};
export default ListGroup;
