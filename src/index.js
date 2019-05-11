import React from "react";
import ReactDOM from "react-dom";
import Search from "./Search";
import Loader from "./Loader";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Image Prediction</h1>
      <Search />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
