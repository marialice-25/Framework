import React from 'react';

export default class Unmount extends React.Component {
    componentWillUnmount() {
        alert("Elemento principal desmontado");
    }
    render() {
        return (
            <h1>Unmount</h1>
        );
    }
}