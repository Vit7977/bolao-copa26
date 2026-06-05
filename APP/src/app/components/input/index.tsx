"use client";

import { useState } from "react";

interface Props {
  label: string;
  type?: string;
  name?: string;
  placeholder?: string;
  min?: number;
  max?: number;
  required?: boolean;
}

export default function Input({
  label,
  type = "text",
  name,
  placeholder,
  min,
  max,
  required,
}: Props) {
  const [focus, setFocus] = useState(false);

  return (
    <div className="flex flex-col p-2">
      <label
        className={`font-medium ml-1 transition-all duration-300 ${focus ? "text-lime-700" : "text-black"}`}
      >
        {label}
      </label>
      <input
        className={`w-48 pl-2 outline-none border p-1 rounded-lg bg-zinc-100 transition-all duration-300 ${focus ? "border-lime-500" : ""}`}
        onClick={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        type={type}
        name={name}
        placeholder={placeholder}
        min={min}
        max={max}
        required={required}
      />
    </div>
  );
}
