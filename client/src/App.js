import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';
import Home from './scenes/home/Index';
import Preloader from './scenes/preloader/Index';
import { gsap } from 'gsap';
import $ from 'jquery';
import { WorkEnter, HomeEnter, AboutEnter } from './utlilities/EnterFunctions';
import Navmain from './scenes/_layout/Navmain';
import Work from './scenes/work/Index';
import Contact from './scenes/contact/Index';
import About from './scenes/about/Index';
import { Transition, TransitionGroup } from 'react-transition-group';
var nextLocation = {};
var prevLocation = {};
function App() {
  const onExit = (location, node) => {
    prevLocation = location;
  }
  const onEnter = (node, location) => {
    nextLocation = location;
  }

  return (
    <BrowserRouter>

      <div className="other-page"></div>
      <div className="page">
        <Route render={({ location }) => (
          <TransitionGroup>
            <Transition
              key={location.key}
              timeout={300}
              onEnter={(node) => onEnter(node, location)}
              onExit={(node) => onExit(location, node)}
            >
              <Switch location={location}>
                <Route exact path="/" component={Preloader} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/work" component={Work} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} />
              </Switch>
            </Transition>
          </TransitionGroup>
        )} />
      </div>
    </BrowserRouter>
  );
}

export default App;
