import React from 'react'

export default class CategoryForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:''
        }
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            name:this.state.name,
        }

        this.props.handleSubmit(formData)
        this.setState({name:""})
    }

    render(){
        return(
            <div>               
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">
                       Category
                    </label>
                    <input type="text" value={this.state.name} onChange={this.handleChange} name="name" id="name"/>
                    <br/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}
