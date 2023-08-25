//TODO: Try array and map()

import React from "react";
import ReactDOM from "react-dom";

//Colors
const blue = React.createElement("li", {}, "Blue");
const red = React.createElement("li", {}, "red");
const green = React.createElement("li", {}, "green");
const colorOL = React.createElement("ol", {}, red, green, blue);

//Music
const music1 = React.createElement("li", {}, "Regina Spektor");
const music2 = React.createElement("li", {}, "Antonín Dvořák");
const music3 = React.createElement("li", {}, "RadioHead");
const musicOL = React.createElement("ol", {}, music1, music2, music3);

//Food
const food1 = React.createElement("li", {}, "Pizza");
const food2 = React.createElement("li", {}, "Southwest Salad");
const food3 = React.createElement("li", {}, "Gnocchi");
const foodOL = React.createElement("ol", {}, food1, food2, food3);

//Websites
const google = React.createElement(
  "li",
  {},
  React.createElement("a", { href: "http://google.com" }, "www.Google.com")
);
const facebook = React.createElement(
  "li",
  {},
  React.createElement("a", { href: "http://facebook.com" }, "www.FaceBook.com")
);
const instagram = React.createElement(
  "li",
  {},
  React.createElement(
    "a",
    { href: "http://instagram.com" },
    "www.Instagram.com"
  )
);
const websitesOL = React.createElement("ol", {}, google, facebook, instagram);

// ReactDOM.render(
//   React.createElement("h1", {}, "My Favorite Things",),
//   document.getElementById("header")
// );

ReactDOM.render(
  React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "My Favorite Things"),
    React.createElement(
      "ul",
      {},
      React.createElement("ul", {}, "Favorite color", colorOL),
      React.createElement("ul", {}, "Favorite Music", musicOL),
      React.createElement("ul", {}, "Favorite Foods", foodOL),
      React.createElement("ul", {}, "Favorite Websites", websitesOL)
    )
  ),
  document.getElementById("root")
);
