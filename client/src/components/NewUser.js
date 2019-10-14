import React from 'react'
import { Link, Route, Switch } from 'react-router-dom';

const saveUserToServer = (newUser) =>
    fetch('/api/user/',
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newUser),
        }
    ).then(res => res.json())

export default class NewUserForm extends React.Component {
    state =
        {
            userName: ""
        }
    handleInput = (evnt) => {
        let newUser = { ...this.state };
        newUser[evnt.target.name] = evnt.target.value;
        this.setState(newUser)
    }

    handleSubmit = (evnt) => {
        evnt.preventDefault();
        this.addNewUser(this.state)
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
        <form onSubmit={this.handleSubmit} className='newUserCont'>
            <input type="text" name="userName"
                onChange={this.handleInput}
                value={this.state.userName}
                placeholder="User Name"
                className='newUserSubmission' />

            <input type="submit" value="New User" />
        </form>
    )
}