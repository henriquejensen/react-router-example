import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact render={() => 'Rota principal'} />
          <Route path="/outra" render={() => 'Outra rota'} />
        </Switch>
      </Router>
    );
  }
}

export default App;
