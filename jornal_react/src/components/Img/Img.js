import React from 'react';
import './Img.scss'

export default class Img extends React.Component {

    render() {
        const { img } = this.props;
        return (
            <div className="img">
                <img src={img} alt={img} />
            </div>
        );
    }
}