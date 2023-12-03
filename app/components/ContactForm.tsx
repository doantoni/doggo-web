import React from "react";

const ContactForm = () => {
  return (
    <div>
      <div className="flex gap-3">
        <input
          className="w-full h-10 border border-lightGray rounded-lg px-2"
          type="text"
          placeholder="Ime"
        />
        <input
          className="w-full h-10 border border-lightGray rounded-lg px-2"
          type="text"
          placeholder="Prezime"
        />
      </div>
      <textarea
        className="w-full h-32 border border-lightGray rounded-lg px-2 mt-3 pt-2"
        placeholder="Poruka"
      />
    </div>
  );
};

export default ContactForm;
