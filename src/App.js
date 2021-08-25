import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import './styles/App.css';
import Home from './pages/Home';
import AnimalList from './pages/AnimalList';

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/animals">Animals</Link></li>
        </nav>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/animals">
            <AnimalList />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
