"use client";
import Image from "next/image";
import React, { useState } from "react";

interface ImageGalleryProp {
  images: string[];
}

export const ImageGallery = ({ images }: ImageGalleryProp) => {
  console.log(images);
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="flex flex-col items-center">
      <div className="w-full h-[32rem] mb-4">
        <Image
          width={800}
          height={800}
          src={selectedImage}
          alt="Selected"
          className="object-cover w-full h-full shadow-md"
        />
      </div>
      <div className="grid grid-cols-4 gap-2 w-full shrink">
        {images.map((image, index) => (
          <Image
            width={100}
            height={200}
            key={index}
            src={image}
            alt={`Thumbnail ${index}`}
            onClick={() => setSelectedImage(image)}
            className={`cursor-pointer shrink w-auto  h-[10rem] object-cover border hover:brightness-90 ${
              selectedImage === image ? "border-black" : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
};
