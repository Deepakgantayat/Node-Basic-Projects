import React from 'react'
import NoteForm from "./Nform"
import axios from 'axios'

export default class NoteNew extends React.Component{
    constructor(props){
        super(props)
        this.state={
            
        }
    }
    
handleSubmit=(formData)=>{
    // console.log('codin new',formData )
    axios.post('http://localhost:3025/notes',formData,{
        headers:{
            "x-auth":localStorage.getItem('authToken')
        }
    })
    .then((response)=>{
        console.log(response)
        if(response.data.hasOwnProperty('errors')){
            alert(response.data.message)
        }else{
            const note=response.data
            this.props.history.push(`/notes/${note._id}`)
        }
    })
    .catch((err)=>{
        console.log(err)
    })
}

    render(){
        return(
            <div>
                <h2>Add New Note</h2>
                <NoteForm handleSubmit={this.handleSubmit}/>
            </div>
        )
    }
}