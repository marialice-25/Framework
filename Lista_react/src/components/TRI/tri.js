import React from 'react';
import Botao from '../Botao/Botao';

export default class tri extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            verifica: '',
            tipo: '',
            exibir: false
        };
    }

    calculo = () => {
        const { l1, l2, l3 } = this.props;
        let resultado = null;

        const ver = this.verificar();

        if (this.verificar()) {

            if (l1 == l2 && l1 == l3 && l2 == l3) {
                resultado = 'Equilátero';
            }
            else if (l1 == l2 || l1 == l3 || l2 == l3) {
                resultado = 'Isóceles'; 
            }else{
                resultado = 'Escaleno';  
            }

            this.setState({
                verifica: ver,
                tipo: resultado,
                exibir: true
            });
        }
    };

    verificar = () => {
        const { l1, l2, l3 } = this.props;
    
        if (l1+l2 > l3 || l1+l3 > l2 || l3+l2 > l1) {
            return 'É um triângulo'
        }else{
            return 'Não é um triângulo'
        }
    }

    render() {
        const { verifica, tipo, exibir } = this.state;

        return (
            <div>
                <Botao onClick={() => this.calculo()}>Verificar</Botao>
                {exibir ? <div id="resultado">
                    Verificação: {verifica}<br /><br />
                    Tipo de triangulo: {tipo}
                </div> : null}
            </div>
        )
    }
}