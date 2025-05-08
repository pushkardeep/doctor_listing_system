import React from "react";

interface TextInputProps {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput: React.FC<TextInputProps> = ({
  id,
  label,
  type = "text",
  placeholder,
  value,
  onChange,
}) => (
  <div>
    <label
      className="block text-gray-700 text-sm font-medium mb-1"
      htmlFor={id}
    >
      {label}
    </label>
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={true}
      className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
  </div>
);

export default TextInput;
