"use client";

export default function MainPhoto() {
  return (
    <div
      style={{
        width: "40%",
        maxWidth: "280px",
        aspectRatio: "280/350",
        backgroundImage: "url(/images/profil.png)",
        backgroundPosition: "center",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundColor: "transparent",
        margin: "0 auto",
      }}
    ></div>
  );
}
