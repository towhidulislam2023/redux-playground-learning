import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment ,incrementByvalue,decrementByvalue} from "../redux/features/counter/counterSlice";

const Counter = () => {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="h-96 bg-gray-400 w-[700px] mx-auto my-20 flex items-center justify-center ">
      <div className="flex justify-center items-center gap-10">
        <button
          onClick={() => dispatch(decrementByvalue(5))}
          className="bg-red-300 px-3 py-1 rounded text-5xl"
        >
          -5
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="bg-red-300 px-3 py-1 rounded text-5xl"
        >
          -
        </button>
        <p className="text-4xl">{count}</p>
        <button
          onClick={() => dispatch(increment())}
          className="bg-red-300 px-3 py-1 rounded text-5xl"
        >
          +
        </button>
        <button
          onClick={() => dispatch(incrementByvalue(5))}
          className="bg-red-300 px-3 py-1 rounded text-5xl"
        >
          +5
        </button>
      </div>
    </div>
  );
};

export default Counter;
