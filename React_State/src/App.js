import './App.css';
import img from './doce.png';
import img2 from './jap.png';

export default class Doces extends React.Component{
  
const Nome = () => <h4>Maria Alice Dias</h4>
const Idade = ({texto}) => <p>{texto}</p>

const descricao = (doce, desc) => {
  return alert(`O doce ${doce} é tradicional em ${desc}`)
  }

const doces = [
  { doce: "Bala Baiana", desc: "Bahia" },
  { doce: "Mocotó", desc: "Minas Gerais" },
  { doce: "Mochi", desc: "Japão" },
  { doce: "Marshmallow", desc: "EUA" },
  { doce: "Açaí", desc: "Amazonas" },
  { doce: "Petit Gateau", desc: "França" }]

  constructor(props) {
    super(props);
    this.descricao = ({descricao: '' })
  }
}

mudar(desc){
  this.setState({descricao: desc});
}

render() {
  return (
    <div className="App">
      <h1>DOCES PELO MUNDO</h1>
      <p>
        {
          doces.map((item, index) =>
            <p key={index} onClick={() => mudar()</p>)
        }
      </p>
      <div>
        <h1>PERFIL</h1>
        <p><Nome/>
        <Idade texto="17 anos de idade"/></p>
        <p>
        <img src={img} alt="Os melhores doces" border="3px" width="300px" height="250px"></img>
        <img src={img2} alt="Japoneses" border="3px" width="300px" height="250px"></img>
        </p>
        <p>
          <a href="https://viagemeturismo.abril.com.br/materias/do-brigadeiro-ao-quindim-veja-fotos-de-14-doces-tipicamente-brasileiros/">Clique aqui e veja os doces tradicionais do Brasil</a>
          <a href="https://youtu.be/4g0DrGF-5xs">Assista já esse vídeo</a>
        </p>
      </div>
    </div>
    
  );
}

export default App;
