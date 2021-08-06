import React from "react";

type ButtonProps = {
  type: string;
  className?: string | null;
  children?: string | null;
  ariaLabel:string;
};

function Button(props: ButtonProps) {
  const classe =   `${props.className} ${
    props.type == "primary"
      ? "bg-yellow-500 border-yellow-500 border-2  rounded-sm text-sm text-white"
      : "bg-transparent border-yellow-500 border-2  rounded-sm text-sm text-yellow-500"
  }`
  
  return <button className={classe} aria-label={props.ariaLabel}>{props.children}</button>;
}

export default Button;
