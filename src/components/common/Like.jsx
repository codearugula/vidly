import React from "react";

const Like = ({ movie, onLike }) => {
  let classes = "fa fa-heart";
  if (!movie.liked) {
    classes += "-o";
  }
  return (
    <i
      onClick={onLike}
      className={classes}
      style={{ cursor: "pointer" }}
      aria-hidden="true"
    ></i>
  );
};

export default Like;
