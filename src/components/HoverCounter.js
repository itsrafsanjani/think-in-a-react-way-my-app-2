import React from 'react';

export default function HoverCounter({ count, incrementCount, theme, switchTheme }) {
    const style = theme === 'dark' ? { backgroundColor: '#333333', color: '#ffffff' } : null;

    return (
        <div>
            <h1
                className="my-3 px-20 py-8 bg-blue-500 text-white"
                onMouseOver={incrementCount}
                style={style}
            >
                Hover {count} Times
            </h1>
            <button
                type="button"
                className="px-3 py-2 border-2 border-blue-500 hover:bg-blue-500 hover:text-white"
                onClick={switchTheme}
            >
                Change Theme
            </button>
        </div>
    );
}
