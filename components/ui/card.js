import React from 'react';

export const Card = ({ children }) => {
  return <div className="border rounded shadow-lg">{children}</div>;
};

export const CardHeader = ({ children }) => {
  return <div className="p-4 border-b">{children}</div>;
};

export const CardContent = ({ children }) => {
  return <div className="p-4">{children}</div>;
};
