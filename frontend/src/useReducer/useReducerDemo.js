import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      throw new Error("Unknown action type");
  }
}

const UseReducerDemo = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          useReducer Counter
        </h1>

        <div className="text-center mb-8">
          <span className="text-5xl font-bold text-gray-800">
            {state.count}
          </span>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => dispatch({ type: "increment" })}
            className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-sm hover:shadow-md"
          >
            Increment
          </button>

          <button
            onClick={() => dispatch({ type: "decrement" })}
            disabled={state.count === 0}
            className={`px-6 py-2 font-medium rounded-lg transition-colors duration-300 shadow-sm hover:shadow-md ${
              state.count === 0
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-gray-600 text-white hover:bg-gray-700"
            }`}
          >
            Decrement
          </button>

          <button
            onClick={() => dispatch({ type: "reset" })}
            className="px-6 py-2 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors duration-300 shadow-sm hover:shadow-md"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseReducerDemo;
