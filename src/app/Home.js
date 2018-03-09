import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route
} from 'react-router-dom';

const Child = ({ match }) => console.log('match-property', match) || (
  <div>
    <h2>ID: {match.params.id}</h2>
  </div>
)

export class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h2>Accounts</h2>
          <ul>
            <li><Link to="/netflix">Netflix</Link></li>
            <li><Link to="/zillow">Zillow Group</Link></li>
            <li><Link to="/yahoo">Yahoo</Link></li>
            <li><Link to="/modus-create">Modus Create</Link></li>
          </ul>

          <Route path='/:id' component={Child}/>
        </div>
      </Router>

    )
  }
}
