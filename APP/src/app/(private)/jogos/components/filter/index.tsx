"use client";
import { FaFilter } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";

interface Props {
  filtros: { label: string; value: string }[];
  filtroAtivo: string;
  onFiltroChange: (value: string) => void;
}

export default function Filter({ filtros, filtroAtivo, onFiltroChange }: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const labelAtivo = filtros.find((f) => f.value === filtroAtivo)?.label ?? "Filtrar";

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-2 bg-white text-black p-2 px-4 rounded-lg border border-gray-200 hover:bg-gray-50"
      >
        <FaFilter />
        <span>Filtrar</span>
        <span className="text-xs text-gray-400">{labelAtivo}</span>
        <span className="text-xs">{open ? "▴" : "▾"}</span>
      </button>

      {open && (
        <div className="absolute right-0 mt-1 w-40 bg-white border border-gray-200 rounded-lg shadow-sm z-10 overflow-hidden">
          {filtros.map((filtro) => (
            <button
              key={filtro.value}
              onClick={() => {
                onFiltroChange(filtro.value);
                setOpen(false);
              }}
              className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 ${
                filtroAtivo === filtro.value ? "font-semibold text-blue-600" : "text-gray-700"
              }`}
            >
              {filtro.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}