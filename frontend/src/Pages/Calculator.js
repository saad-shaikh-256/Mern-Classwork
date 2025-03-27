import React, { useState } from 'react';

const Calculator = () => {
   const [num1, setNum1] = useState(0);
   const [num2, setNum2] = useState(0);
   const [result, setResult] = useState(0);

   const Reset = () => {
      setNum1(0);
      setNum2(0);
      setResult(0);
   };

   const Sum = () => {
      setResult(num1 + num2);
   };

   const Subtract = () => {
      setResult(num1 - num2);
   };

   const Multiply = () => {
      setResult(num1 * num2);
   };

   const Divide = () => {
      if (num2 === 0) {
         alert("Cannot divide by zero!");
         setResult(0);
         return;
      }
      setResult(num1 / num2);
   };

   const Power = () => {
      setResult(Math.pow(num1, num2));
   };

   return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
         <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-xs"> {/* Reduced max width */}
            <h1 className="text-2xl font-bold text-center text-blue-600 mb-4">Calculator</h1>

            {/* Inputs in single line with constrained width */}
            <div className="flex space-x-2 mb-3"> {/* Reduced spacing */}
               <input
                  type="tel"
                  value={num1}
                  onChange={(e) => setNum1(Number(e.target.value))}
                  className="w-1/2 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
               />
               <input
                  type="tel"
                  value={num2}
                  onChange={(e) => setNum2(Number(e.target.value))}
                  className="w-1/2 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
               />
            </div>

            {/* Result field */}
            <input
               type="number"
               value={result}
               disabled
               className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-100 mb-3 text-sm"
            />

            {/* Operation buttons - made smaller */}
            <div className="grid grid-cols-4 gap-2 mb-3"> {/* Reduced gap */}
               <button
                  onClick={Sum}
                  className="px-2 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300 text-sm"
               >
                  +
               </button>
               <button
                  onClick={Subtract}
                  className="px-2 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300 text-sm"
               >
                  -
               </button>
               <button
                  onClick={Multiply}
                  className="px-2 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300 text-sm"
               >
                  ×
               </button>
               <button
                  onClick={Divide}
                  className="px-2 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300 text-sm"
               >
                  ÷
               </button>
            </div>

            {/* Full-width buttons */}
            <div className="space-y-2">
               <button
                  onClick={Power}
                  className="w-full px-3 py-2 bg-gray-600 text-white font-medium rounded-lg hover:bg-gray-700 transition-colors duration-300 text-sm"
               >
                  Power (^)
               </button>
               <button
                  onClick={Reset}
                  className="w-full px-3 py-2 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors duration-300 text-sm"
               >
                  AC
               </button>
            </div>
         </div>
      </div>
   );
};

export default Calculator;