import React from "react";
import H5 from "./Typography/H5";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import Button from "./Button";

const Contact = () => {
  return (
    <div className="w-[773px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-3/4 flex flex-col gap-16">
      <H5 className="text-center font-light tracking-widest">
        KONTAKTIRAJ NAS
      </H5>
      <ContactInfo />
      <ContactForm />
      <Button className="mx-auto">Pošalji upit</Button>
    </div>
  );
};

export default Contact;
