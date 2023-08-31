import React from "react";

const Header = ({ title }) => (
  <div>
    <a href="/">Home</a>
    <a href="/about">about</a>
    <a href="topics">topics</a>
    <h1>{title}</h1>
  </div>
);


export default Header;