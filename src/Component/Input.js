import React from "react";

const Input = ({
  name,
  value,
  onChange,
  type = "text",
  placeholder = "",
  required = false,
}) => {
  return (
    <div className="flex flex-col">
      <label className="font-semibold">{name}</label>
      <input
        className={`border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500 ${
          required && !value ? "border-red-500" : ""
        }`}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default Input;
