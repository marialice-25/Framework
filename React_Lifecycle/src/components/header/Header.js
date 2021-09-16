import React from 'react';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = { inicio: "Manhã" };
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ inicio: "Noite" })
        }, 2000)
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        document.getElementById("inicio").innerHTML =
            "Antes de entrar estava de " + prevState.inicio;
    }

    componentDidUpdate() {
        document.getElementById("final").innerHTML =
            "Depois de entrar está de " + this.state.inicio;
    }

    render() {
        return (
            <div>
                <h1>Cor: {this.state.inicio}</h1>
                <div id="inicio"></div>
                <div id="final"></div>
            </div>
        );
    }
}