import React, { Fragment, useState } from "react";
import "./Search.scss";

import SearchResult from "./SearchResult";
const search = () => {
  const [state, setState] = useState({ keyword: "", evt: false, control: "" });
  var result = null;
  const searchChangeHandler = e => {
    setState({ keyword: e.target.value });
  };

  const submitForm = event => {
    event.preventDefault();
    setState({ evt: true, control: <SearchResult keyword={state.keyword} /> });
  };

  return (
    <Fragment>
      <form onSubmit={submitForm}>
        <input
          type="text"
          className="search__box"
          value={state.keyword}
          placeholder="Keyword or URL link"
          onChange={event => searchChangeHandler(event)}
        />
        <button type="submit" className="search__btn">
          Search
        </button>
      </form>

      <h5>{state.keyword}</h5>
      {state.control}
    </Fragment>
  );
};

export default search;
