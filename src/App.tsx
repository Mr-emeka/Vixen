import React from 'react';
import './sass/app.scss';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

// Pages
import Home from './container/HomePage'
import MoviePage from './container/MoviePage'


const App: React.FC = () => {

  return (
    <div>
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            component={Home}
          />
          <Route path="/movie/:id" component={MoviePage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
