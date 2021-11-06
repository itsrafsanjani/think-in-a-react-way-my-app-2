import React from 'react';

export default class Emoji extends React.Component {
    addEmoji = (text, emoji) => `${emoji} ${text} ${emoji}`;

    render() {
        const { children } = this.props;
        return children({ addEmoji: this.addEmoji });
    }
}
