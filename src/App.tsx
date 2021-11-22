import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.scss';

import Navbar from './components/base/app-navbar/NavBar'

import About from './routes/about/About';
import Gallery from './routes/gallery/Gallery';
import Projects from './routes/projects/Projects';
import NoMatch from './routes/noMatch/NoMatch';
import Ugly from './routes/uglySite/Ugly';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar></Navbar>
      <Switch >
        <Route path='/' exact component={Ugly}/>
        <Route path='/gallery' exact component={Gallery}/>
        {/* <Route path='/about' exact component={About} /> */}
        <Route>
          <NoMatch />
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
