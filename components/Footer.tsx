"use client";

import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#FDFFF9]  text-[#5d8057] font-sans mt-20 p-5 rounded-t-2xl shadow-inner">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-center gap-6 md:gap-52 text-center md:text-left">
        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-1">Follow Me</h3>
          <div className="flex justify-center md:justify-start gap-4 items-center">
            <a
              href="https://instagram.com/david25_fragrances"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-75 transition"
            >
              <Image
                src="/logos/instagram-48.png"
                alt="Instagram"
                width={30}
                height={30}
              />
            </a>
          </div>
        </div>

        {/* Text */}
        <div className="flex flex-col items-center">
          <p className="italic text-m text-[#76AC6D]">
            “ Perfume is the most intense form of memory. ” - Jean Paul Guerlain
          </p>
          <p className="text-sm text-[#5d8057] mt-1">
            © {new Date().getFullYear()} David Fragrances. All Rights Reserved.
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-semibold mb-1">Useful Links</h3>
          <ul className="space-y-1 text-m">
            <li>
              <a
                href="/about"
                className="text-sm font-bold text-[#76AC6D] hover:text-[#a5d177] transition"
                style={{
                  WebkitTextStroke: "0.20px #a5d177",
                }}
              >
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
