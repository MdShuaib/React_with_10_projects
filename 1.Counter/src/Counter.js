import { useState } from 'react';
const Counter = () => {
    const [count, setstate] = useState(0);
    const increment = () => setstate(count+1);
    const decrement = () => setstate(count-1);
    
    return (
        <>
            <div className="container">
                <h1 className="number">{count}</h1>
            </div>

            <section className="btns-container">
                <button onClick={increment} className="increment">
                    +
                </button>
                <button onClick={decrement} className="increment">
                    -
                </button>
            </section>
        </>
    );
}

export default Counter;
