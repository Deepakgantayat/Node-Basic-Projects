import React from 'react'
import axios from 'axios'
// import {}

export default class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit = (e) =>{
        e.preventDefault()
        const formData = {
            email: this.state.email,
            password : this.state.password
        }
        axios.post('http://localhost:3099/users/login', formData)
            .then((response) => {
                console.log(response)
                if(response.data){
                    alert(response.data)
                }
                else{
                    const token = response.data.token
                    localStorage.setItem('authToken', token)
                    alert('Succssfully logged in')
                    this.props.history.push('/')
                    window.location.reload()
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
                <h2>Login</h2>
                <form onSubmit = {this.handleSubmit}>
                    <label>
                        email
                        <input type = "text" value={this.state.email} onChange={this.handleChange} name="email"/>
                    </label><br/>
                    <label>
                        password
                        <input type = "password" value={this.state.password} onChange={this.handleChange} name="password"/>
                    </label><br/>
                    <input type ="submit"/>
                    
                </form>
            </div>
        )
    }
}