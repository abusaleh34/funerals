import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Home from './components/Home';
import MosqueManagement from './components/MosqueManagement';
import FuneralManagement from './components/FuneralManagement';




function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      
   <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/mosque-management" component={MosqueManagement} />
          <Route path="/funeral-management" component={FuneralManagement} />
          {/* ...more routes as necessary */}
        </Switch>
      </Router>
   </Provider>
  </>
  ); 
}

export default App;
