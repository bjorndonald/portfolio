import React, { Component } from 'react';
import Logo from './../../utlilities/Logo';
import { TweenMax } from 'gsap/all';
import { Redirect } from 'react-router-dom';
import './preloader.scss';

export class Preloader extends Component {
    constructor(props) {
        super(props);
        this.logo = React.createRef();
        this.page = React.createRef();
        //console.log(this.props.history);
        this.state = {
            done: false
        }
    }

    componentDidMount() {
        var th = this;
        setTimeout(function () {
            TweenMax.to(".page", 0.35, {
                width: "95vw",
                height: "calc(100vh - 5vw)",
                top: "2.5vw",
                left: "2.5vw",
                right: "2.5vw",
                onComplete: null,
                delay: 0.5
            });

            TweenMax.to(".other-page", 0.35, {
                //width: "95vw",
                height: "calc(100vh - 5vw)",
                left: "2.5vw",
                top: "2.5vw",
                onComplete: null,
                delay: 0.5
            });

            TweenMax.to(".preloader-svg", 0.35, {
                width: "10vw",
                top: "2.5vw",
                left: "2.5vw",
                onComplete: function () {
                    
                },
                delay: 0.75
            });

        }, 4000, );

        setTimeout(function () {
            th.setState({
                done: true
            });
        }, 6000)
    }

    render() {
        //console.log(this.props.history);
        return (
            this.state.done ?
                <Redirect to={{pathname: `/home`, state: {from: this.props.location.pathname}}} />
                :
                <div className="preloader">
                    <Logo ref={this.logo} />
                </div>
        )
    }
}

export default Preloader
