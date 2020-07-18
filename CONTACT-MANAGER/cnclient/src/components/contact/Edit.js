import React from 'react'
import axios from 'axios'
import ContactForm from './Form'

export default class ContactEdit extends React.Component{
    constructor(props){
        super(props)
        this.state={
            contact:{}
        }
    }
    componentDidMount(){
        const id = this.props.match.params.id
        axios.get(`http://localhost:3099/contacts/${id}`,{
            headers:{
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then((response) =>{
            const contact = response.data 
            this.setState({contact})
        })
    }
    handleSubmit = (formData) => {
        axios.put(`http://localhost:3099/contacts/${this.state.contact._id}`, formData,{
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then((response) => {
            if(response.data.hasOwnProperty('errors')){
                alert(response.data.errors.message)
            }
            else{
                const contact = response.data
                this.props.history.push(`/contacts/${contact._id}`)
            }
        })
        .catch((err) =>{
            console.log(err)
        })
    }
    render(){
        return(
            <div>
                <h2> Edit Contact - {this.state.contact.name}</h2>
                {Object.keys(this.state.contact).length !== 0 && <ContactForm {...this.state.contact}
                handleSubmit = {this.handleSubmit}/>}
                
            </div>
        )
    }
}