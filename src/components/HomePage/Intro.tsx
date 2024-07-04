import React from "react";
import Image from "next/image";
import introWoman from "../../../public/introWoman.png";
import introChain from "../../../public/introChain.png";

const Intro = () => {
  return (
    <section className="flex flex-col md:flex-row md:justify-between p-3 md:p-20  bg-backLuxury-blur bg-opacity-0">
      <div className="text-center md:text-left w-full md:w-2/5 py-8 md:py-20 px-4 md:px-10">
        <h1 className="font-bricolage font-semibold text-3xl md:text-6xl mb-4 leading-tight md:leading-wider">
          Elegance at its peak
        </h1>
        <p className="mb-6 text-base font-normal leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna.
        </p>
        <button className="border-2 border-black rounded-full py-3 px-6 font-semibold text-lg hover:bg-black hover:text-white transition duration-300">
          SHOP NOW
        </button>
      </div>
      <div className="w-full md:w-3/6 sm:px-36 h-[24rem] md:h-[36rem] mt-8 md:mt-0 px-4 md:px-0">
        <div className="relative w-full h-full ">
          <Image
            src={introChain}
            width={200}
            className="absolute bottom-0 left-0 h-3/4  w-auto object-cover md:w-full md:max-w-[18rem] rounded-lg shadow-lg "
            alt="Elegant jewelry piece"
          />
          <Image
            src={introWoman}
            width={2000}
            className="absolute top-0 right-0 h-2/3 md:h-auto w-auto md:w-full md:max-w-[18rem] object-cover rounded-lg shadow-lg"
            alt="Stylish accessory showcase"
          />
        </div>
      </div>
    </section>
  );
};

export default Intro;
