import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Players from "./Players";
import Teams from "./Teams";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/players" component={Players} />
            <Route exact path="/teams" component={Teams} />
            <Route
              render={() => <h1 className="text-center">404 Page not found</h1>}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
