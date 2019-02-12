import React, { Component } from 'react'

export default class Lista extends Component {
    handleClick = id => e => {
        const { handleClick } = this.props;
        handleClick(id);
    }
    render(){
        const { data } = this.props;
        return(
            <ul>
               {data.map(x => 
               <li key={x.id} className='user-container'>
                <div className='names-container'>
                  <p>{x.name}</p>
                  <p><span>Email:</span>{x.email}</p>
                  <p><span>Website:</span>{x.website}</p>
                </div>
               <button onClick={this.handleClick(x.id)}>EDITAR</button>
               </li>)}
            </ul>
        );
    }
}