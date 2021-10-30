export default function BoilingVerdict({ celsius = 0 }) {
    if (celsius >= 100) {
        return <p className="p-3 bg-gray-500 text-white">The water would boil.</p>;
    }

    return <p className="p-3 bg-gray-500 text-white">Water would not boil.</p>;
}
