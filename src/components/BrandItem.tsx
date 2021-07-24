import React from "react";

type BrandItemProps = {
  src?: string | null;
  alt?: string | null;
};

export default function BrandItem(props: BrandItemProps) {

  return (
    <li>
      <img {...props} className="w-20 h-6" />
    </li>
  );
}

 
