import React from "react";
type FooterMenuProps = {

  title: string;
}
export default function FooterMenu(props: FooterMenuProps) {
  return (
    <ul>
      <li>{props.title}</li>
      <li>First Page</li>
      <li>Second Page</li>
      <li>Third Page</li>
      <li>Fourth Page</li>
    </ul>
  );
}
