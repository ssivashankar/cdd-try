import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Nav extends Component {
  state = { activeItem: 'home', loggedIn: true }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  renderContent = () => {
    if (this.state.loggedIn) {
       return <div className="ui secondary pointing menu">
             <Link className="item" to='/users'>
              Users
            </Link>
            <Link className="item" to='/groups'>
              Groups
            </Link>
            <Link className="item" to='/test'>
              Test
            </Link>
          </div>
    }
  }

  fakeAuth = () => {
    if (this.state.loggedIn) {
      return 'Welcome John'
    } else {
      return <Link to='login'> Login</Link>
    }
  }

  render() {
    const { activeItem, loggedIn } = this.state

    return (
      <div>
          <div className="ui segment header-wrap" data-test="header-wrap">
            <div className="ui secondary menu">
              <h3 data-test="title">CDD UI</h3>
              <div className="right menu">
                <Link className="ui item" to='/'>
                  {
                    this.fakeAuth()
                  }
                </Link>
              </div>
            </div>
          </div>
          {this.renderContent()}
      </div>
    )
  }
}
