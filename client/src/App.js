import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  state = {
    users: [
      {
        username: '',
        email: ''
      }
    ]
  }

  //getting user info from database
  componentDidMount = () => {
    fetch('/api/user/')
      .then(res => res.json())
      .then(users => this.setState({ users }))
      .catch(err => {
        console.log(err)
      })
  }

  //
  getUsersFromServer = () =>
    fetch('/api/user/')
      .then(res => {
        res.json()
        console.log(res)
      })

  renderUserDropdown = () => {
    return (
      <select>
      {/* map users into new array user, then get new array elem id */}
        {this.state.users.map(user =>
          <option value={user.id}>
            {users.username}
          </option>)}
      </select>
    )
  }

  render = () => {
    return (
      <div className="App">
        <header>Remember Me</header>
        <p></p>
      </div>
    );
  }
}

export default App;
