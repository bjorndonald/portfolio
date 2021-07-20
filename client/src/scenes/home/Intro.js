import React, { Component } from 'react';
import Navmain from './../_layout/Navmain';
import MouseIcon from './../../utlilities/MouseIcon';
import {TweenMax} from 'gsap/all';

export class Intro extends Component {
    render() {
        return (
            <div className="intro">
                

                <div className="heading">
                    <p>Portfolio of</p>
                    <h1>Bjorn-Donald Bassey</h1>
                    <h3>Web Developer</h3>
                </div>

                <a className="mouse" href="#"><MouseIcon /></a>
            </div>
        )
    }
}

export default Intro
