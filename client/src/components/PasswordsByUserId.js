import React from 'react'
import { Link, Route, Switch } from 'react-router-dom';

export default class PasswordByUserId extends React.Component {
    state = {
        passwords: [
            {
                passwordField: "",
            }
        ]
    }

    componentDidMount = () => {
        fetch('/api/password/')
            .then(res => res.json())
            .then(passwords => this.setState({ passwords }))
            .catch(err => {
                console.log(err)
            })
    }

    //make this into another component to be imported, call using router
    getPasswordFromServer = () =>
        fetch('/api/password/')
            .then(res => {
                res.json()
                console.log(res)
            })

    renderPasswordDropdown = () => {
        return (
            <ol>
                {/* map users into new array user, then get new array elem id */}
                {this.state.passwords.map(password =>
                    <li value={password.id}>
                        {/* <Link to={`/password/${service.id}`}> */}
                        {password.passwordField}
                        {/* {'here'} */}
                        {/* </Link> */}
                    </li>)}
            </ol>
        )
    }

    render = () => {
        return (
            <div className="App">
                <header>passwords here</header>
                <p>{this.renderPasswordDropdown()}</p>
            </div>
        )

    }
}

// export ServicesByUserId