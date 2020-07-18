import React from 'react'
import axios from 'axios'


export default class Account extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            account: {}
        }
    }
    componentDidMount(){
        axios.get('http://localhost:3025/users/account', {
            headers: {
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response) =>{
            console.log(response)
            const account = response.data
            this.setState({account})
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    render(){
        return(
            <div>
                <h2>Account -{this.state.account.username} - {this.state.account.email}</h2>
            </div>
        )
    }
}