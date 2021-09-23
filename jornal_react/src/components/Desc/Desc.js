import React from 'react';

export default class Desc extends React.Component {

    render() {
        const { texto } = this.props;
        return (
            <div>
                <h3>{texto}</h3>
            </div>
        );
    }
}