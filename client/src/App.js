import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  
  state = {
    users: [
      {
        username:'',
        email:''
      }
    ]
  }

  componentDidMount = () =>{
    fetch('/api/user/')
      .then(res => res.json())
      .then(users=> this.setState({ users }))
      .catch(err => {
        console.log(err)
      })
  }

  render = () => {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
      </div>
    );
  }
}

export default App;
