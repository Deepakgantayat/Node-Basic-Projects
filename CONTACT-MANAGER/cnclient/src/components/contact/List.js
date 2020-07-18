import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'


export default class ContactList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            contacts: []
        }
    }
    componentDidMount(){
        axios.get('http://localhost:3099/contacts', {
            headers: {
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response) =>{
            console.log(response)
            const contacts = response.data
            this.setState({contacts})
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    handleRemove = (id) =>{
        axios.delete(`http://localhost:3099/contacts/${id}`, {
            headers:{
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then((response) =>{
            this.setState(prevState =>({
                contacts: prevState.contacts.filter(contact => contact._id !== id)
            }))
        })
    }
    render(){
        return(
            <div>
               <h2> Listing All Contacts - {this.state.contacts.length}</h2>
               <table border ="3">
                   <thead>
                       <tr>
                           <th>Name</th>
                           <th>Email</th>
                           <th>Phone</th>
                           <th>Action</th>
                       </tr>
                   </thead>
                   <tbody>
                       {
                           this.state.contacts.map((contact) =>{
                              return (<tr key ={contact._id}>
                                   <td><Link to ={`/contacts/${contact._id}`}>{contact.name}</Link></td>
                                   <td>{contact.email}</td>
                                   <td>{contact.phone}</td>
                                   <td><Link to = {`/contacts/${contact._id}`}>show</Link>
                                   <button onClick= {() =>{
                                      
                                       const confirmRemove = window.confirm("Are You Sure?")
                                       if(confirmRemove){
                                        this.handleRemove(contact._id)
                                       }
                                   }}>remove</button>
                                   </td>
                               </tr>
                              )
                           })
                       }
                   </tbody>

               </table>
               <Link to = "/contacts/new">Add New Contact</Link>

            </div>
        )
    }
}