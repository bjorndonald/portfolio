import React, { Component } from 'react';
import './home.scss';
import { Redirect } from 'react-router-dom';
import Preloader from './../preloader/Index';
import { func } from 'prop-types';
import Intro from './Intro';
import $ from 'jquery';
import { Transition } from "react-transition-group";
import { TweenMax, TimelineMax, Power1, gsap } from "gsap/all";
import Navmain from './../_layout/Navmain';
import MouseIcon from './../../utlilities/MouseIcon';
import { homeExit } from './../../utlilities/ExitFunctions';
import { WorkEnter, HomeEnter, AboutEnter } from './../../utlilities/EnterFunctions';
const startState = { autoAlpha: 0, y: -50 };
const texts = document.querySelectorAll("#home > *");
export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      next: false,
      nextPage: null
    }
    this.workClick = this.workClick.bind(this);
    this.aboutClick = this.aboutClick.bind(this);
    this.contactClick = this.contactClick.bind(this);
    //this.content = <Preloader /> ;
  }

  componentDidMount() {
    //$(".other-page").css("width", "0vw");
    $(".page").css("width", "95vw");
    $(".page").css("height", "calc(100vh - 5vw)");
    $(".page").css("left", "2.5vw");
    $(".page").css("top", "2.5vw");
    $(".page").css("right", "2.5vw");
    HomeEnter(this.props.location.state.from);
  }

  workClick() {
    var th = this;
    homeExit("work");
    setTimeout(function () {
      th.setState({
        nextPage: "work"
      });
    }, 3000);
  }

  aboutClick() {
    var th = this;
    homeExit("about");
    setTimeout(function () {
      th.setState({
        nextPage: "about"
      });
    }, 3000);
  }

  contactClick() {
    var th = this;
    homeExit("contact");
    setTimeout(function () {
      th.setState({
        nextPage: "contact"
      });
    }, 3000);
  }

  render() {
    return (
      this.state.nextPage ?
        <Redirect to={{ pathname: `/${this.state.nextPage}`, state: { from: this.props.location.pathname } }} />
        :
        <div id="home">
          <div className="intro">
            <Navmain workClick={this.workClick}
            aboutClick={this.aboutClick} contactClick={this.contactClick} />

            <div className="heading">
              <p>Portfolio of</p>
              <h1>Bjorn-Donald Bassey</h1>
              <h3>Web Developer</h3>
            </div>

            <a className="mouse"><MouseIcon /></a>
          </div>
        </div>

    )
  }
}

export default Home
