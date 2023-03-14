import React, { useContext } from "react";
import { COUNTER_CONTEXT } from "../App";

const Child = () => {
  const { count, setCount } = useContext(COUNTER_CONTEXT);

    return (
        <div>
            <p>Child</p>
            <h2>{count}</h2>
        </div>
    );
};

export default Child;
