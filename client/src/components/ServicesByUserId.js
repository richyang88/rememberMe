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
// this.props.match.param.userId

    
    renderServiceDropdown = () => {
        return (
            <ol>
                {/* map users into new array user, then get new array elem id */}
                {this.state.services.map(service =>
                    <li value={service.id}>
                        {console.log(service.id)}
                        <Link to={`/password/${service.id}`}>
                            {service.serviceName}

                        </Link>

                        {/* link to g home */}
                        <li> 
                            <Link to={`/`}>
                                {"Home"}
                            </Link>
                        </li>

                    </li>


                )}

            </ol>

        )
    }
    // if(this.props.match.param.userId = service.id){
    render = () => {
        return (
            <div className="App">
                <header>services</header>
                <p>{this.renderServiceDropdown()}</p>
            </div>
        )

    }
}
// }

// export ServicesByUserId