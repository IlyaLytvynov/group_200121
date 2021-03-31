import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import { Home } from './HomePage';
import { Header } from './Header.jsx';

const OtherPage = () => {
  return <h1>OTHER PAGE</h1>;
};

function App() {
  return (
    <Router>
      <div>
        <Header />
        <main>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/other'>
              <OtherPage />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
