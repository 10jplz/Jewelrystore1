import React from "react";
import { Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import { NavBar, Footer, Loading } from "./components";
import { Home, Profile, ExternalApi } from "./views";
import ProtectedRoute from "./auth/protected-route";
import Items from "./views/Items";
import addItems from "./views/addItem";

import "./app.css";

const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div id="app" className="d-flex flex-column h-100">
      <NavBar />
      <div className="container flex-grow-1">
        <Switch>
          <Route exact path={["/", "/items"]}>
            <Items />
          </Route>
          <Route exact path="/addItem" component={addItems} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
};

export default App;