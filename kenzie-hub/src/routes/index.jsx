import { Switch, Route } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import PageNotFound from "../pages/PageNotFound";

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

        <Route path="/404">
          <PageNotFound />
        </Route>

        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </>
  );
};
export default Routes;
