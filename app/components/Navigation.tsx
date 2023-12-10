import React from "react";
import NavigationElement from "./NavigationElement";

export enum NavEnum {
  NASLOVNA = "Naslovna",
  PROGRAMI = "Programi",
  SAVJETI = "Savjeti",
  GALERIJA = "Galerija",
  KONTAKT = "Kontakt",
}

export const NavigationElements = [
  NavEnum.NASLOVNA,
  NavEnum.PROGRAMI,
  NavEnum.SAVJETI,
  NavEnum.GALERIJA,
  NavEnum.KONTAKT,
];

interface Props {
  selected: NavEnum;
}

const Navigation = (props: Props) => {
  return (
    <div className="h-full w-1/2 flex align-middle justify-between">
      {NavigationElements.map((element) => {
        return (
          <NavigationElement
            href={`/${
              element === NavEnum.NASLOVNA ? "" : element.toLowerCase()
            }`}
            isSelected={props.selected === element}
            key={`nav-element-${element}`}
          >
            {element}
          </NavigationElement>
        );
      })}
    </div>
  );
};

export default Navigation;
