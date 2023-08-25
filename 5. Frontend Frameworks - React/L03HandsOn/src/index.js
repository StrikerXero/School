import React from "react";
import ReactDOM from "react-dom";

const App = (props) => {
  const favoriteCars = [
    "Honda CR-V ",
    "Toyota Highlander",
    "Ford F-150",
    "BMW X3",
    "Subaru Crosstrek",
  ];
  return <FavoriteCarsList favoriteCars={favoriteCars} />;
};

const FavoriteCarsList = (props) => {
  const carList = props.favoriteCars.map((favoriteCar, index) => (
    <li key={index}>{favoriteCar}</li>
  ));
  return <ul>{carList}</ul>;
};




ReactDOM.render(<App />, document.getElementById("root"));
