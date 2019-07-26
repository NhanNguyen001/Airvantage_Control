import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Dashboard from "./components/dashboard/Dashboard";
import Login from "./components/auth/Login";
import Alert from "./components/layout/Alert";
import CreateModule from "./components/module-forms/CreateModule";
import Private from "./components/routing/Private";
// Redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAutToken";

import "./App.css";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <section className="container form-layout">
            <Alert />
            <Switch>
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Private exact path="/create-module" component={CreateModule} />
              <Private exact path="/dashboard" component={Dashboard} />
            </Switch>
          </section>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
