import React, { useState, Component } from "react";
import axios from "axios";
import Image from "./Image";
import "./SearchResult.scss";
import Loader from "./Loader";

class SearchResult extends Component {
  state = {
    url: [],
    loading: true,
    imageResult: []
  };

  componentDidMount() {
    console.log("[KeyWord from Search]", this.props.keyword);
    axios
      .get(
        `https://api.unsplash.com/search/photos?page=1&query=${
          this.props.keyword
        }&client_id=ace0e5759300797dbce5e49fbf62244fe5141e8ac4093d93da48a1c040b3c592`
      )
      .then(result => {
        let url = result.data.results.map(data => data.urls.full);
        this.setState({ url, loading: false });

        this.state.imageResult = [...url];
      });
  }
  render() {
    var image = null;
    if (this.state.url.length) {
      image = this.state.url.map((url, index) => {
        return <Image key={index} url={url} />;
      });
    }
    return (
      <div className="">
        <h1>Search Result</h1>
        <h1>{this.props.keyword}</h1>
        {this.state.loading === true ? <Loader /> : null}
        <div className="container">{image}</div>
      </div>
    );
  }
}

export default SearchResult;
