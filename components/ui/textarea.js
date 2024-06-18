import React from 'react';

export const Textarea = (props) => {
  return <textarea {...props} className={`border p-2 rounded ${props.className}`} />;
};
