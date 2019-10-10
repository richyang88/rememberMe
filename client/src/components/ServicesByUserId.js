import React from 'react'

export default class ServicesByUserId extends React.Component {
    state = {
        services: [
            {
                serviceName: "",
            }
        ]
    }

    renderServiceDropdown = () => {
        return (
          <ol>
          {/* map users into new array user, then get new array elem id */}
            {this.state.services.map(service =>
              <li value={service.id}>
              
                {service.serviceName}
                {'here'}
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