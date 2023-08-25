import {
    decrement,
    increment,
    incrementByAmount,
} from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

function App() {
    const count = useAppSelector((state) => state.counter.count);
    const dispatch = useAppDispatch();
    return (
        <>
            <button
                className="rounded-s-lg "
                onClick={() => dispatch(increment())}
            >
                Increment
            </button>
            <br></br>
            <button
                className="rounded-s-lg "
                onClick={() => dispatch(incrementByAmount(5))}
            >
                IncrementByValue
            </button>
            <div>{count}</div>
            <button
                className="rounded-s-lg"
                onClick={() => dispatch(decrement())}
            >
                decrement
            </button>
        </>
    );
}

export default App;
