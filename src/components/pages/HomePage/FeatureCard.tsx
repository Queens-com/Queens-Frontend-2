import Image, { StaticImageData } from "next/image";
import React from "react";

type SelectFeatureCards = {
  image: StaticImageData;
  imageAlt: string;
  description: string;
  title: string;
};

const FeatureCard = ({
  image,
  imageAlt,
  description,
  title,
}: SelectFeatureCards) => {
  return (
    <div>
      <div className="grid items-center justify-items-center my-2 px-5 py-6">
        <Image src={image} className="mb-5" alt={imageAlt} />

        <h4 className="font-semibold text-center text-xl mb-1">{title}</h4>
        <p className="leading-tight text-center text-base font-normal">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
