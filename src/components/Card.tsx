import React from "react";

type CardProps = {
  src: string;
  alt: string;
  title: string;
  subtitle: string;
};

export default function Card(props: CardProps) {
  return (
    <div>
      <img src={props.src} alt={props.alt} />
      <div>
        <h4>{props.title}</h4>
        <p>{props.subtitle}</p>
      </div>
    </div>
  );
}
