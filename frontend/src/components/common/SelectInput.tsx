import React from "react";

interface Option {
  label: string;
  value: string;
}

interface SelectInputProps {
  id: string;
  label: string;
  options: Option[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectInput: React.FC<SelectInputProps> = ({
  id,
  label,
  options,
  value,
  onChange,
}) => (
  <div>
    <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor={id}>
      {label}
    </label>
    <select
      id={id}
      value={value}
      onChange={onChange}
      required={true}
      className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
    >
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  </div>
);

export default SelectInput;
