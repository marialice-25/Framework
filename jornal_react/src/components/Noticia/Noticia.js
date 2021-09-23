import React from 'react';
import Title from '../Title/Title';
import Img from '../Img/Img';
import Desc from '../Desc/Desc';
import Btn from '../Btn/Btn';
import './Noticia.scss'

export default class Noticia extends React.Component {

    render() {
        const { titulo, descricao, img, onClick, link, botao } = this.props;
        
        return (
            <div class="not">
                <Title texto={titulo} />
                <Img img={img} />
                <Desc texto={descricao} />
                <Btn onClick={onClick} link={link}>{botao}</Btn>
            </div>
        );
    }
}