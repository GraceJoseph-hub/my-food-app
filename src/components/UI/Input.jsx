import React from 'react'

const Input = ({ input, label, type }) => {
  return (
    <div className="flex items-center mb-[0.5rem]">
      <label htmlFor={input.id} className="font-bold mr-[1rem]">
        {label}
      </label>
      <input
        type={type}
        {...input}
        className="w-[3rem] rounded border border-solid border-gray-300 pl-[0.5rem]"
      />
    </div>
  );
};

export default Input