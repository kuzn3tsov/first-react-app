import {useState} from 'react';
export function Counter({counterStart = 0, counterStepUp = 1, counterStepDown = 1 }) {
    const [count, setCount] = useState(counterStart);

    const incrementClick = () => {
        setCount(count + counterStepUp);
    };
    const decrementClick = () => {
        setCount(count - counterStepDown);
    };
    return (
        <div className="counter">
            <button onClick={decrementClick}>−</button>
            <h2>{count}</h2>
            <button onClick={incrementClick}>+</button>
        </div>
    );
}