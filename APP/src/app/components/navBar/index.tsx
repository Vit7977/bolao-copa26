"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaHome } from "react-icons/fa";
import { PiSoccerBallFill } from "react-icons/pi";
import { TbTargetArrow } from "react-icons/tb";

const links = [
  { href: "/", label: "Home", icon: FaHome },
  { href: "/jogos", label: "Jogos", icon: PiSoccerBallFill },
  { href: "/palpites", label: "Palpites", icon: TbTargetArrow },
];

export default function NavBar() {
  const pathname = usePathname();
  const [focus, setFocus] = useState(false);

  return (
    <nav
      onMouseEnter={() => setFocus(true)}
      onMouseLeave={() => setFocus(false)}
      className={`
        fixed h-screen bg-white shadow-lg
        transition-all duration-300 ease-in-out
        ${focus ? "w-36" : "w-15"}
    `}
    >
      <div className="h-full flex flex-col justify-center gap-4 p-2">
        {links.map(({ href, label, icon: Icon }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`
                  flex items-center gap-2 p-2 w-full
                  transition-colors duration-400 ease-in-out text-black border-l-4
                  ${active ? "border-lime-500 hover:border-lime-600 hover:bg-lime-100" : "hover:bg-lime-100 border-transparent"}
                `}
            >
              <Icon className="text-xl shrink-0" />

              <span
                className={`overflow-hidden whitespace-nowrap transition-all duration-400 ease-out
                    ${focus 
                    ? "max-w-[120px] opacity-100 translate-x-0" : "max-w-0 opacity-0 -translate-x-2"}`}
                >
                {label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
