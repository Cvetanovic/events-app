import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Main from "./components/panel/Main";
import EventDetails from "./components/events/EventDetails";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import CreateEvent from "./components/events/CreateEvent";
import PageNotFound from "./components/PageNotFound";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />

          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/event/:id" component={EventDetails} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/create_event" component={CreateEvent} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
