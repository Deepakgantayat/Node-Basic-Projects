import React from 'react'
import axios from 'axios'

export default class NoteForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            title: props.title ? props.title : '',
            body: props.body ? props.body: '',
            categoryId:props.body?props.body:'',
            categories: [] 

        }
    }
    componentDidMount(){
        axios.get('http://localhost:3025/categories',{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            const categories=response.data
            this.setState({categories})
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    handleChange=(e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const formData={
            title: this.state.title,
            body: this.state.body,
            category: this.state.categoryId
        }
        this.props.handleSubmit(formData)
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Title
                        <input type="text" value={this.state.title} onChange={this.handleChange} name="title"/>
                    </label>
                    <br/>
                    <label>
                        Body
                        <input type="text" value={this.state.body} onChange={this.handleChange} name="body"/>
                    </label>
                    <br/>
                    <label>
                        Category
                        <select name="categoryId" onChange={this.handleChange}>
                        <option>select</option>
                        {
                            this.state.categories.map(category=>{
                                return <option key={category._id} value={category._id}>{category.name}</option>
                            })
                        }
                       </select>
                    </label>
                    <br/>
                    <input type ="submit" />
                </form>
            </div>
        )
    }
}