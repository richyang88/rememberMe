import React from 'react'
import { Link, Route, Switch } from 'react-router-dom';

export default class Home extends React.Component {
    
  state = {
    users: [
      {
        username: '',
        email: ''
      }
    ]
  }

  //getting user info from database and turns into json data
  componentDidMount = () => {
    fetch('/api/user/')
      .then(res => res.json())
      .then(users => this.setState({ users }))
      .catch(err => {
        console.log(err)
      })
  }

  //make this into another component to be imported, call using router
  getUsersFromServer = () =>
    fetch('/api/user/')
      .then(res => {
        res.json()
        console.log(res)
      })

  renderUserDropdown = () => {
    return (
      <ol>
      {/* map users into new array user, then get new array elem id */}
        {this.state.users.map(user =>
          <li value={user.id}>
            <Link to={`/service/${user.id}`}>
              {user.userName}
            </Link>
          </li>)}
      </ol>
    )
  }
  render = () => {
    return (
        <div className="App">
            <header>UserNames</header>
            <p>{this.renderUserDropdown()}</p>
        </div>
    )
}
}