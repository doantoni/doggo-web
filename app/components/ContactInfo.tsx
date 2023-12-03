import React from "react";
import P from "./Typography/P";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-3 align-middle justify-center">
      <P className="font-bold mt-0 text-center p-0">Karlo Nikolić</P>
      <P className="mt-0 text-center p-0">099 456982 323</P>
      <P className="mt-0 text-center p-0">karlo_nikolic@net.hr</P>
    </div>
  );
};

export default ContactInfo;
