import { Switch, Route } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";

const Routes = ({ homePage, setHomePage }) => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>

        <Route exact path="/register">
          <Register homePage={homePage} setHomePage={setHomePage} />
        </Route>

        <Route exact path="/home/:id">
          <Home homePage={homePage} setHomePage={setHomePage} />
        </Route>
      </Switch>
    </>
  );
};
export default Routes;
