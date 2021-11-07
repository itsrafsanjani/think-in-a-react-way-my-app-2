import withCounter from './HOC/withCounter';

const ClickCounter = (props) => {
    const { count, incrementCount } = props;
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
};

export default withCounter(ClickCounter);
