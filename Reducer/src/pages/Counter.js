import React, { useReducer } from "react";

const Counter = () => {
    const initial = 0;
    const reducer = (state, action) => {
        // if (action.type === "INC") {
        //     return state + action.payloads.count;
        // } else if (action.type === "DEC") {
        //     return state - action.payloads.count;
        // }
        switch (action.type) {
            case "DEC":
                return state + action.payloads.count;
            case "INC":
                return state - action.payloads.count;
            default:
                return state;
        }
    };
    const [state, dispatch] = useReducer(reducer, initial);
    return (
        <div>
            <p>Counter</p>
            <h2>{state}</h2>
            <button
                onClick={() =>
                    dispatch({ type: "DEC", payloads: { count: 5 } })
                }
            >
                Decrement
            </button>
            <button
                onClick={() =>
                    dispatch({ type: "INC", payloads: { count: 5 } })
                }
            >
                increment
            </button>
        </div>
    );
};

export default Counter;
