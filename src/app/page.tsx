"use client";

import Header from "../../components/Header";
import BackToTopButton from "../../components/BackToTopButton";
import { springFragrances } from "./data/spring-fragrances";
import { summerFragrances } from "./data/summer-fragrances";
import { fallFragrances } from "./data/fall-fragrances";
import { winterFragrances } from "./data/winter-fragrances";
import Link from "next/link";

export default function Home() {
  const firstSpring = springFragrances[0];
  if (!firstSpring) return <p>No Spring fragrance available.</p>;

  const firstSummer = summerFragrances[0];
  if (!firstSummer) return <p>No Summer fragrance available.</p>;

  const firstFall = fallFragrances[0];
  if (!firstFall) return <p>No Fall fragrance available.</p>;

  const firstWinter = winterFragrances[0];
  if (!firstWinter) return <p>No Winter fragrance available.</p>;

  return (
    <main className="max-w-5xl mx-auto p-6 font-sans text-[#5d8057]">
      {/* Header */}
      <Header />

      {/* Spring */}
      <section className="mb-10 mt-20 text-[#5d8057]">
        <h1
          className="text-3xl sm:text-4xl font-bold mb-6 text-center sm:text-left"
          style={{ color: "#76AC6D" }}
        >
          Spring Fragrances
        </h1>

        <div className="flex flex-col sm:flex-row items-center gap-6 bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition duration-300">
          {firstSpring.logo && (
            <img
              src={firstSpring.logo}
              alt={firstSpring.title}
              className="w-40 h-40 sm:w-60 sm:h-60 object-contain rounded-full mx-auto sm:mx-0"
            />
          )}

          <div className="flex-1 text-center sm:text-left">
            <h3
              className="text-lg sm:text-xl font-bold mb-1"
              style={{ color: "#a5d177" }}
            >
              {firstSpring.title}
            </h3>
            <p className="text-[#5d8057] mb-1 text-xl font-semibold">
              Brand : {firstSpring.brand}
            </p>
            <p className="text-[#5d8057] mb-1 text-xl font-semibold">
              Launched In : {firstSpring.launched}
            </p>
            <p className="text-[#5d8057] mb-3 text-xl font-semibold">
              Perfumers : {firstSpring.perfumers}
            </p>

            {firstSpring.notes && (
              <div
                className="text-[#8f9e65] mb-4 text-base sm:text-xl p-3 rounded-md hover:shadow-md transition-shadow duration-300 bg-[#f9fcf6]"
                style={{ boxShadow: "0 3px 4px #a6d17748" }}
              >
                <ul className="pl-3">
                  {firstSpring.notes.map((note, i) => (
                    <li key={i} className="break-words">
                      {note}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {firstSpring.description && (
              <p className="text-[#5d8057] mb-1 text-xl">
                {firstSpring.description}
              </p>
            )}
          </div>
        </div>

        <div className="text-center mt-6">
          <Link
            href="/spring"
            className="inline-block px-6 py-3 rounded-full text-white font-semibold 
            shadow-md bg-[#76AC6D] hover:bg-[#a5d177] transition"
          >
            All Spring Fragrances →
          </Link>
        </div>
      </section>

      {/* Summer */}
      <section className="mb-10 mt-20 text-[#5d8057]">
        <h1
          className="text-3xl sm:text-4xl font-bold mb-6 text-center sm:text-left"
          style={{ color: "#76AC6D" }}
        >
          Summer Fragrances
        </h1>

        <div className="flex flex-col sm:flex-row items-center gap-6 bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition duration-300">
          {firstSummer.logo && (
            <img
              src={firstSummer.logo}
              alt={firstSummer.title}
              className="w-40 h-40 sm:w-60 sm:h-60 object-contain rounded-full mx-auto sm:mx-0"
            />
          )}

          <div className="flex-1 text-center sm:text-left">
            <h3
              className="text-lg sm:text-xl font-bold mb-1"
              style={{ color: "#a5d177" }}
            >
              {firstSummer.title}
            </h3>
            <p className="text-[#5d8057] mb-1 text-xl font-semibold">
              Brand : {firstSummer.brand}
            </p>
            <p className="text-[#5d8057] mb-1 text-xl font-semibold">
              Launched In : {firstSummer.launched}
            </p>
            <p className="text-[#5d8057] mb-3 text-xl font-semibold">
              Perfumers : {firstSummer.perfumers}
            </p>

            {firstSummer.notes && (
              <div
                className="text-[#8f9e65] mb-4 text-base sm:text-xl p-3 rounded-md hover:shadow-md transition-shadow duration-300 bg-[#f9fcf6]"
                style={{ boxShadow: "0 3px 4px #a6d17748" }}
              >
                <ul className="pl-3">
                  {firstSummer.notes.map((note, i) => (
                    <li key={i} className="break-words">
                      {note}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {firstSummer.description && (
              <p className="text-[#5d8057] mb-1 text-xl">
                {firstSummer.description}
              </p>
            )}
          </div>
        </div>

        <div className="text-center mt-6">
          <Link
            href="/summer"
            className="inline-block px-6 py-3 rounded-full text-white font-semibold 
            shadow-md bg-[#76AC6D] hover:bg-[#a5d177] transition"
          >
            All Summer Fragrances →
          </Link>
        </div>
      </section>

      {/* Fall */}
      <section className="mb-10 mt-20 text-[#5d8057]">
        <h1
          className="text-3xl sm:text-4xl font-bold mb-6 text-center sm:text-left"
          style={{ color: "#76AC6D" }}
        >
          Fall Fragrances
        </h1>

        <div className="flex flex-col sm:flex-row items-center gap-6 bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition duration-300">
          {firstFall.logo && (
            <img
              src={firstFall.logo}
              alt={firstFall.title}
              className="w-40 h-40 sm:w-60 sm:h-60 object-contain rounded-full mx-auto sm:mx-0"
            />
          )}

          <div className="flex-1 text-center sm:text-left">
            <h3
              className="text-lg sm:text-xl font-bold mb-1"
              style={{ color: "#a5d177" }}
            >
              {firstFall.title}
            </h3>
            <p className="text-[#5d8057] mb-1 text-xl font-semibold">
              Brand : {firstFall.brand}
            </p>
            <p className="text-[#5d8057] mb-1 text-xl font-semibold">
              Launched In : {firstFall.launched}
            </p>
            <p className="text-[#5d8057] mb-3 text-xl font-semibold">
              Perfumers : {firstFall.perfumers}
            </p>

            {firstFall.notes && (
              <div
                className="text-[#8f9e65] mb-4 text-base sm:text-xl p-3 rounded-md hover:shadow-md transition-shadow duration-300 bg-[#f9fcf6]"
                style={{ boxShadow: "0 3px 4px #a6d17748" }}
              >
                <ul className="pl-3">
                  {firstFall.notes.map((note, i) => (
                    <li key={i} className="break-words">
                      {note}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {firstFall.description && (
              <p className="text-[#5d8057] mb-1 text-xl">
                {firstFall.description}
              </p>
            )}
          </div>
        </div>

        <div className="text-center mt-6">
          <Link
            href="/fall"
            className="inline-block px-6 py-3 rounded-full text-white font-semibold 
            shadow-md bg-[#76AC6D] hover:bg-[#a5d177] transition"
          >
            All Fall Fragrances →
          </Link>
        </div>
      </section>

      {/* Winter */}
      <section className="mb-10 mt-20 text-[#5d8057]">
        <h1
          className="text-3xl sm:text-4xl font-bold mb-6 text-center sm:text-left"
          style={{ color: "#76AC6D" }}
        >
          Winter Fragrances
        </h1>

        <div className="flex flex-col sm:flex-row items-center gap-6 bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition duration-300">
          {firstWinter.logo && (
            <img
              src={firstWinter.logo}
              alt={firstWinter.title}
              className="w-40 h-40 sm:w-60 sm:h-60 object-contain rounded-full mx-auto sm:mx-0"
            />
          )}

          <div className="flex-1 text-center sm:text-left">
            <h3
              className="text-lg sm:text-xl font-bold mb-1"
              style={{ color: "#a5d177" }}
            >
              {firstWinter.title}
            </h3>
            <p className="text-[#5d8057] mb-1 text-xl font-semibold">
              Brand : {firstWinter.brand}
            </p>
            <p className="text-[#5d8057] mb-1 text-xl font-semibold">
              Launched In : {firstWinter.launched}
            </p>
            <p className="text-[#5d8057] mb-3 text-xl font-semibold">
              Perfumers : {firstWinter.perfumers}
            </p>

            {firstWinter.notes && (
              <div
                className="text-[#8f9e65] mb-4 text-base sm:text-xl p-3 rounded-md hover:shadow-md transition-shadow duration-300 bg-[#f9fcf6]"
                style={{ boxShadow: "0 3px 4px #a6d17748" }}
              >
                <ul className="pl-3">
                  {firstWinter.notes.map((note, i) => (
                    <li key={i} className="break-words">
                      {note}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {firstWinter.description && (
              <p className="text-[#5d8057] mb-1 text-xl">
                {firstWinter.description}
              </p>
            )}
          </div>
        </div>

        <div className="text-center mt-6">
          <Link
            href="/winter"
            className="inline-block px-6 py-3 rounded-full text-white font-semibold 
            shadow-md bg-[#76AC6D] hover:bg-[#a5d177] transition"
          >
            All Winter Fragrances →
          </Link>
        </div>
      </section>

      <BackToTopButton />
    </main>
  );
}
