import React from "react";

type CardProps = {
  src: string;
  alt: string;
  title: string;
  subtitle: string;
};

export default function Card(props: CardProps) {
  return (
    <div className="flex gap-8">
      <img className="w-6 h-6 font-semibold" src={props.src} alt={props.alt} />
      <div className="flex flex-1 flex-col gap-4">
        <h4 className="text-green-200 text-lg font-semibold">{props.title}</h4>
        <p className="text-indigo-400 text-sm">{props.subtitle}</p>
      </div>
    </div>
  );
}
