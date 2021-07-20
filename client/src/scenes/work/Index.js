import React, { Component, Fragment } from 'react'
import './work.scss'
import { Redirect } from 'react-router-dom'
import Navmain from './../_layout/Navmain'
import { Transition, TransitionGroup } from 'react-transition-group'
import { gsap } from 'gsap/all'
import $ from 'jquery'
import {
  WorkEnter,
  HomeEnter,
  AboutEnter
} from './../../utlilities/EnterFunctions'
import { workExit } from './../../utlilities/ExitFunctions'
import works from './works'

let scrollTop = $('#work').scrollTop()

const onExit = () => {
  gsap.to(document.querySelector('#work .left-section h1'), 0.7, {
    y: 30,
    delay: 0.5,
    ease: 'power3.InOut',
    opacity: 0,
    stagger: {
      amount: 0.6
    }
  })

  gsap.to(document.querySelector('#work .left-section p'), 0.6, {
    y: 30,
    delay: 0.6,
    ease: 'power3.InOut',
    opacity: 0,
    stagger: {
      amount: 0.6
    }
  })

  gsap.to(
    document.querySelectorAll('#work .left-section .details ul li:last-child'),
    0.6,
    {
      y: 30,
      delay: 0.7,
      ease: 'power3.InOut',
      opacity: 0,
      stagger: {
        amount: 0.6
      }
    }
  )

  gsap.to(document.querySelectorAll('#work .right-section img'), 0.6, {
    y: 30,
    delay: 0.3,
    ease: 'power3.InOut',
    opacity: 0,
    stagger: {
      amount: 0.6
    }
  })
}

const onEnter = () => {
  gsap.to(document.querySelector('#work .left-section h1'), 0.6, {
    y: 0,
    delay: 0.5,
    ease: 'power3.InOut',
    opacity: 1,
    stagger: {
      amount: 0.6
    }
  })

  gsap.to(document.querySelector('#work .left-section p'), 0.6, {
    y: 0,
    delay: 0.6,
    ease: 'power3.InOut',
    opacity: 1,
    stagger: {
      amount: 0.6
    }
  })

  gsap.to(
    document.querySelectorAll('#work .left-section .details ul li:last-child'),
    0.6,
    {
      y: 0,
      delay: 0.7,
      ease: 'power3.InOut',
      opacity: 1,
      stagger: {
        amount: 0.6
      }
    }
  )

  gsap.to(document.querySelectorAll('#work .right-section img'), 0.6, {
    y: 0,
    delay: 0.3,
    ease: 'power3.InOut',
    opacity: 1,
    stagger: {
      amount: 0.6
    }
  })
}

export class Work extends Component {
  constructor (props) {
    super(props)
    this.state = {
      id: 0,
      show: true,
      done: true,
      next: false,
      nextPage: null
    }

    this.nextWork = this.nextWork.bind(this)
    this.prevWork = this.prevWork.bind(this)
    this.handleScroll = this.handleScroll.bind(this)
    this.aboutClick = this.aboutClick.bind(this)
    this.homeClick = this.homeClick.bind(this)
    this.contactClick = this.contactClick.bind(this)
  }

  homeClick () {
    var th = this
    workExit('home')
    setTimeout(function () {
      th.setState({
        nextPage: 'home'
      })
    }, 3000)
  }

  aboutClick () {
    var th = this
    workExit('about')
    setTimeout(function () {
      th.setState({
        nextPage: 'about'
      })
    }, 3000)
  }

  contactClick () {
    var th = this
    workExit('contact')
    setTimeout(function () {
      th.setState({
        nextPage: 'contact'
      })
    }, 3000)
  }

  handleScroll (event) {
    // console.log(event.target);
    console.log($(event.target).scrollTop())
    const th = this
    var timer = this.state.done ? 0 : 1000

    if ($(event.target).scrollTop() > scrollTop) {
      th.nextWork()
    } else {
      th.prevWork()
    }

    scrollTop = $(event.target).scrollTop()
  }

  componentDidMount () {
    console.log(this.props.location)
    $('.other-page').css('width', 'calc(95vw * 0.6)')
    $('.page').css('width', '95vw')
    $('.page , .other-page').css('height', 'calc(100vh - 5vw)')
    $('.page , .other-page').css('left', '2.5vw')
    $('.page , .other-page').css('top', '2.5vw')
    $('.page').css('right', '2.5vw')
    console.log(document.querySelector('#work .content'))
    document
      .querySelector('#work')
      .addEventListener('scroll', this.handleScroll, false)
    WorkEnter(this.props.location.state.from)
  }

  nextWork () {
    const th = this
    console.log(this.state.done)
    setTimeout(function () {
      th.setState(
        {
          done: true
        },
        function () {
          console.log(this.state.done)
        }
      )
    }, 1000)

    if (this.state.done) {
      onExit()
      console.log(this.state.done)
      if (works.length <= this.state.id + 1) {
        this.setState(
          {
            done: false
          },
          function () {
            console.log(this.state.done)
          }
        )
        setTimeout(function () {
          th.setState(
            {
              show: !th.state.show,
              id: 0
            },
            function () {
              setTimeout(function () {
                onEnter()
              }, 500)
            }
          )
        }, 1000)
      } else {
        this.setState(
          {
            done: false
          },
          function () {
            console.log(this.state.done)
          }
        )
        setTimeout(function () {
          th.setState(
            {
              show: !th.state.show,
              id: works.length == th.state.id + 1 ? 0 : th.state.id + 1
            },
            function () {
              setTimeout(function () {
                onEnter()
              }, 500)
            }
          )
        }, 1000)
      }
      document.getElementById('work').scrollBy(0, -50)
    }
  }

  prevWork () {
    const th = this
    console.log(this.state.done)
    setTimeout(function () {
      th.setState(
        {
          done: true
        },
        function () {
          console.log(this.state.done)
        }
      )
    }, 1000)

    if (this.state.done) {
      onExit()
      console.log(this.state.done)
      if (0 >= this.state.id - 1) {
        this.setState(
          {
            done: false
          },
          function () {
            console.log(this.state.done)
          }
        )
        setTimeout(function () {
          th.setState(
            {
              show: !th.state.show,
              id: works.length - 1
            },
            function () {
              setTimeout(function () {
                onEnter()
              }, 500)
            }
          )
        }, 1000)
      } else {
        this.setState(
          {
            done: false
          },
          function () {
            console.log(this.state.done)
          }
        )
        setTimeout(function () {
          th.setState(
            {
              show: !th.state.show,
              id: 0 == th.state.id - 1 ? works.length - 1 : th.state.id - 1
            },
            function () {
              setTimeout(function () {
                onEnter()
              }, 500)
            }
          )
        }, 1000)
      }
      document.getElementById('work').scrollBy(0, 10)
    }
  }

  render () {
    //var work_data = JSON.parse(works);
    console.log(this.state.id)
    return this.state.nextPage ? (
      <Redirect
        to={{
          pathname: `/${this.state.nextPage}`,
          state: { from: this.props.location.pathname }
        }}
      />
    ) : (
      <div id='work'>
        <Navmain
          aboutClick={this.aboutClick}
          homeClick={this.homeClick}
          contactClick={this.contactClick}
        />

        <div className='content'>
          <div className='left-section'>
            <h1>{works[this.state.id].title}</h1>
            <p>{works[this.state.id].description}</p>
            <div className='details'>
              <ul>
                <li>Category</li>
                <li>{works[this.state.id].category}</li>
              </ul>
              <ul>
                <li>Agency</li>
                <li>{works[this.state.id].agency}</li>
              </ul>
              <ul>
                <li>Year</li>
                <li>{works[this.state.id].year}</li>
              </ul>
            </div>
            <div className='buttons'>
              <a href={works[this.state.id].link} className='btn btn-visit'>
                Visit Site
              </a>

              <a className='visit' onClick={this.nextWork}>
                Next
              </a>
            </div>
          </div>
          <div className='right-section'>
            <img
              src={require(`./../../images/${works[this.state.id].image}.png`)}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Work
