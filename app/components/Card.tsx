import React from "react";

interface Props {
  children: React.ReactNode;
}

const Card = (props: Props) => {
  return (
    <div className="p-8 w-full h-full border rounded-3xl border-primary shadow-card overflow-y-auto">
      {props.children}
    </div>
  );
};

export default Card;
