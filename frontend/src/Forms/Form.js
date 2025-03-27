import React, { useState } from 'react';

const Form = () => {
  const [data, setData] = useState({
    firstName: '',
    lastName: ''
  });

  const submitForm = (event) => {
    event.preventDefault();
    console.log(data);
    setData({ firstName: '', lastName: '' });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Form in React</h1>

        <form onSubmit={submitForm} className="space-y-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
              <input
                type="text"
                name="firstName"
                placeholder="Enter your first name"
                onChange={(e) => setData({ ...data, firstName: e.target.value })}
                value={data.firstName}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
              <input
                type="text"
                name="lastName"
                placeholder="Enter your last name"
                onChange={(e) => setData({ ...data, lastName: e.target.value })}
                value={data.lastName}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-sm hover:shadow-md"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;