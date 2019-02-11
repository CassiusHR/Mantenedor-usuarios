import React, { Component } from 'react'

const validate = values => {
    const errors = {}
    if(!values.name){
        errors.name = 'Este campo es obligatorio'
    }
    if(!values.email){
        errors.email = 'Este campo es obligatorio'
    }
    if(!values.website){
        errors.website = 'Este campo es obligatorio'
    }
    return errors
}

export default class UserForm extends Component {
    state = {
        errors: {}
    }
    handleChange = ({ target }) => {
        this.setState({
            [target.name]: target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        const { errors, ...sinErrors } = this.state
        const result = validate(sinErrors)
        this.setState({
            errors:result
        })
        if (!Object.keys(result).length) {
            const { handleSubmit } = this.props
            handleSubmit(sinErrors)
            e.target.reset()
        }
        
    }
    render(){
        const { errors } = this.state
        return(
            <form onSubmit={this.handleSubmit}>
                <input placeholder="nombre" name="name" onChange={this.handleChange}/>
                {errors.name && <p>{errors.name}</p>}
                <input placeholder="email" name="email" onChange={this.handleChange}/>
                {errors.email && <p>{errors.email}</p>}
                <input placeholder="sitio web" name="website" onChange={this.handleChange}/>
                {errors.website && <p>{errors.website}</p>}
                <input type="submit" value="enviar"/>
            </form>
        );
    }
}