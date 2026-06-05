"use client";

import { useState } from "react";

interface SelectOption {
  label: string;
  value: string;
}

interface Props {
  label: string;
  name?: string;
  options?: SelectOption[];
}

export default function Select({ label, name, options }: Props) {
  const [focus, setFocus] = useState(false);

  return (
    <div className="flex flex-col p-2">
      <label
        className={`font-medium ml-1 transition-all duration-300 ${
          focus ? "text-lime-700" : "text-black"
        }`}
      >
        {label}
      </label>

      <select
        className={`w-48 pl-2 outline-none border p-1 rounded-lg bg-zinc-100 transition-all duration-300 cursor-pointer ${
          focus ? "border-lime-500" : ""
        }`}
        name={name}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      >
        <option value="">Selecione</option>

        {options?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
}