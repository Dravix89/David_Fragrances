"use client";

import Image from "next/image";
import React from "react";
import BackToTopButton from "../../../components/BackToTopButton";

export default function AboutPage() {
  return (
    <main className="max-w-5xl mx-auto p-2 font-sans text-[#5d8057]">
      {/* Header */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#76AC6D] mb-4">About</h1>
        <p className="text-[#5d8057] mb-1 text-xl max-w-2xl mx-auto">
          Welcome to my scented space — a place where fragrances tell stories,
          where each scent awakens a memory, an emotion, an identity.
        </p>
      </section>

      {/* Image + texte  */}
      <section className="flex flex-col md:flex-row items-center gap-6 bg-gray-50 p-3 rounded-2xl shadow-[0_3px_4px_#a6d17748]">
        <div className="">
          {" "}
          <Image
            src="/images/about0.png"
            alt="Flacon de parfum"
            width={180}
            height={180}
            className="rounded-xl object-cover"
          />{" "}
        </div>

        <div className="flex-1">
          <h2 className="text-2xl font-semibold text-[#a5d177] mb-3">
            The Story Behind My Collection
          </h2>
          <p className="text-[#5d8057] mb-0 text-xl leading-relaxed">
            I have always been fascinated by the world of perfume. <br /> To me,
            a fragrance is not just a scent, it is an invisible emotion, a
            unique imprint.
            <br />
            <br />
            This space is dedicated to sharing the perfumes I love, highlighting
            the artistry and the stories behind each fragrance. <br /> It is an
            invitation to explore, to discover, and to connect with others who
            share the same passion for scent.
          </p>
        </div>
      </section>

      {/* My Philosophy */}
      <section className="mt-40 text-center">
        <h2 className="text-2xl font-semibold text-[#a5d177] mb-6">
          My Philosophy
        </h2>
        <p className="text-[#5d8057] mb-1 text-xl max-w-4xl mx-auto leading-relaxed">
          Perfume is an intimate signature.
          <br />
          I like to believe that behind every scent lies a personality, an era,
          an intention.
          <br />
          This space celebrates the subtle beauty of scent and invites you to
          explore my collection.
        </p>
      </section>

      {/* Text */}
      <section className=" text-[#8f9e65] mb-15 text-xl mt-16 text-center italic">
        <p>— David Fragrances | My Perfume Collection</p>
      </section>
      <BackToTopButton />
    </main>
  );
}
