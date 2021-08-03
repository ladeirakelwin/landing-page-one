import React from "react";
type FooterMenuProps = {

  title: string;
}
export default function FooterMenu(props: FooterMenuProps) {
  return (
    <ul className="flex gap-4 text-white flex-col w-full text-center md:text-left ">
      <li className="font-bold mb-2">{props.title}</li>
      <li>First Page</li>
      <li>Second Page</li>
      <li>Third Page</li>
      <li>Fourth Page</li>
    </ul>
  );
}
