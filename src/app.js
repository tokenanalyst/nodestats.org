import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './components/Main';
import Header from './components/Header';
import 'bulma';

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <main className="body">
          <Header />
          <div>
            <Switch>
              <Route exact path='/nodestats' component={Main}/>
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
