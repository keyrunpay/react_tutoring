import React from "react";
import { Switch, Route, withRouter, NavLink } from "react-router-dom";
import Quiz from "./pages/Quiz";
import Leaderboard from "./pages/Leaderboard";
import Form from "./pages/Form";

function App() {
  // const name = "this";
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName="active" exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/leaderboard" exact>
              Leaderboard
            </NavLink>
            {/* <Login /> */}
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/" exact component={Quiz} />
        <Route path="/form" exact component={Form} />
        <Route
          path="/leaderboard"
          exact
          // render={(props) => {
          //   return <Leaderboard {...props} />;
          // }}
          component={Leaderboard}
        />
      </Switch>
    </div>
  );
}

export default withRouter(App);

// function connect(Component) {
//   return () => {
//     return <Component this="smth" />;
//   };
// }
