import React from 'react';

export default function HoverCounter({ count, incrementCount, theme }) {
    const style = theme === 'dark' ? { backgroundColor: '#333333', color: '#ffffff' } : null;

    return (
        <div>
            <h1
                className="px-3 my-3 py-2 bg-blue-500 text-white"
                onMouseOver={incrementCount}
                style={style}
            >
                Hover {count} Times
            </h1>
        </div>
    );
}
