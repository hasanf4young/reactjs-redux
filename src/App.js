import React, { Component } from "react";
import NavBarComponent from "./components/NavBarComponent";
import JumbotronComponent from "./components/JumbotronComponent";
import HomeContainer from "./containers/HomeContainer"
import CreateUserContainer from "./containers/CreateUserContainer"
import EditUserContainer from "./containers/EditUserContainer"
import DetailUserContainer from "./containers/DetailUserContainer"

import {
  BrowserRouter,
  Route,
} from "react-router-dom";

export default class App extends Component {

  render() {
    return (
      <div>
        <NavBarComponent />
        <JumbotronComponent />
        <BrowserRouter>
          <Route path="/" exact>
            <HomeContainer />
          </Route>
          <Route path="/create" exact>
            <CreateUserContainer />
          </Route>
          <Route path="/detail/:id" exact>
            <DetailUserContainer />
          </Route>
          <Route path="/edit/:id" exact>
            <EditUserContainer />
          </Route>
        </BrowserRouter>
      </div>
    );
  }
}
