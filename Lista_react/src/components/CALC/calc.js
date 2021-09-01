import React from 'react';
import Botao from '../Botao/Botao';

export default class calc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            n:'',
            soma:'',
            media:'',
            produto:'',
            exibir: false
        };
    }

    adicionar = () =>{
        const { n } = this.props;
        let lista = [];
        lista.push(n)
    }

    calculo = () => {
        let lista = [];
        let soma = 0;
        let prod = 0;
        let med = 0
        for ( var i = 0; i < lista.length; i++ ){
            soma += lista[i];
            prod *= lista[i]
         }
         med = soma / lista.length
        this.setState({
            soma:soma,
            media:prod,
            produto:med,
            exibir: true
        });
    };

    render() {
        const { soma, media, produto , exibir } = this.state;

        return (
            <div>
                <button onClick={() => this.adicionar()}>Adicionar</button>
                <Botao onClick={() => this.calculo()}>Calcular</Botao>
                {exibir ? <div id="resultado">
                    Média: {media}<br />
                    Produto: {produto}<br />
                    Soma: {soma}<br />
                </div> : null}
            </div>
        )
    }
}