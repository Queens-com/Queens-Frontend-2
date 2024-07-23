import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import Image from "next/image";
import React from "react";

export default function Profile() {
  return (
    <main className="p-3 lg:px-14 md:px-10">
      <header>
        <div className="w-full relative">
          <Image
            src="/profile.png"
            width={800}
            height={700}
            className="w-full lg:h-[20rem] sm:h-[15rem] h-[10rem] object-cover"
            alt="profile"
          />
          <div className="absolute top-[60%] md:top-[70%] transform -translate-x-1/2 left-1/2 ">
            <Avatar className=" bg-black lg:w-[13rem] lg:h-[13rem] sm:w-[10rem] sm:h-[10rem] h-[7rem] w-[7rem] text-white ">
              <AvatarImage src={""} />
              <AvatarFallback className="text-white">JA</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>
    </main>
  );
}
