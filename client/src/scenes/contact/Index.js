import React, { Component } from 'react';
import './contact.scss';
import NavContact from './../_layout/NavContact';
import $ from 'jquery';
import {gsap} from 'gsap/all';
import {Redirect} from 'react-router-dom';
import LinkedinIcon from './../../utlilities/LinkedinIcon';
import TwitterIcon from './../../utlilities/TwitterIcon';
import GithubIcon from './../../utlilities/GithubIcon';
import {ContactEnter} from './../../utlilities/EnterFunctions';
import {contactExit} from './../../utlilities/ExitFunctions';

export class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            show: true,
            done: true,
            next: false,
            nextPage: null
        }
        this.backClick = this.backClick.bind(this);
        this.aboutClick = this.aboutClick.bind(this);
        this.homeClick = this.homeClick.bind(this);     
        this.workClick = this.workClick.bind(this);     
    }
    
    componentDidMount(){
        $(".other-page").css("top", "0vw");
        $(".other-page").css("left", "0vw");
        $(".other-page").css("right", "100vw");
        $(".other-page").css("width", "100vw");
        $(".other-page").css("height", "100vw");

        $(".page").css("width", "45vw");
        $(".page").css("background", "#ffffff");
        $(".page").css("height", "25vw");
        $(".page").css("top", "12vw");
        $(".page").css("left", "27.5vw");
        $(".page").css("z-index", "2");

        ContactEnter(document);
    }

    backClick(){
        var th = this;
        contactExit(this.props.location.state.from);
        setTimeout(function () {
            th.setState({
                nextPage: th.props.location.state.from
            });
        }, 3000);
    }

    homeClick(){
        var th = this;
        contactExit("/home");
        setTimeout(function () {
            th.setState({
                nextPage: "/home"
            });
        }, 3000);
    }

    aboutClick(){
        var th = this;
        contactExit("/about");
        setTimeout(function () {
            th.setState({
                nextPage: "/about"
            });
        }, 3000);
    }

    workClick(){
        var th = this;
        contactExit("/work");
        setTimeout(function () {
            th.setState({
                nextPage: "/work"
            });
        }, 3000);
    }

    render() {
        return (
            this.state.nextPage ?
            <Redirect to={{pathname: `${this.state.nextPage}`, state: {from: this.props.location.pathname}}} />
                :
            <div id="contact">
                <NavContact backClick={this.backClick}
                workClick={this.workClick} aboutClick={this.aboutClick}
                homeClick={this.homeClick}/>
                <p>
                Feel free to get in touch with me if you are interested in obtaining my services for full 
                employment or on a contract basis.
                </p>
                <div className="details">
                    <ul>
                        <li>Email</li>
                        <li>bjorndonaldb@yahoo.com</li>
                    </ul>
                    <ul>
                        <li>Phone Numbers</li>
                        <li>234-8188183562, 234-9052938845</li>
                    </ul>
                </div>
                <ul className="social">
                    <li><a href=""><LinkedinIcon/></a></li>
                    <li><a href=""><GithubIcon /></a></li>
                    <li><a href=""><TwitterIcon/></a></li>
                </ul>
            </div>
        )
    }
}

export default Contact
