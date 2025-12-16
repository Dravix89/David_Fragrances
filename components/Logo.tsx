import Image from "next/image";
import LogoImage from "../public/logos/NavLogo.png";

export default function Logo() {
  return (
    <div className="h-12 w-auto relative">
      <Image
        src={LogoImage}
        alt="David_Fragrances"
        width={90}
        height={50}
        style={{ objectFit: "contain" }}
        // className="drop-shadow-[0_1px_1px_rgb(106,127,156)]"
      />
    </div>
  );
}
