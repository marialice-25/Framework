import React from 'react';
import NOTAS from './components/NOTAS/notas';
import TRI from './components/TRI/tri';
import CALC from './components/CALC/calc';
import CONT from './components/CONT/cont';
import IDADE from './components/IDADE/idade';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      l1: '',
      l2: '',
      l3: '',
      n1: '',
      n2: '',
      nome: '',
      dia: '',
      mes: '',
      ano: '',
      n: '',
      frase: null,
      showTri: false,
      showNotas: false,
      showCalc: false,
      showCont: false,
      showIdade: false,
    };
  }

  changeL1(novoL1) {
    this.setState({ l1: novoL1 });
  }
  changeL2(novaL2) {
    this.setState({ l2: novaL2 });
  }

  changeL3(novaL3) {
    this.setState({ l3: novaL3 });
  }

  changeN1(novaN1) {
    this.setState({ n1: novaN1 });
  }
  changeN2(novaN2) {
    this.setState({ n2: novaN2 });
  }
  changeNome(novaNome) {
    this.setState({ nome: novaNome });
  }
  changeDia(novaDia) {
    this.setState({ dia: novaDia });
  }
  changeMes(novaMes) {
    this.setState({ mes: novaMes });
  }
  changeAno(novaAno) {
    this.setState({ ano: novaAno });
  }
  changeFrase(novaFrase) {
    this.setState({ frase: novaFrase });
  }
  changeN(novaN) {
    this.setState({ n: novaN });
  }

  changeShowTri() {
    this.setState({ showTri: !this.state.showTri })
  }
  changeShowNotas(){
    this.setState({ showNotas: !this.state.showNotas })
  }
  changeShowCalc(){
    this.setState({ showCalc: !this.state.showCalc })
  }
  changeShowCont(){
    this.setState({ showCont: !this.state.showCont })
  }
  changeShowIdade(){
    this.setState({ showIdade: !this.state.showIdade })
  }

  render() {
    const { l1, l2, l3 } = this.state;
    const { n1, n2 } = this.state;
    const { dia, mes, ano } = this.state;
    const { frase } = this.state;
    const { n } = this.state;
    return (
      <div>
        <h1>Lista de exercícios React</h1>
        <button onClick={() => this.changeShowTri()}>
          {this.state.showTri ? 'Triângulo' : 'Triângulo'}
        </button>
        <button onClick={() => this.changeShowNotas()}>
          {this.state.showNotas ? 'Notas' : 'Notas'}
        </button>
        <button onClick={() => this.changeShowCalc()}>
          {this.state.showCalc ? 'Cálculo' : 'Cálculo'}
        </button>
        <button onClick={() => this.changeShowCont()}>
          {this.state.showCont ? 'Contador' : 'Contador'}
        </button>
        <button onClick={() => this.changeShowIdade()}>
          {this.state.showIdade ? 'Idade' : 'Idade'}
        </button>

        {this.state.showTri ?
          <div>
          <h1>Insira os valores da forma:</h1>
          <div>
            <label>Lado 1:</label>
            <input
              onChange={(e) => this.changeL1(e.target.value)}/>
          </div>
          <div>
            <label>Lado 2:</label>
            <input
              onChange={(e) => this.changeL2(e.target.value)}/>
          </div>
          <div>
            <label>Lado 3:</label>
            <input
              onChange={(e) => this.changeL3(e.target.value)}/>
          </div>
          <TRI l1={l1} l2={l2} l3={l3} />
        </div >
          : null}
  
        {this.state.showNotas ?
          <div>
          <h1>Notas do aluno:</h1>
          <div>
            <label>Nome:</label>
            <input
              onChange={(e) => this.changeNome(e.target.value)}/>
          </div>
          <div>
            <label>Nota 1:</label>
            <input
              onChange={(e) => this.changeN1(e.target.value)}/>
          </div>
          <div>
            <label>Nota 2:</label>
            <input
              onChange={(e) => this.changeN2(e.target.value)}/>
          </div>
          <NOTAS n1={n1} n2={n2} />
        </div >
          : null}

        {this.state.showCalc ?
          <div>
          <h1>Cálculo de números:</h1>
          <div>
            <label>Insira um número:</label>
            <input
              onChange={(e) => this.changeN(e.target.value)}/>
          </div>
          <CALC n={n} />
        </div >
          : null}

        {this.state.showCont ?
          <div>
            <label>Insira uma frase:</label>
          <div>
            <textarea
              onChange={(e) => this.changeFrase(e.target.value)}/>
          </div>
          <div id="resultado-formulario">
          <h1>Resultado</h1>
          <div>
            Palavras contadas: {frase}
          </div>
        </div>
          <CONT frase={frase} />
        </div >
          : null}
        {this.state.showIdade ?
          <div>
          <h1>Nascimento:</h1>
          <div>
            <label>Dia:</label>
            <input
              onChange={(e) => this.changeDia(e.target.value)}/>
          </div>
          <div>
            <label>Mês:</label>
            <input
              onChange={(e) => this.changeMes(e.target.value)}/>
          </div>
          <div>
            <label>Ano:</label>
            <input
              onChange={(e) => this.changeAno(e.target.value)}/>
          </div>
          <IDADE dia={dia} mes={mes} ano={ano} />
        </div >
          : null}
      </div>
    )
  }
}