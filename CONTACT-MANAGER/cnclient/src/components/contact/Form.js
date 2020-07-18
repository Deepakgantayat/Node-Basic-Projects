import React from 'react'

export default class ContactForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: props.name ? props.name : '',
            email: props.email ? props.email: '',
            phone: props.phone ? props.phone: ''
        }
    }

    handleChange=(e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const formData={
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone
        }
        this.props.handleSubmit(formData)
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name
                        <input type="text" value={this.state.name} onChange={this.handleChange} name="name"/>
                    </label>
                    <br/>
                    <label>
                        Email
                        <input type="text" value={this.state.email} onChange={this.handleChange} name="email"/>
                    </label>
                    <br/>
                    <label>
                        Phone
                        <input type="text" value={this.state.phone} onChange={this.handleChange} name="phone"/>
                    </label>
                    <br/>
                    <input type ="submit" />
                </form>
            </div>
        )
    }
}