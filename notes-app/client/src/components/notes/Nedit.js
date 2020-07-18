import React from"react"
import NoteForm from "./Nform"
import axios from 'axios'


export default class NoteEdit extends React.Component{
    constructor(props){
        super(props)
        this.state={
            note:{}
        }
    }

    componentDidMount(){
        const id = this.props.match.params.id
        axios.get(`http://localhost:3025/notes/${id}`,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then(response=>{
            console.log(response)
            const note = response.data
            this.setState({note})
        })
    }
    handleSubmit=(formData)=>{
        console.log('codin new',formData )
        axios.put(`http://localhost:3025/notes/${this.state.note._id}`,formData,{
            headers:{
                "x-auth":localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            console.log(response)
            if(response.data.hasOwnProperty('errors')){
                alert(response.data.errors.message)
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
        return (
            <div>
                <h3><b>Edit notes {this.state.note.title}</b></h3>
                
                   
                
                {
                       Object.keys(this.state.note).length!==0 && <NoteForm {...this.state.note} handleSubmit={this.handleSubmit}/>
                }
            </div>
        )
    }
}