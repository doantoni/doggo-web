import React from "react";
import NavigationElementBottomLine from "./NavigationElementBottomLine";
import Link from "next/link";

interface Props {
  children: React.ReactNode;
  isSelected?: boolean;
  onClick?: () => void;
  href: string;
}

const NavigationElement = (props: Props) => {
  return (
    <Link
      href={props.href}
      onClick={props.onClick}
      className="my-auto flex flex-col gap-1 text-2xl font-bold cursor-pointer "
    >
      {props.children}
      {props.isSelected && <NavigationElementBottomLine />}
    </Link>
  );
};

export default NavigationElement;
