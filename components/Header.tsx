"use client";

import MainPhoto from "./MainPhoto";

export default function Header() {
  return (
    <section
      className="flex flex-col md:flex-row items-center gap-0 mb-10 mt-3 text-[#5d8057] rounded-[10rem] bg-gradient-to-br from-white/90 via-[#FDFFF9]/30 to-[#d6e3b8]/40 
      backdrop-blur-4xl"
    >
      <MainPhoto />
      <div>
        <h1
          className="text-4xl font-bold mt-3 mb-5"
          style={{
            color: "#76AC6D",
            fontFamily: "'Poppins', sans-serif",
            textShadow: "0 2px 3px #00000033, 0 0 5px #ffffff4c",
          }}
        >
          David Fragrances Collection
        </h1>

        <p
          className="max-w-3xl text-gray leading-relaxed text-xl"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          <strong className="block font-bold mb-7 text-[#a5d177] text-[1.4rem]">
            Perfume has been my passion since I was a teenager.
          </strong>

          <span className="block font-bold mb-3">
            Growing up on a Wild Island, the scents of the Earth and Sea shaped
            me.
          </span>

          <em className="block mb-4 italic">
            The smell of wet soil after rain, the salt in the air, the flowers
            blooming along the shore, every fragrance was a story, a memory, a
            moment I could hold.
            <br className="mb-3" />
            Perfume became more than a fragrance, it became a language, a way to
            capture the world around me, and carry it with me everywhere.
            <br className="mb-3" />
            <span>
              Each scent in my collection is inspired by memories, places, and
              fleeting moments, taking you on a journey through my fragrance
              world.
            </span>
          </em>
        </p>
      </div>
    </section>
  );
}
