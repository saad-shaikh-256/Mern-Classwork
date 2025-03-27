import React, { useMemo } from "react";

const useMemoPractical = () => {
  const studentMarks = [
    {
      name: "John Doe",
      marks1: Math.floor(Math.random() * 101),
      marks2: Math.floor(Math.random() * 101),
      marks3: Math.floor(Math.random() * 101),
    },
    {
      name: "Jane Smith",
      marks1: Math.floor(Math.random() * 101),
      marks2: Math.floor(Math.random() * 101),
      marks3: Math.floor(Math.random() * 101),
    },
    {
      name: "Michael Johnson",
      marks1: Math.floor(Math.random() * 101),
      marks2: Math.floor(Math.random() * 101),
      marks3: Math.floor(Math.random() * 101),
    },
    {
      name: "Emily Davis",
      marks1: Math.floor(Math.random() * 101),
      marks2: Math.floor(Math.random() * 101),
      marks3: Math.floor(Math.random() * 101),
    },
    {
      name: "Robert Brown",
      marks1: Math.floor(Math.random() * 101),
      marks2: Math.floor(Math.random() * 101),
      marks3: Math.floor(Math.random() * 101),
    },
    {
      name: "Sarah Wilson",
      marks1: Math.floor(Math.random() * 101),
      marks2: Math.floor(Math.random() * 101),
      marks3: Math.floor(Math.random() * 101),
    },
    {
      name: "David Martinez",
      marks1: Math.floor(Math.random() * 101),
      marks2: Math.floor(Math.random() * 101),
      marks3: Math.floor(Math.random() * 101),
    },
  ];
  const studentMark = studentMarks;

  const filterUsingMemo = useMemo(() => {
    return studentMarks
      .map((student, idx) => {
        const rollNo = idx + 1;
        const { marks1, marks2, marks3 } = student;
        const total = marks1 + marks2 + marks3;
        const per = total / 3;
        const roundedPer = Math.round(per);

        const markClass = (marks) => (marks < 40 ? "text-red-600" : "");

        if (per > 50) {
          return (
            <tr key={idx}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {rollNo}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {student.name}
              </td>
              <td
                className={`px-6 py-4 whitespace-nowrap text-sm ${markClass(marks1)}`}
              >
                {marks1}
              </td>
              <td
                className={`px-6 py-4 whitespace-nowrap text-sm ${markClass(marks2)}`}
              >
                {marks2}
              </td>
              <td
                className={`px-6 py-4 whitespace-nowrap text-sm ${markClass(marks3)}`}
              >
                {marks3}
              </td>
              <td
                className={`px-6 py-4 whitespace-nowrap text-sm ${markClass(total)}`}
              >
                {total}
              </td>
              <td
                className={`px-6 py-4 whitespace-nowrap text-sm ${markClass(roundedPer)}`}
              >
                {roundedPer}%
              </td>
            </tr>
          );
        }
        return null;
      })
      .filter(Boolean);
  }, [studentMarks]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-6xl">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
          Student Performance (useMemo Practical)
        </h1>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Roll No
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  PHP
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Java
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Python
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Percentage
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filterUsingMemo.length > 0 ? (
                filterUsingMemo
              ) : (
                <tr>
                  <td
                    colSpan="7"
                    className="px-6 py-4 text-center text-sm text-gray-500"
                  >
                    No students with percentage above 50%
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="mt-4 text-center text-sm text-gray-500">
          Showing students with percentage above 50% (using useMemo for
          filtering)
        </div>
      </div>
    </div>
  );
};

export default useMemoPractical;