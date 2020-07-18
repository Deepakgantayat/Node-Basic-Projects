import React from 'react';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'

import Home from './components/common/Home'
import Register from './components/users/Register'
import Login from './components/users/Login'
import Logout from './components/users/Logout'

import ContactList from './components/contact/List'
import ContactShow from './components/contact/Show'
import ContactNew from './components/contact/New'
import ContactEdit from './components/contact/Edit'

function App() {
  return (
    <BrowserRouter>
    <div>
      <h1>CONTACT MANAGER </h1>
      <ul>
        <li><Link to = "/">Home</Link></li>
        
        {
          localStorage.getItem('authToken')? (
            <div>
              <li><Link to = "/contacts">Contacts</Link></li>
              <li><Link to = "/users/logout">Logout</Link></li> 
          
            </div>
          ): (
            <div>
              <li><Link to = "/users/register">Register</Link></li>
              <li><Link to = "/users/login">Login</Link></li>
            </div>
             )
          }         
      </ul>

      <Switch>
      <Route path ="/" component = {Home} exact = {true}/>
      <Route path = "/users/register" component = {Register}/>
      <Route path = "/users/login" component = {Login}/>
      <Route path = "/users/logout" component = {Logout}/>

      <Route path = "/contacts" component = {ContactList} exact = {true}/>
      <Route path = "/contacts/new" component = {ContactNew}/>
      <Route path = "/contacts/edit/:id" component = {ContactEdit}/>
      <Route path = "/contacts/:id" component = {ContactShow}/>
     
      </Switch>
    </div>
    </BrowserRouter>
  )
}

export default App;
