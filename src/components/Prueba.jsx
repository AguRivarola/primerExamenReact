import React, { Component } from 'react';


class Prueba extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: "Agus",
            edad: 23
        }
        // this.cumplirAños = this.cumplirAños.bind(this);
    }
    render() {
        return (
            <>
                <h1>Hola! soy {this.state.nombre} y tengo {this.state.edad}</h1>
                <div style={{ margin: "auto", height: "80px", width: "100px", backgroundColor: "blue" }} onClick={this.cumplirAños}>cumplir años</div>
            </>
        );
    }
    componentDidUpdate() {
        
    }
    cumplirAños = () => {
        let edad = this.state.edad;
        this.setState({
            edad: edad + 1
        })
    }
}

export default Prueba;