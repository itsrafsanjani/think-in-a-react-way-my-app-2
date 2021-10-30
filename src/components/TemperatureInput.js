import React from 'react';

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit',
};

export default function TemperatureInput({ temperature, scale, onTemperatureChange }) {
    return (
        <fieldset className="border border-solid border-gray-500 p-3">
            <legend className="px-2">Enter temperature in {scaleNames[scale]}:</legend>
            <input
                className="p-2 border border-gray-500 outline-none"
                type="text"
                value={temperature}
                onChange={(e) => onTemperatureChange(e, scale)}
            />
        </fieldset>
    );
}
