import React from 'react';
import Header from './components/header/Header';
import Unmount from './components/unmount/Unmount';
import { Lifecycle } from "./components/lifecycle/Lifecycle";
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exibe: false,
      lifecycle: true
    };
  }

  click() {
    this.setState({
      exibe: !this.state.exibe,
    })
  }

  clean() {
    this.setState({
      lifecycle: !this.state.lifecycle,
    })
  }

  render() {
    return (
      <div className="App">
        <div className="item">
          <Header />
        </div>
        <div className="item">
          <Unmount />
          </div>

        { <div className="item">
          <button onClick={() => this.click()}>Exibir componente</button>
          <button onClick={() => this.clean()}>Limpar componente</button>
          {this.state.lifecycle && <Lifecycle exibicao={this.state.exibe} />} 
        </div>}
      </div>
    );
  }
}