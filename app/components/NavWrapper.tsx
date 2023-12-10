import React from "react";
import Navbar from "./Navbar";
import { NavEnum } from "./Navigation";

interface Props {
  children: React.ReactNode;
  selected: NavEnum;
}

const NavWrapper = (props: Props) => {
  return (
    <div className="w-screen">
      <Navbar selected={props.selected} />
      {props.children}
    </div>
  );
};

export default NavWrapper;
