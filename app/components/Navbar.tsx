import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import { NavEnum } from "./Navigation";

interface Props {
  searchParams?: any;
  selected: NavEnum;
}
const Navbar = (props: Props) => {
  return (
    <div className="flex align-middle justify-between w-full h-28 bg-white px-10">
      <Logo />
      <Navigation selected={props.selected} />
    </div>
  );
};

export default Navbar;
