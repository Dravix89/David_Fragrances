"use client";

import React from "react";
import BackToTopButton from "../../../components/BackToTopButton";
import { fallFragrances } from "../data/fall-fragrances";

export default function FallPage() {
  return (
    <main className="max-w-screen-5xl mx-auto px-6 sm:px-12 lg:px-16 py-5 text-[#5d8057] font-sans">
      <h1
        className="text-3xl sm:text-4xl font-bold text-center sm:text-left mb-6"
        style={{ color: "#76AC6D" }}
      >
        Fall Fragrances
      </h1>

      {/* Fragrances */}
      <section className="mb-6 space-y-15">
        {fallFragrances.map((fragrance, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row items-center sm:items-start gap-3 rounded-xl p-3 sm:p-3 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white"
          >
            {/* Logo */}
            {fragrance.logo && (
              <img
                src={fragrance.logo}
                alt={`${fragrance.title} logo`}
                className="w-40 h-40 sm:w-60 sm:h-60 object-contain rounded-full"
              />
            )}

            {/* Infos */}
            <div className="flex-1 text-center sm:text-left bg-[#f4f7f4] p-3 rounded-lg text-[#5d8057]">
              <h3
                className="text-lg sm:text-xl font-bold mb-1"
                style={{ color: "#a5d177" }}
              >
                {fragrance.title}
              </h3>
              <p className="mb-0 text-lg font-semibold">
                Brand : {fragrance.brand}
              </p>
              <p className="mb-0 text-lg font-semibold">
                Launched In : {fragrance.launched}
              </p>
              <p className="mb-2 text-lg font-semibold">
                Perfumers : {fragrance.perfumers}
              </p>

              {fragrance.notes && (
                <div
                  className="mb-2 p-2 rounded-md hover:shadow-md transition-shadow duration-300 text-[#8f9e65] bg-[#FDFFF9] font-semibold "
                  style={{ boxShadow: "0 3px 4px #a6d17748" }}
                >
                  <ul className="pl-0">
                    {fragrance.notes.map((note, i) => (
                      <li key={i}>{note}</li>
                    ))}
                  </ul>
                </div>
              )}

              {fragrance.description && (
                <p className="text-lg whitespace-pre-line">
                  {fragrance.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </section>

      <BackToTopButton />
    </main>
  );
}
