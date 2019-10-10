import React from 'react';
import logo from './logo.svg';
import { Link, Route, Switch} from 'react-router-dom';
import './App.css';

import ServiceByUserId from './components/ServicesByUserId.js';
//add new user form first, before doing services




class App extends React.Component {

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
              {user.username}
            </Link>
          </li>)}
      </ol>
    )
  }


  render = () => {
    return (
      <div className="App">
        <header>Remember Me</header>
        <p>{this.renderUserDropdown()}</p>
        <Switch>
        {/* <p>{renderServiceDropdown()}</p> */}
          <Route path='/service/:id' component={ServiceByUserId} />
          {/* <Route path='/password/:id' component={ServiceByUserId} /> */}
        </Switch>

      </div>
    );
  }
}

export default App;
