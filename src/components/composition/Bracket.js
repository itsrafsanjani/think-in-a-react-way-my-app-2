import React from 'react';

export default class Bracket extends React.Component {
    addBracket = (text) => `[ ${text} ]`;

    render() {
        const { children } = this.props;
        return children({ addBracket: this.addBracket });
    }
}
