import React, { Component } from 'react';
import {
  Route,
  Link,
  BrowserRouter as Router
} from 'react-router-dom';

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Topic = ({ match }) => console.log('match', match) || (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

const Topics = ({ match }) => console.log('match', match) || (
  <div>
    <h2>The Course Topics</h2>
    <ul>
      <li><Link to={`${match.url}/rendering`}>Rendering with React</Link></li>
      <li><Link to={`${match.url}/components`}>Components</Link></li>
      <li><Link to={`${match.url}/props-v-state`}>Props v State</Link></li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={`${match.url}`} render={() => (
      <h3>Please select a topic</h3>
    )}/>

  </div>
)

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
