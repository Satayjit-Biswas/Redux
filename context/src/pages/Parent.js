import React, { useContext } from "react";
import { COUNTER_CONTEXT } from "../App";
import Child from "./Child";

const Parent = () => {
    const { count, setCount } = useContext(COUNTER_CONTEXT);
    return (
        <div>
            <p>Parent</p>
            <h2>{count}</h2>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={() => setCount(count + 1)}>increment</button>
            <Child></Child>
        </div>
    );
};

export default Parent;
