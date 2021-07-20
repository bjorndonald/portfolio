import React, { Component } from 'react';
import MainLogo from './../../utlilities/MainLogo';
import BackIcon from './../../utlilities/BackIcon';

export class NavContact extends Component {

    constructor(props){
        super(props);
        this.workClick = this.workClick.bind(this);
        this.aboutClick = this.aboutClick.bind(this);
        this.contactClick = this.contactClick.bind(this);
        this.homeClick = this.homeClick.bind(this);
        this.backClick = this.backClick.bind(this);
    }

    workClick(){
        this.props.workClick();
    }

    backClick(){
        this.props.backClick();
    }

    aboutClick(){
        this.props.aboutClick();
    }

    contactClick(){
        this.props.contactClick();
    }

    homeClick(){
        this.props.homeClick();
    }

    render() {
        return (
            <nav className="contact">
                <ul>
                    <li><a onClick={this.backClick}><BackIcon/>back</a></li>
                    <li><a onClick={this.workClick}>work</a></li>
                    <li>
                        <a onClick={this.homeClick} className="logo">
                            <MainLogo />
                        </a>
                    </li>
                    <li><a onClick={this.aboutClick}>about</a></li>
                    <li><a>resume</a></li>
                </ul>
            </nav>
        )
    }
}

export default NavContact
