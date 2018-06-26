import React from "react";
import ReactDOM from "react-dom";

console.log("hello");

const Index = () => {
  return <div>Hello React!</div>;
};

ReactDOM.render(<Index />, document.getElementById("index"));