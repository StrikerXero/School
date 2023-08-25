import React from "react";
import Things from "./Things";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const FavoriteThings = ({ match }) => (
  <div>
    <h2>Favorite Things</h2>
    <ul>
      <li>
        <Link to={`${match.url}/4Runner`}>Favorite Car</Link>
      </li>
      <li>
        <Link to={`${match.url}/Everything`}>Favorite Food</Link>
      </li>
      <li>
        <Link to={`${match.url}/TopGun`}>Favorite Movie</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Things} />
    <Route
      exact
      path={"{match.url}"}
      render={() => <H3>See What my Favorites are</H3>}
    />
  </div>
);

export default FavoriteThings;
