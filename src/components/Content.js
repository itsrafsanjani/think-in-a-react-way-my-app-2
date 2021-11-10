import React from 'react';
import ThemeContext from '../contexts/themeContext';
import Counter from './Counter';
import HoverCounter from './HoverCounter';

export default function Content() {
    return (
        <div>
            <h1>This is a content</h1>
            <Counter>
                {(count, incrementCount) => (
                    <ThemeContext.Consumer>
                        {({ theme }) => (
                            <HoverCounter
                                count={count}
                                incrementCount={incrementCount}
                                theme={theme}
                            />
                        )}
                    </ThemeContext.Consumer>
                )}
            </Counter>
        </div>
    );
}
