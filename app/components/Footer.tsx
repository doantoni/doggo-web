import React from "react";
import Image from "next/image";
import Contact from "./Contact";

const Footer = () => {
  return (
    <div className="h-[1408px] relative flex flex-col-reverse ">
      <Image width={1440} height={943} src="/footer.png" alt="snoopy footer" />
      <div className="h-full w-full bg-gradient-to-t from-footer" />
      <Contact />
    </div>
  );
};

export default Footer;
