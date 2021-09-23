import React from 'react';

export default class Title extends React.Component {

    render() {
        const { texto } = this.props;
        return (
            <div>
                <h2>{texto}</h2>
            </div>
        );
    }
}