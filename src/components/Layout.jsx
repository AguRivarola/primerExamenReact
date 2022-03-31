import React, { Component } from 'react';
import Options from './Options';
import Selected from './Selected';
import data from './data.json'



class Layout extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: "",
            historia: "",
            opciones: {},
            historial: [],
            prevSel: "",
            contador: 0,
        }
        this.actualizarState = this.actualizarState.bind(this);
    }
    componentDidMount() {
        this.setState({
            id: data[this.state.contador].id,
            historia: data[this.state.contador].historia,
            opciones: data[this.state.contador].opciones,
            contador: 1,
        })
        console.log("Montado");
    }
    componentDidUpdate() {
        console.log("Actualizando componente");
    }
    actualizarState(val) {
        if (this.comprobarLength()) {
            let his = this.state.historial;
            his.push(val);
            let cont = this.state.contador + 1;
            let index = data.findIndex((e) => {
                return e.id === (cont) + val
            })
            this.setState(() => (
                {
                    prevSel: val,
                    contador: cont,
                    historial: his,
                    historia: data[index || data.length-1].historia,
                    opciones: data[index || data.length-1].opciones,
                })
            )
        }
    }
    comprobarLength = () => {
        return this.state.contador < data.length - 1;
    }
    despedir = () => {
        alert("Adios! (Recarga si quieres seguir intentando!)")
    }
    render() {

        return (
            <div className="layout">
                <h1 className="historia" >{this.state.historia}</h1>
                {this.comprobarLength() ? <Options clickF={this.actualizarState} op={this.state.opciones} /> : ""}
                <Selected historial={this.state.historial} prevSel={this.state.prevSel} />
            </div>
        );
    }

}

export default Layout;



