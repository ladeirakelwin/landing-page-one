import React from "react";

type BrandItemProps = {
  src?: string | null;
  alt?: string | null;
};

export default function BrandItem(props: BrandItemProps) {

  return (
    <li className="flex justify-center">
      <img {...props} className="w-20 h-6" />
    </li>
  );
}

 
