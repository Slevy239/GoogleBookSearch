import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Search from './pages/Search';
import Saved from './pages/Saved';
// import './App.css';
import Navbar from './components/Navbar';


const App = () => {

  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Saved} />
          <Route exact path="/Saved" component={Saved} />
          <Route exact path="/Search" component={Search} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;