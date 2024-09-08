import React, { useState, useEffect, useRef } from "react";

export interface GRTextAreaProps
  extends React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  label: string;
}

export default function GRTextArea(props: GRTextAreaProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [value, setValue] = useState(props.value || "");

  useEffect(() => {
    if (textareaRef.current) {
      // Ajusta a altura com base no conteúdo do textarea
      textareaRef.current.style.height = "auto"; // Reseta a altura
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Define a altura de acordo com o conteúdo
    }
  }, [value]); // Dispara sempre que o valor do textarea muda

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
    if (props.onChange) {
      props.onChange(e); // Caso queira passar para o controle superior
    }
  };

  return (
    <div className="mb-4">
      <label
        htmlFor={props.name}
        className="block text-gray-700 text-sm font-semibold mb-2"
      >
        {props.label}
      </label>
      <textarea
        {...props}
        ref={textareaRef}
        value={value}
        onChange={handleChange}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        style={{ height: "auto", overflow: "hidden" }} // Impede o scrollbar vertical
      ></textarea>
    </div>
  );
}
