import React from 'react'
import { Link, Route, Switch } from 'react-router-dom';

export default class ServicesByUserId extends React.Component {
    state = {
        services: [
            {
                serviceName: "",
            }
        ]
    }

    componentDidMount = () => {
        fetch('/api/service/')
            .then(res => res.json())
            .then(services => this.setState({ services }))
            .catch(err => {
                console.log(err)
            })
    }

    //make this into another component to be imported, call using router
    getServiceFromServer = () =>
        fetch('/api/service/')
            .then(res => {
                res.json()
                console.log(res)
            })

    renderServiceDropdown = () => {
        return (
            <ol>
                {/* map users into new array user, then get new array elem id */}
                {this.state.services.map(service =>
                    <li value={service.id}>
                    
                        <Link to={`/password/${service.id}`}>
                        {service.serviceName}
                        
                        </Link>
                    </li>)}
            </ol>
        )
    }

    render = () => {
        return (
            <div className="App">
                <header>services</header>
                <p>{this.renderServiceDropdown()}</p>
            </div>
        )

    }
}

// export ServicesByUserId