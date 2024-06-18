import React from 'react';

export const Badge = ({ children }) => {
  return <span className="bg-gray-200 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">{children}</span>;
};
