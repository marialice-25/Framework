import React from 'react';
import Botao from '../Botao/Botao';

export default class idade extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           dia: '',
           mes: '',
           ano: '',
           semana: '',
           exibir: false
        };
    }

    calculo = () => {
        const { dia, mes, ano } = this.props;
        let atual = new Date()
        let at = atual.getFullYear()
        let anoPessoa =  at - ano
        let diaPessoa = (anoPessoa * 365)
        let mesPessoa = diaPessoa / 12
        let semana = mesPessoa * 4

        this.setState({
            ano: anoPessoa,
            mes: mesPessoa,
            dia: diaPessoa,
            semana: semana,
            exibir: true
        });
    };

    render() {
        const { mes, dia, ano, semana, exibir } = this.state;

        return (
            <div>
                <Botao onClick={() => this.calculo()}>Verificar</Botao>
                {exibir ? <div id="resultado">
                    Voce tem {ano} anos<br /><br />
                    Voce tem {mes.toFixed(2)} meses<br /><br />
                    Voce tem {dia.toFixed(2)} dias<br /><br />
                    Voce tem {semana.toFixed(2)} semanas<br /><br />
                </div> : null}
            </div>
        )
    }
}