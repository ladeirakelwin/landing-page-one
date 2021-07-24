import React from "react";

type YellowFontProps = {
  children: string;
  className?: string;
};

export default function YellowFont(props: YellowFontProps) {
  const classes = `${props.className} text-yellow-500`;
  return <span className={classes}>{props.children}</span>;
}
