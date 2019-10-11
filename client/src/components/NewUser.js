import React from 'react'
import { Link, Route, Switch } from 'react-router-dom';

export default class NewUserForm extends React.Component{
    state =
        {
            userName: ""
            , email: ""
        }
    handleInput = (evnt) => {
        let newUser = { ...this.state };
        newUser[evnt.target.name] = evnt.target.value;
        this.setState(newUser)
    }

    handleSubmit = (evnt) => {
        evnt.preventDefault();
        this.props.addNewUser(this.state)
    }
    
    addNewUser = (newUserInfo) => {
        // from other method
        saveUserToServer(newUserInfo)
          .then(newUser => {
            newUser.issues = [];
    
            let users = { ...this.state.users };
            users[newUser.id] = newUser;
            this.setState({ users, currentUser: newUser.id })
          })
      }
    render = () => (
        <form onSubmit={this.handleSubmit}>
            <input type="text" name="userName"
                onChange={this.handleInput}
                value={this.state.userName}
                placeholder="User Name" />
            <input type="submit" value="New User" />
        </form>
    )
}