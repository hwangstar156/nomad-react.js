import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      movies: [],
    };
  }

  getMovies = async () => {
    const movies = await axios.get("https://yts.mx/api/v2/list_movies.json");
  };

  async componentDidMount() {}

  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading" : "We are ready"}</div>;
  }
}

export default App;
