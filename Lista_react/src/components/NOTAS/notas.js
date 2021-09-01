import React from 'react';
import Botao from '../Botao/Botao';

export default class notas extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           media: '',
           situacao: '',
           aprovados: '',
           reprovados: '',
           exame: '',
           mediaClasse: '',
           exibir: false
        };
    }

    adicionar = () => {
        
    }

    calculo = () => {
        const { n1, n2 } = this.props;
        let resultado = null;

        const ver = this.verificar();

        this.setState({
            media: ver,
            situacao: resultado,
            aprovados: resultado,
            exame: resultado,
            reprovados: resultado,
            mediaClasse: resultado,
            exibir: true
        });
    };

    verificar = () => {
        const { n1, n2 } = this.props;
    
    }

    render() {
        const { media, situacao, aprovados, exame, reprovados, mediaClasse, exibir } = this.state;

        return (
            <div>
                <button onClick="adicionar()">Adicionar</button>
                <Botao onClick={() => this.calculo()}>Verificar</Botao>
                {exibir ? <div id="resultado">
                    Média do aluno {}: {media}<br />
                    Mensagem: {situacao}<br />
                    Aprovados: {aprovados}<br />
                    Exame: {exame}<br />
                    Reprovados: {reprovados}<br />
                    Média da classe: {mediaClasse}
                </div> : null}
            </div>
        )
    }
}