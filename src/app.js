import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './components/Main';
import Header from './components/Header';
import 'bulma';
import './scss/style.scss';

import * as Sentry from '@sentry/browser';

class App extends React.Component {

  constructor() {
    super();
    Sentry.init({
      dsn: "https://83b23428cd2348f8833977688d1bbd6a@sentry.io/1409225"
    });
  }

  render() {
    return (
      <BrowserRouter>
        <main className="body">
          <Header />
          <div>
            <Switch>
              <Route exact path='/' component={Main}/>
            </Switch>
          </div>
        </main>
      </BrowserRouter>
    )
  }
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
