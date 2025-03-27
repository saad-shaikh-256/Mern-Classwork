import React from "react";
import UserContextChild1 from "./userContextChild1";
import { userContext } from "./userContextSetup";

const UserContextParent = () => {
  const username = "@saadshaikh";
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-blue-600 mb-4">Use Context</h1>
        <p className="text-gray-600 mb-6">Providing username to child components</p>

        <div className="border border-gray-200 rounded-lg p-4">
          <userContext.Provider value={username}>
            <UserContextChild1 />
          </userContext.Provider>
        </div>
      </div>
    </div>
  );
};

export default UserContextParent;