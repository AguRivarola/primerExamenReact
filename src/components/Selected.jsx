import React, { Component } from 'react'
class Selected extends Component {
    constructor(props) {
        super(props);
        this.state = {
            prevSel: "",
            length: 0,
        }
    }

    componentDidMount() {
        this.setState((s,p)=>({
            prevSel: p.prevSel,
        }))
    }
    render() {
        let ind = this.props.historial.length
        let prev = this.props.historial[ind-1]? this.props.historial[ind-1].toUpperCase():""
        return (
            <div className='recordatorio'>
                <h3>Selección anterior: {prev}</h3>
                <h4>Historial de opciones elegidas:</h4>
                <ul>
                    {this.props.historial.map((e, i) => {
                        return (
                            <li key={(i + e)}>{e.toUpperCase()}</li>
                        )
                    })}
                </ul>
            </div>
        );
    }
}

export default Selected;