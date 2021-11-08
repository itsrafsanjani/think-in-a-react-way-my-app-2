import React from 'react';

export default function HoverCounter({ count, incrementCount }) {
    return (
        <div>
            <h1 className="px-3 my-3 py-2 bg-blue-500 text-white" onMouseOver={incrementCount}>
                Hover {count} Times
            </h1>
        </div>
    );
}
