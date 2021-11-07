import React from 'react';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';

function App() {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen font-mono bg-gray-200 text-center">
            <ClickCounter />
            <HoverCounter />
        </div>
    );
}

export default App;
