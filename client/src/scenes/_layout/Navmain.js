import React, { Component } from 'react';
import MainLogo from './../../utlilities/MainLogo';

export class Navmain extends Component {

    constructor(props){
        super(props);
        this.workClick = this.workClick.bind(this);
        this.aboutClick = this.aboutClick.bind(this);
        this.contactClick = this.contactClick.bind(this);
        this.homeClick = this.homeClick.bind(this);
    }

    workClick(){
        this.props.workClick();
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
            <nav className="main">
                    <a className="logo" onClick={this.homeClick}>
                        <MainLogo />
                    </a>

                    <ul>
                        <li><a onClick={this.workClick}>work</a></li>
                        <li><a onClick={this.aboutClick}>about</a></li>
                        <li><a>resume</a></li>
                        <li><a onClick={this.contactClick}>contact</a></li>
                    </ul>
                
            </nav>
        )
    }
}

export default Navmain
