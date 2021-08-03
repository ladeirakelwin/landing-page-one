import Image, {ImageProps} from "next/image";
import React from "react";


type CardProps = {
  src: string;
  alt: string;
  title: string;
  subtitle: string;
  type: number;
};

export default function Card(props: CardProps) {
  return props.type ? (
    <div className="flex gap-8">
            <img className="w-6 h-6 font-semibold" src={props.src} alt={props.alt}/>

      <div className="flex flex-1 flex-col gap-4">
        <h4 className="base-card-title">{props.title}</h4>
        <p className="base-card-description">{props.subtitle}</p>
      </div>
    </div>
  ) : (
    <div className="flex gap-4 flex-col w-5/6  mx-auto">
      <img className="w-6 h-6 font-semibold" src={props.src} alt={props.alt}/>
      <div className="flex flex-1 flex-col gap-2">
        <h4 className="base-card-title">{props.title}</h4>
        <p className="base-card-description">{props.subtitle}</p>
      </div>
    </div>
  );
}
