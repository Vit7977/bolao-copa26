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
    <div className="flex flex-col gap-1 w-full">
      <label
        className={`text-sm font-semibold transition-colors ${
          focus ? "text-lime-600" : "text-zinc-700"
        }`}
      >
        {label}
      </label>

      <select
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
      cursor-pointer
      ${focus ? "border-lime-500 ring-4 ring-lime-100" : "border-zinc-300"}
    `}
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
