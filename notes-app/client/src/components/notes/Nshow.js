import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class NoteShow extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            note: {}
        }
    }
    componentDidMount(){
        const id = this.props.match.params.id
        axios.get(`http://localhost:3025/notes/${id}`,{
            headers: {
                'x-auth' : localStorage.getItem('authToken')
            }
        })
        .then((response) =>{
            const note= response.data
            this.setState({note})
        })
        .catch((err) =>{
            console.log(err)
        })
    }
    render(){
        const id= this.props.match.params.id
        const {title,body} = this.state.note
        return(
            <div>
                <h2>{title} - {body}</h2>
                <Link to = {`/notes/edit/${id}`}> Edit</Link>
                <Link to = "/notes">  back</Link>
               
            </div>
        )
    }
}