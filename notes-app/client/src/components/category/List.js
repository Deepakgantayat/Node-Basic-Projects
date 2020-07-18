import React from 'react'
import axios from 'axios'
import CategoryForm from './Form'

export default class CategoryList extends React.Component{
        constructor(props){
            super(props)
            this.state={
                categories: []
            }
        }
        componentDidMount(){
            axios.get('http://localhost:3025/categories', {
                headers: {
                    'x-auth':localStorage.getItem('authToken')
                }
            })
            .then((response) =>{
                const categories = response.data
                this.setState({categories})
                console.log(categories)
            })
            .catch((err)=>{
                console.log(err)
            })
        }
        handleSubmit = (formData) =>{
            axios.post('http://localhost:3025/categories', formData,{
                headers: {
                    'x-auth': localStorage.getItem('authToken')
                }
            })
            .then((response) => {
                if(response.data.hasOwnProperty('errors')){
                    alert(response.data.message)
                }
                else{
                    const category = response.data
                this.setState(prevState =>({
                    categories: prevState.categories.concat(category)
                }))
                console.log(response.data)
                }
            })
            .catch((err) => {
                console.log(err)
            })
        }
        render(){
            return(
                <div>
                    <h2> Listing categories-{this.state.categories.length}</h2>
                    <ul>
                        {
                            this.state.categories.map(category =>{
                                return(
                                    <li key = {category._id}>{category.name}</li>
                                )
                            })
                        }
                    </ul>

                    <CategoryForm handleSubmit = {this.handleSubmit}/>
                </div>
            )
        }
}