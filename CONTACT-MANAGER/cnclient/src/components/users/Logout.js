import React from 'react'
import axios from 'axios'

export default class Logout extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            
        }
    }
    componentDidMount(){
        axios.delete('http://localhost:3099/users/logout')
            .then((response) => {
                console.log(response)
                if(response.data.error){
                    alert(response.data.error)
                }
                else{
                    const token = response.data.token
                    const confirmRemove = window.confirm("Are You Sure, You Want To Logout?")
                        if(confirmRemove){
                            localStorage.removeItem('authToken', token)
                            alert('Succssfully logged out')
                            this.props.history.push('/users/login')
                            window.location.reload()
                    }
                }
            })
            .catch((err)=>{
                console.log(err)
            })
    }
    render(){
        return(
            <div>

            </div>
        )
    }
    
}