import React from 'react';
import logo from './logo.svg';
import { Link, Route, Switch} from 'react-router-dom';
import './App.css';

import Home from './components/Home.js';
import ServiceByUserId from './components/ServicesByUserId.js';
import PasswordsByUserId from './components/PasswordsByUserId.js';
import NewUserForm from './components/NewUser.js';
//add new user form first, before doing services

const saveUserToServer = (newUser) =>
        fetch('/api/user/',
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newUser),
            }
        ).then(res => res.json())


class App extends React.Component {

  render = () => {
    return (
      <div className="App">
        <header className='headerCont'>Remember Me</header>
        {/* <p>{this.renderUserDropdown()}</p> */}
        <NewUserForm addNewUser={this.addNewUser} />
        <Switch>
          <Route exact path='/' component={Home} />
          
          
          {/* <Route path='/user/:id' component={Home} /> */}
          
          <Route path='/service/:id' component={ServiceByUserId} />
          
          {/* {'testing'} */}
          

            <Route path='/password/:id' component={PasswordsByUserId} />
          
          
        </Switch>

      </div>
    );
  }
}

export default App;
