import React from 'react';
import Botao from '../Botao/Botao';

export default class cont extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           frase: '',
           exibir: false
        };
    }

    calculo = () => {
        const { frase } = this.props;
        let numero = 0;

        if (frase[frase.length - 1] == ' ') {
            numero++;
          } 

        this.setState({
            frase: numero,
            exibir: true
        });
    };

    render() {
        const { frase, exibir } = this.state;

        return (
            <div>
                {exibir ? <div id="resultado">
                    <div onChange={() => this.calculo()}>
                        Palavras contadas: {frase}
                    </div>
                </div> : null}
            </div>
        )
    }
}