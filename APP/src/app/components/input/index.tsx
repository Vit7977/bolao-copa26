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
    <div className="flex flex-col gap-1 w-full">
      <label
        className={`text-sm font-semibold transition-colors ${
          focus ? "text-lime-600" : "text-zinc-700"
        }`}
      >
        {label}
      </label>

      <input
        className={`
      w-full
      text-black
      px-4
      py-2.5
      rounded-xl
      border
      bg-white
      outline-none
      transition-all
      duration-300
      ${focus ? "border-lime-500 ring-4 ring-lime-100" : "border-zinc-300"}
    `}
        onFocus={() => setFocus(true)}
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
