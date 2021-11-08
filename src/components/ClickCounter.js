import React from 'react';

export default function ClickCounter({ count, incrementCount }) {
    return (
        <div>
            <button
                type="button"
                className="px-3 my-3 py-2 bg-blue-500 text-white"
                onClick={incrementCount}
            >
                Clicked {count} Times
            </button>
        </div>
    );
}
