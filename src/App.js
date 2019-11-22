import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, } from "react-router-dom";
import Home from './Home';
import Forums from './Forums';
// import Threads from './Threads';
// const databaseUrl = process.env.HEROKU_DB_URL || 'http://localhost:3000'
const databaseUrl = 'http://localhost:3000'

class App extends React.Component {

  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/forums/" component={Forums} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
