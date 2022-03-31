import React, { Component } from 'react';
import Swal from 'sweetalert2';
class Options extends Component {
    constructor(props) {
        super(props);
        this.state = {
            opcionA: "",
            opcionB: "",
        }
    }
    componentDidMount() {
        this.setState((prevState, props) => (
            {
                opcionA: props.op.a,
                opcionB: props.op.b,
            })
        )
    }
    componentWillUnmount() {
        Swal.fire({
            title: 'Fin del camino!',
            text: 'Vamos otra vez?\n(recarga la pagina)',
            icon: 'success',
            confirmButtonText: 'Ok!',
            backdrop: 'swal2-backdrop-hide',
        })
    }

    handleClick = (e) => {
        let val = e.target.value;
        this.props.clickF(val);

    }
    comprobarOpciones = () => {
        if (this.props.op.a !== this.state.opcionA) {
            this.setState((prevState, prop) => ({
                opcionA: prop.op.a,
                opcionB: prop.op.b,
            }))
        }
    }
    componentDidUpdate() {
        this.comprobarOpciones()
    }

    render() {
        return (
            <div className='opciones'>
                <div className='opcion'>
                    <button id="A" value="a" className='botones' onClick={this.handleClick}>A</button>
                    <h2>{this.state.opcionA}</h2>
                </div>
                <div className='opcion'>
                    <button id="B" value="b" className='botones' onClick={this.handleClick}>B</button>
                    <h2>{this.state.opcionB}</h2>
                </div>
            </div>
        );
    }
}

export default Options;