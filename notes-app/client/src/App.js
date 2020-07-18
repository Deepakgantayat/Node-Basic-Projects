import React from 'react';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'


import Home from './components/common/Home'
import Register from './components/users/Register'
import Login from './components/users/Login'
import Logout from './components/users/Logout'
import Account from './components/users/Account'

import CategoryList from './components/category/List'

import NoteList from './components/notes/Nlist'
import NoteShow from './components/notes/Nshow'
import NoteNew from './components/notes/Nnew'
import NoteEdit from './components/notes/Nedit'


function App() {
  return (
    <BrowserRouter>
    <div>
      <h1>NOTES APP </h1>
      <ul>
        <li><Link to = "/">Home</Link></li>
        {
          localStorage.getItem('authToken')? (
            <div>
              <li><Link to = "/categories">Category</Link></li>
              <li><Link to = "/notes">Notes</Link></li>
              <li><Link to = "/users/account">Account</Link></li>
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
      <Route path = "/users/account" component = {Account}/>
      <Route path = "/users/logout" component = {Logout}/>

      <Route path = "/categories" component = {CategoryList}/>

      <Route path = "/notes" component = {NoteList} exact={true}/>
      <Route path = "/notes/new" component = {NoteNew}/>
      <Route path = "/notes/edit/:id" component = {NoteEdit}/>
      <Route path = "/notes/:id" component = {NoteShow}/>
      </Switch>
    </div>
    </BrowserRouter>
  )
}

export default App;
