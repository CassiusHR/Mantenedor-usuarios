import React, { Component } from 'react'

const styles = {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
}
export default class Cabecera extends Component {
    render(){
        const { nuevoUsuario } = this.props
        return(
            <header style={styles}>
                <h2>Usuarios</h2>
                <button onClick={nuevoUsuario}>Nuevo usuario</button>
            </header>
        );
    }
}