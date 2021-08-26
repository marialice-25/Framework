import React from 'react';
import Resultado from '../Resultado/Resultado';

export default class IMC extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            imc: null,
            cat: '',
            exibir: false
        };
    }

    feminino = (result) => {
        if (result < 19)
            return 'Abaixo do peso';

        if (result <= 23.9)
            return 'Normal';

        if (result <= 28.9)
            return 'Obesidade leve';

        if (result <= 28.9)
            return 'Obesidade moderada';

        return 'Obesidade mórbida';
    }

    masculino = (result) => {
        if (result < 20)
            return 'Abaixo do peso';

        if (result <= 24.9)
            return 'Normal';

        if (result <= 29.9)
            return 'Obesidade leve';

        if (result <= 39.9)
            return 'Obesidade moderada';

        return 'Obesidade mórbida';
    }

    calculoIMC = () => {
        const { sexo, peso, altura } = this.props;
        const result = peso / (altura * altura);
        let resultado = null;

        if (this.validaInformacoes()) {

            if (sexo === 'Feminino') {
                resultado = this.feminino(result);
            }
            else if (sexo === 'Masculino') {
                resultado = this.masculino(result);
            }

            this.setState({
                imc: result,
                cat: resultado,
                exibir: true
            });
        }
    };

    validaInformacoes = () => {
        const { sexo, peso, altura } = this.props;
        if (!sexo || !peso || !altura) {
            alert('Todos os campos são obrigatórios')
            return false
        }
        return true
    }

    render() {
        const { imc, cat, exibir } = this.state;

        return (
            <div>
                <Resultado onClick={() => this.calculoIMC()}>Calcular</Resultado>
                {exibir ? <div id="resultado">
                    IMC = {imc.toFixed(1)}<br />
                    Categoria = {cat}
                </div> : null}
            </div>
        )
    }
}