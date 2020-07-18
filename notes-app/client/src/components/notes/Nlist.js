import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'


export default class NoteList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            notes: []
        }
    }
    componentDidMount(){
        axios.get('http://localhost:3025/notes', {
            headers: {
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response) =>{
            console.log(response)
            const notes = response.data
            this.setState({notes})
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    handleRemove = (id) =>{
        axios.delete(`http://localhost:3025/notes/${id}`, {
            headers:{
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then((response) =>{
            this.setState(prevState =>({
                notes: prevState.notes.filter(note => note._id !== id)
            }))
        })
    }
    render(){
        return(
            <div>
               <h2> Listing Notes - {this.state.notes.length}</h2>
               <table border ="3">
                   <thead>
                       <tr>
                           <th>Title</th>
                           <th>Body</th>
                           <th>Category</th>
                           <th>Action</th>
                       </tr>
                   </thead>
                   <tbody>
                       {
                           this.state.notes.map((note) =>{
                              return (<tr key ={note._id}>
                                   <td><Link to ={`/notes/${note._id}`}>{note.title}</Link></td>
                                   <td>{note.body}</td>
                                   <td>{note.category.name}</td>
                                   <td><Link to = {`/notes/${note._id}`}>show</Link>
                                   <button onClick= {() =>{
                                      
                                       const confirmRemove = window.confirm("Are You Sure?")
                                       if(confirmRemove){
                                        this.handleRemove(note._id)
                                       }
                                   }}>remove</button>
                                   </td>
                               </tr>
                              )
                           })
                       }
                   </tbody>

               </table>
               <Link to = "/notes/new">Add New Note</Link>

            </div>
        )
    }
}