import React from 'react'
import ContactForm from "./Form"
import axios from 'axios'

export default class ContactNew extends React.Component{
    constructor(props){
        super(props)
        this.state={
            
        }
    }
    
handleSubmit=(formData)=>{
    // console.log('codin new',formData )
    axios.post('http://localhost:3099/contacts',formData,{
        headers:{
            "x-auth":localStorage.getItem('authToken')
        }
    })
    .then((response)=>{
        console.log(response)
        if(response.data.hasOwnProperty('errors')){
            alert(response.data.message)
        }else{
            const contact=response.data
            this.props.history.push(`/contacts/${contact._id}`)
        }
    })
    .catch((err)=>{
        console.log(err)
    })
}

    render(){
        return(
            <div>
                <h2>Add New Contact</h2>
                <ContactForm handleSubmit={this.handleSubmit}/>
            </div>
        )
    }
}