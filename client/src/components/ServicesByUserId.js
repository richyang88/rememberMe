import React from 'react'
import { Link, Route, Switch } from 'react-router-dom';

import NewUserForm from './NewUser.js';
import NewService from './NewService'

const saveServiceToServer = (newService) =>
    fetch('/api/service/',
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newService),
        }
    ).then(res => res.json())


export default class ServicesByUserId extends React.Component {
    state = {
        services: [
            {
                serviceName: "",
                userId: ""

            }
        ]
    }

    // handleInput = (evnt) => {
    //     let newService = { ...this.state };
    //     newService[evnt.target.name] = evnt.target.value;
    //     this.setState(newService)
    // }

    // handleSubmit = (evnt) => {
    //     evnt.preventDefault();
    //     this.addNewService(this.state)
    // }

    // addNewService = (newServiceInfo) => {
    //     // from other method
    //     saveServiceToServer(newServiceInfo)
    //         .then(newService => {
    //             newService.issues = [];

    //             let service = { ...this.state.service };
    //             service[newService.id] = newService;
    //             this.setState({ service, currentService: newService.id })
    //         })
    // }
    componentDidMount = () => {
        fetch('/api/service/')
            .then(res => res.json())
            .then(services => {
                console.log('Heyyyy', services)
                // this.setState({ services })
            })
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
    // getSingleUserId = () =>{
    //     fetch(`/api/user/${this.props.match.params.id}`)
    //     .then(res => res.json())
    //     .then(user =>{
    //         this.setState({user})
    //     })
    // }
    // getSingleServiceId = () =>{
    //     fetch(`/api/service/${this.props.match.params.id}`)
    //     .then(res => res.json())
    //     .then(service =>{
    //         this.setState({service})
    //     })
    // }
    // componentDidUpdate=(prevProps)=>{
    //     if(prevProps.match.params.id ==this.user.props.match.params.id){

    //     }
    // }
    componentDidUpdate = () => {
        // if(this.service.match.params.id ==this.user.props.match.params.id){

        // }
    }

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
                        {/* <li>
                            <form onSubmit={this.handleSubmit}>
                                <input type="text" name="serviceName"
                                    onChange={this.handleInput}
                                    value={this.state.userName}
                                    placeholder="New Service" />

                                <input type="submit" value="New Service" />
                            </form>
                        </li> */}

                        {/* link to go home */}

                        <Link to={`/`}>
                            {"Home"}
                        </Link>


                    </li>
                )}
            </ol>

        )
    }
    // if(this.props.match.param.userId = service.id){
    render = () => {
        console.log('howdyyyy', this.state.services)
        return (
            <div className="App">
                <header>services</header>
                {/* <p>{this.renderServiceDropdown()}</p> */}
                <NewService
                    userId={this.props.match.params.id}
                />
            </div>
        )

    }
}
// }

// export ServicesByUserId