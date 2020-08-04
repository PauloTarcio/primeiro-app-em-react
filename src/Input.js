import React from 'react';

export default function Input({label, value, onChange}) {

  return (
    <label>
      {label}:
      <input onChange={e => onChange(e.target.value)} value={value} />
    </label>
  );
}
