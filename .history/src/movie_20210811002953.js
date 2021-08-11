import React from "react";
import propTypes from "prop-types";

const Movie = ({ id, year, title, summary, poster }) => {
  return <h1>{title}</h1>;
};

Movie.propTypes = {
  id: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  summary: propTypes.string.isRequired,
  poster: propTypes.string.isRequired,
  year: propTypes.number.isRequired,
};

export default Movie;
