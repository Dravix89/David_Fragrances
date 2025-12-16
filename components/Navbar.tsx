"use client";

import Link from "next/link";
import Logo from "./Logo";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/spring", label: "Spring" },
    { href: "/summer", label: "Summer" },
    { href: "/fall", label: "Fall" },
    { href: "/winter", label: "Winter" },
    { href: "/about", label: "About" },
  ];

  return (
    <nav className="bg-[#FDFFF9] shadow-md py-4 px-6 flex justify-between items-center font-bold relative z-50">
      {/* Logo */}
      <Logo />

      {/* Menu Desktop */}
      <div className="hidden md:flex gap-8">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="transition-colors"
            style={{ color: "#76AC6D" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#a5d177")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#76AC6D")}
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Burger Icon (mobile) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-[#76AC6D] focus:outline-none"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center py-4 space-y-4 md:hidden transition-all duration-300">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors text-lg"
              style={{ color: "#76AC6D" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#a5d177")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#76AC6D")}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
