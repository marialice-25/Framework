import React from 'react';

export class Lifecycle extends React.Component {
    componentDidMount() {
        console.log('Mount', this.props)
    }
    componentDidUpdate() {
        console.log('Update', this.props)
    }
    componentWillUnmount() {
        console.log('Unmount', this.props)
    }
    render() {
        return (
            <div className="App" >
                <h1>Elemento principal</h1>
                <br />
                {this.props.exibicao ? <h2>Elemento exibido...</h2> : null}
                <br />
            </div>
        );
    }
}