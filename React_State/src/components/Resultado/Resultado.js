import React from 'react';

export default class Resultado extends React.Component {
    render() {
        const { children, onClick } = this.props;
        return (
            <div>
                <button onClick={onClick}>{children}</button>
            </div>
        )
    }
}