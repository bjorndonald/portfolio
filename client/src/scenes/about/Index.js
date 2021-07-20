import React, { Component } from 'react';
import './about.scss';
import $ from 'jquery';
import { gsap } from 'gsap/all'
import Navmain from './../_layout/Navmain';
import {Redirect} from 'react-router-dom';
import {AboutEnter} from './../../utlilities/EnterFunctions';
import {aboutExit }from './../../utlilities/ExitFunctions';
import SkillsIcon from './../../utlilities/SkillsIcon';
import ApplicationIcon from './../../utlilities/ApplicationIcon';

export class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            next: false,
            nextPage: null
        }
        this.contactClick = this.contactClick.bind(this);
        this.workClick = this.workClick.bind(this);
    }
    componentDidMount() {
        $(".other-page").css("width", "47.5vw");
        $(".other-page").css("z-index", "2");
        $(".page").css("width", "95vw");
        $(".page").css("background", "#000000");
        $(".page, .other-page").css("height", "calc(100vh - 5vw)");
        $(".page, .other-page").css("left", "2.5vw");
        $(".page, .other-page").css("top", "2.5vw");
        $(".page").css("right", "2.5vw");
        AboutEnter(this.props.location.state.from);
    }

    

    contactClick() {
        var th = this;
        aboutExit("contact")
        setTimeout(function () {
            th.setState({
                nextPage: "contact"
            });
        }, 3400);

    }

    workClick() {
        var th = this;
        aboutExit("work");
        setTimeout(function () {
            th.setState({
                nextPage: "work"
            });
        }, 3400);

    }

    homeClick(){
        var th = this;
        aboutExit("home");
        setTimeout(function () {
            th.setState({
                nextPage: "home"
            });
        }, 3000);
    }

    aboutClick(){
        var th = this;
        aboutExit("about");
        setTimeout(function () {
            th.setState({
                nextPage: "about"
            });
        }, 3000);
    }

    render() {
        return (
            this.state.nextPage ?
            <Redirect to={{pathname: `/${this.state.nextPage}`, state: {from: this.props.location.pathname}}} />
                :
            <div id="about">
                <Navmain homeClick={this.homeClick} contactClick = {this.contactClick} workClick={this.workClick}/>

                <div className="content">
                    <div className="left-section">
                        <h1>About Me</h1>
                        <p>
                            I am an application and web developer with a bachelor's degree
                            in Computer Engineering currently searching for a job to gain
                            valuable work experience in programming. I have practical
                            experience building efficient and scalable web and software
                            applications.
                        </p>
                        <p>
                            On a daily basis, I work on complex front-end projects with
                            up-to-date languages and technologies, and I also have a decent
                            grasp of server-side development. While I enjoy experimenting
                            with new frameworks and libraries, I understand the importance
                            of placing focus on the end goal: delivering a beautiful, functional
                            product to the user/client.
                        </p>

                        <p>
                            I see every new experience as an opportunity to learn. My favorite
                            projects are those that require me to push beyond my boundaries
                            and acquire new skills and knowledge in order to succeed.
                        </p>
                    </div>
                    <div className="right-section">
                        <h1><span><img src={require(`./../../images/skills.png`)} alt="" /></span> Skills </h1>
                        <p>
                            HTML5, CSS3, Sass, JavaScript, jQuery, Node.js, ReactJS,
                            React Native, AngularJS, ExpressJS, Git, ASP.NET MVC, C#,
                            WPF, Python, Django.
                        </p>

                        <h1><span><ApplicationIcon /></span> Application </h1>
                        <p>
                            Visual Studio Code, Visual Studio, Jupyter python client,
                            Adobe XD, Adobe Photoshop, Adobe Illustrator, Figma.
                        </p>
                    </div>
                </div>

            </div>
        )
    }
}

export default About
