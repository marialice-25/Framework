import React from 'react'
import IMC from './components/IMC/IMC';
import './App.css';

export default class App extends React.Component{

    constructor(props){
      super(props)
      this.state = {
        desc: '',
        nome: '',
        sexo: null,
        idade: null,
        peso: null,
        altura: null,
      }
    }

      click = (doce, desc) => {
      this.setState({
        desc: `O ${doce} é tradicional em ${desc}`
      })
    }

  
    changeNome(novoNome) {
      this.setState({ nome: novoNome });
    }
    changeSexo(novaSexo) {
      this.setState({ sexo: novaSexo });
    }
  
    changeIdade(novaIdade) {
      this.setState({ idade: novaIdade });
    }
  
    changePeso(novoPeso) {
      this.setState({ peso: novoPeso });
    }
  
    changeAltura(novoAltura) {
      this.setState({ altura: novoAltura });
    }

    render(){

      const doces = [
        { doce: "Bala Baiana", desc: "Bahia" },
        { doce: "Mocotó", desc: "Minas Gerais" },
        { doce: "Mochi", desc: "Japão" },
        { doce: "Marshmallow", desc: "EUA" },
        { doce: "Açaí", desc: "Amazonas" },
        { doce: "Petit Gateau", desc: "França" }]

      const { nome, sexo, idade, peso, altura } = this.state;

      return (
        <div>
          <h1>DOCES PELO MUNDO</h1>
          <p>
            {
              doces.map((item, index) =>
                <p key={index} onClick={() => this.click(item.doce, item.desc)}>
                  <button>{item.doce}</button>
              </p>
              )
            }
          </p>
          <p>
           {this.state.desc}
          </p>
          <div>
        <h1>DADOS PARA CALCULO DE IMC:</h1>
        <div>
          <label>Nome:</label>
          <input
            onChange={(e) => this.changeNome(e.target.value)}
          />
        </div>

        <div>
          <label>Sexo:</label>
          <input class="a" type="radio" name="sexo" value="Feminino" onChange={(e) => this.changeSexo(e.target.value)} /> Feminino
          <input class="a" type="radio" name="sexo" value="Masculino" onChange={(e) => this.changeSexo(e.target.value)} /> Masculino
        </div>

        <div>
          <label>Idade:</label>
          <input
            onChange={(e) => this.changeIdade(e.target.value)}
          />
        </div>

        <div>
          <label>Peso:</label>
          <input
            onChange={(e) => this.changePeso(e.target.value)}
          />
        </div>

        <div>
          <label>Altura:</label>
          <input
            onChange={(e) => this.changeAltura(e.target.value)}
          />
        </div>

        <div id="resultado-formulario">
          <div>Nome: {nome}</div>
          <div>Sexo: {sexo}</div>
          <div>Idade: {idade}</div>
          <div>Peso: {peso}</div>
          <div>Altura: {altura}</div>
        </div>

        <IMC sexo={sexo} peso={peso} altura={altura} />
      </div >
        </div>

      )
    }
}


