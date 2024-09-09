// components/CustomInput.tsx

import React from "react";

interface GRInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
  id: string;
}

function GRInput(props: GRInputProps) {
  return (
    <div className="mb-4">
      <label
        htmlFor={props.id}
        className="block text-gray-700 text-sm font-semibold mb-2"
      >
        {props.label}
      </label>
      <input
        {...props}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

export default GRInput;
