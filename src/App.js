import React from 'react';
import Bracket from './components/composition/Bracket';
import Emoji from './components/composition/Emoji';
import Text from './components/composition/Text';

function App() {
    return (
        <div className="flex justify-center items-center min-h-screen font-mono bg-gray-200 text-center">
            <Emoji>
                {({ addEmoji }) => (
                    <Bracket>
                        {({ addBracket }) => <Text addEmoji={addEmoji} addBracket={addBracket} />}
                    </Bracket>
                )}
            </Emoji>
        </div>
    );
}

export default App;
