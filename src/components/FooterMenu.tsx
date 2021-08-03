import React from "react";
type FooterMenuProps = {

  title: string;
}
export default function FooterMenu(props: FooterMenuProps) {
  return (
    <ul className="flex gap-4 text-white flex-col w-full text-center md:text-left ">
      <li className="font-bold mb-2">{props.title}</li>
      <li className="text-sm md:text-base">First Page</li>
      <li className="text-sm md:text-base">Second Page</li>
      <li className="text-sm md:text-base">Third Page</li>
      <li className="text-sm md:text-base">Fourth Page</li>
    </ul>
  );
}
