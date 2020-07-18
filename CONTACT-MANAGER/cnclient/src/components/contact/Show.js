import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class ContactShow extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            contact: {}
        }
    }
    componentDidMount(){
        const id = this.props.match.params.id
        axios.get(`http://localhost:3099/contacts/${id}`,{
            headers: {
                'x-auth' : localStorage.getItem('authToken')
            }
        })
        .then((response) =>{
            const contact= response.data
            this.setState({contact})
        })
        .catch((err) =>{
            console.log(err)
        })
    }
    render(){
        const id= this.props.match.params.id
        const {name,email,phone} = this.state.contact
        return(
            <div>
                <h2>{name} - {email} - {phone}</h2>
                <Link to = {`/contacts/edit/${id}`}> Edit</Link>
                <Link to = "/contacts">  back</Link>
               
            </div>
        )
    }
}