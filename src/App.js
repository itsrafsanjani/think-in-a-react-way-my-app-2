import React from 'react';
import ClickCounter from './components/ClickCounter';
import Counter from './components/Counter';
import Section from './components/Section';
import ThemeContext from './contexts/themeContext';

export default class App extends React.Component {
    state = {
        theme: 'dark',
    };

    render() {
        const { theme } = this.state;
        return (
            <div className="flex flex-col justify-center items-center min-h-screen font-mono bg-gray-200 text-center">
                <Counter>
                    {(count, incrementCount) => (
                        <ClickCounter count={count} incrementCount={incrementCount} />
                    )}
                </Counter>
                <ThemeContext.Provider value={{ theme }}>
                    <Section />
                </ThemeContext.Provider>
            </div>
        );
    }
}
