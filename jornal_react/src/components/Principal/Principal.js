//imports das imagens
import s1 from '../../img/s1.jfif';
import s2 from '../../img/s2.jpeg';
import s3 from '../../img/s3.jpg';
import s4 from '../../img/s4.jpeg';
import s5 from '../../img/s5.png';
import g1 from '../../img/g1.jpg';
import g2 from '../../img/g2.jpeg';
import g3 from '../../img/g3.jpg';
import g4 from '../../img/g4.jpg';
import g5 from '../../img/g5.webp';
import a1 from '../../img/a1.jpg';
import a2 from '../../img/a2.jpg';
import a3 from '../../img/a3.jpg';
import a4 from '../../img/a4.jpg';
import a5 from '../../img/a5.webp';
import jornal from '../../img/jornal.png';
import React from 'react';
import Noticia from '../Noticia/Noticia';
import Title from '../Title/Title';
import ContainerLer from '../ContainerLer/ContainerLer';
import './Principal.scss'

export default class Principal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tit: 'Clique um uma notícia',
            desc: '',
            lin: '',
            im: jornal,
        }
    }

    detalhes = (noticia) => {
        this.setState({
            tit: noticia.titulo,
            desc: noticia.descricao,
            lin: noticia.link,
            im: noticia.img
        })
    }

    render() {

        const noticias = {
            saude: [
                {
                    titulo: 'Planos de saúde',
                    descricao: 'A Comissão de Transparência, Fiscalização do Consumidor aprovou, na terça-feira (21), o Projeto de Lei que obriga as operadoras a comercializarem planos de saúde individual ou familiar.',
                    link: 'https://www12.senado.leg.br/noticias/materias/2021/09/22/venda-obrigatoria-de-planos-de-saude-individuais-e-aprovada',
                    img: s1,
                },
                {
                    titulo: 'Vacinação a adolescentes',
                    descricao: 'Secretário-executivo da pasta disse que série de análises afastou hipótese de relação entre imunização e morte de jovem.',
                    link: 'https://noticias.r7.com/brasilia/volta-da-vacinacao-a-adolescentes-teve-base-em-estudos-diz-saude-23092021',
                    img: s2,
                },
                {
                    titulo: 'A importância da saúde mental',
                    descricao: 'Especialistas alertam para o excesso e indicam o equilíbrio como a solução para ter o melhor rendimento e manter o bem-estar emocional.',
                    link: 'https://www.qconcursos.com/noticias/estudo-para-concurso-saude-mental',
                    img: s3,
                },
                {
                    titulo: 'CoronaVac interditada',
                    descricao: 'Apenas no estado de São Paulo, cerca de 4 milhões de doses de lotes sem autorização foram administradas.',
                    link: 'https://noticias.r7.com/saude/o-que-acontece-com-pessoas-que-tomaram-coronavac-interditada-22092021',
                    img: s4,
                },
                {
                    titulo: 'Posto é alvo de ladrões',
                    descricao: 'Pacientes que tinham consulta marcada nesta manhã deram com a cara na porta.',
                    link: 'https://www.campograndenews.com.br/cidades/capital/posto-de-saude-e-alvo-de-ladroes-e-suspende-atendimento',
                    img: s5,
                },
            ],
            gastronomia: [
                {
                    titulo: 'Nova Iguaçu recebe evento gastronômico',
                    descricao: 'Começa nesta quinta-feira, dia 23, o evento ‘Enchefs’, que traz 25 chefs de cozinha de 17 estados do Brasil para Nova Iguaçu, arte da culinária em mais um lugar.',
                    link: 'https://extra.globo.com/noticias/rio/nova-iguacu-recebe-evento-de-gastronomia-que-reune-chefs-de-todo-pais-25208598.html',
                    img: g1,
                },
                {
                    titulo: 'Governo certifica alunos da Escola de Gastronomia',
                    descricao: 'Nesta sexta-feira, 17, o Instituto de Educação Profissional e Tecnológica Dom Moacyr, promoveu mais um ato de certificação para educandos do Rio Branco.',
                    link: 'https://agencia.ac.gov.br/governo-certifica-alunos-de-cursos-tecnicos-da-escola-de-gastronomia/',
                    img: g2,
                },
                {
                    titulo: 'Concurso Enchefs Acre marca encerramento de festival',
                    descricao: 'A escola que é um dos centros de ensino profissionalizante do Instituto de Educação Profissional do Acre, foi, pela primeira vez, palco do festival, encerrando nesta sexta-feira, 3.',
                    link: 'https://agencia.ac.gov.br/concurso-enchefs-acre-marca-encerramento-de-festival-na-escola-de-gastronomia/',
                    img: g3,
                },
                {
                    titulo: 'Vila gastronômica será inaugurada em Salvador',
                    descricao: 'Abertura para convidados será em 6 de outubro. No dia seguinte, dia 7, a Vila estará aberta ao público, com dezenas de pratos e peculiaridades.',
                    link: 'https://www.correio24horas.com.br/noticia/nid/vila-gastronomica-sera-inaugurada-no-terminal-nautico-de-salvador/',
                    img: g4,
                },
                {
                    titulo: 'Escola de Gastronomia Gourmet abre em Gramado',
                    descricao: 'A franquia vai oferecer cursos nas áreas de gastronomia, gestão e turismo, com o objetivo de profissionalizar o setor gastronômico e ainda ofertar cursos aos interessados por hobby.',
                    link: 'https://diariodoturismo.com.br/noticias-do-rs-escola-de-gastronomia-chef-gourmet-abre-em-gramado/',
                    img: g5,
                },
            ],
            astrologia: [
                {
                    titulo: 'Lua Cheia pode agitar a semana de acordo com signo',
                    descricao: 'Semana de 20 a 26 de setembro de 2021 começa com fase lunar cheia, marcada por agitação e imprevistos que podem acontecer no coletivo e na vida pessoal, prepare-se.',
                    link: 'https://www.terra.com.br/vida-e-estilo/horoscopo/astrologia/lua-cheia-pode-agitar-a-semana-veja-as-previsoes-astrologicas,6ac9b1e99c70eb30be81d3ee8efbc85f7gnb6v85.html',
                    img: a1,
                },
                {
                    titulo: 'Os 5 signos do zodíaco mais calmos',
                    descricao: 'Gêmeos é o derradeiro filho em série de todos os signos do zodíaco. Você está sempre divertido e nunca leva as coisas a sério.',
                    link: 'https://opetroleo.com.br/os-5-signos-do-zodiaco-mais-calmos-da-astrologia/',
                    img: a2,
                },
                {
                    titulo: 'Horóscopo de setembro da Susan Miller',
                    descricao: 'As previsões para todos os signos no horóscopo de setembro, escrito pela astróloga americana Susan Miller.',
                    link: 'https://claudia.abril.com.br/astrologia/susan-miller-horoscopo-setembro-2021/',
                    img: a3,
                },
                {
                    titulo: 'Descubra os signos mais introvertidos e extrovertidos',
                    descricao: 'Se você é virginiano, então é possível que você seja mais reservado e sensato, mas é também um amigo ferozmente leal.',
                    link: 'https://www.noticiasaominuto.com.br/lifestyle/1843154/descubra-os-signos-mais-introvertidos-e-extrovertidos-do-zodiaco',
                    img: a4,
                },
                {
                    titulo: 'Sol e Lua manifestam forças masculinas e femininas',
                    descricao: 'O Sol é o nosso signo e tem a ver com a força masculina e, portanto, com a ligação com o nosso pai.',
                    link: 'https://www.uol.com.br/universa/noticias/redacao/2021/09/03/sol-e-lua-manifestam-forcas-masculinas-e-femininas-de-cada-signo-entenda.htm',
                    img: a5,
                },
            ]
        };

        const { tit, desc, lin, im } = this.state;

        return (
        <div id='jornal'>
                <div id="titulo">
                <Title texto="Jornal M.L" />
                <Title texto="Fique por dentro de todas as notícias" />
                </div>
            <div id="container">
                <div id="noticias">
                    <div class="tit">
                    <Title texto="Últimas notícias"/>
                    </div>
                    <div id="sessoes">
                        <div className="sessao" id='saude'>
                            <Title texto="Saúde" />
                            <div className="noticias" id="saude">
                                {
                                noticias.saude.map((noticia, key) => {
                                    return <Noticia
                                        titulo={noticia.titulo}
                                        descricao={noticia.descricao}
                                        img={noticia.img}
                                        botao="Detalhes"
                                        onClick={() => this.detalhes(noticia)}
                                        key={key}/>
                                    })
                                }
                        </div>
                    </div>
                        <div className="sessao" id='gastronomia'>
                        <Title texto="Gastronomia" />
                        <div className="noticias" id="gastronomia">
                                {
                                    noticias.gastronomia.map((noticia, key) => {
                                        return <Noticia
                                        titulo={noticia.titulo}
                                        descricao={noticia.descricao}
                                        img={noticia.img}
                                        botao="Detalhes"
                                        onClick={() => this.detalhes(noticia)}
                                        key={key}/>
                                    })
                                }
                                </div>
                        </div>
                        <div className="sessao" id='astrologia'>
                            <Title texto="Astrologia" />
                            <div className="noticias" id="astrologia">
                                {
                                    noticias.astrologia.map((noticia, key) => {
                                    return <Noticia
                                        titulo={noticia.titulo}
                                        descricao={noticia.descricao}
                                        img={noticia.img}
                                        botao="Detalhes"
                                        onClick={() => this.detalhes(noticia)}
                                        key={key}/>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>

                    <div id="ler">
                        <ContainerLer
                            img={im}
                            titulo={tit}
                            descricao={desc}
                            link={lin}
                        />
                    </div>
                </div>
            </div>
        );
    }
}