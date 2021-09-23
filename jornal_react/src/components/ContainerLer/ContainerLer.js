import React from 'react';
import Noticia from '../Noticia/Noticia';
import Title from '../Title/Title';
import './ContainerLer.scss'

export default class ContainerLer extends React.Component {

    render() {
        const { titulo, descricao, link, img } = this.props;
        return (
            <div class="div">
                <div class="titulo" >
                <Title texto="Leia"/>
                </div>
                <Noticia botao='Site oficial'
                img={img} titulo={titulo} descricao={descricao} link={link} />
            </div>
        );
    }
}