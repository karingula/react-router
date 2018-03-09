import React, { Component } from 'react';

export class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/courses">Courses</Link></li>
          </ul>

          <hr/>

          <Route  exact path="/" component={Home} />
          <Route path="/about" component={About}/>
          <Route path="/courses" component={Topics}/>
        </div>
      </Router>
    )
  }
}
