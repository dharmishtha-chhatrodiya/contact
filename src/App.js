import logo from "./logo.svg";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from "react-redux";
import store from './store'
import AllContactList from "./Components/AllContactList";
import ViewContact from "./Components/ViewContact";

function App(props) {


  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={AllContactList} />
          <Route path="/view-contact" component={ViewContact} />
        </Switch>
      </Router>

    </Provider>
  );
}


export default (App);
