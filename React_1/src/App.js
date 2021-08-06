//Maria Alice 3b1 Framework

import './App.css';

const texto = "Meu nome é Maria Alice";


const parte1 = () => <h1>Tudo bom?</h1>
const parte2 = () => <parte1 />
const propsEx = (props) => <h1>{props.Maria}</h1> 

function parte3(props) {
  const {color, text} = props;
  return(
    <div style= {{backgroundColor: color}}>
    {text}
    </div>
  )
}

function parte4(props) {
  return(
    <div style= {{backgroundColor: "pink"}}>
    {props.children}
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <h1>{texto}</h1>
    </div>
  );
}

export default App;
