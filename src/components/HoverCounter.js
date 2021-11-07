import withCounter from './HOC/withCounter';

const HoverCounter = (props) => {
    const { count, incrementCount } = props;
    return (
        <div>
            <h1 className="px-3 my-3 py-2 bg-blue-500 text-white" onMouseOver={incrementCount}>
                Hover {count} Times
            </h1>
        </div>
    );
};

export default withCounter(HoverCounter);
