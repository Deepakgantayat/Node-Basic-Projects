import React from 'react'
import axios from 'axios'

export default class Register extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            username : '',
            email: '',
            password: ''
        }
    }
    handleSubmit = (e) =>{
        e.preventDefault()
        const formData = {
            username: this.state.username,
            email: this.state.email,
            password : this.state.password
        }
        axios.post('http://localhost:3099/users/register', formData)
            .then((response) => {
                if(response.data.hasOwnProperty('errors')){
                    alert(response.data.message)
                }
                else{
                    alert('successfully registered')
                    //redirect user to another page automatically
                    this.props.history.push('/users/login')
                }
            })
            .catch((err)=>{
                console.log(err)
            })
    }
    handleChange = (e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    render(){
        return(
            <div>
                <h2>Register</h2>
                <form onSubmit = {this.handleSubmit}>
                    <label>
                        username
                        <input type = "text" value={this.state.username} onChange={this.handleChange} name="username"/>
                    </label><br/><br/>
                    <label>
                        email
                        <input type = "text" value={this.state.email} onChange={this.handleChange} name="email"/>
                    </label><br/><br/>
                    <label>
                        password
                        <input type = "password" value={this.state.password} onChange={this.handleChange} name="password"/>
                    </label><br/><br/>
                    <input type = "submit" />
                    
                </form>
            </div>
        )
    }
}