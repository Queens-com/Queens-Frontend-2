"use client";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CiCamera } from "react-icons/ci";
import { MdLocationPin } from "react-icons/md";
import Image from "next/image";
import React, { useState } from "react";
import SingleProfile from "./Profile";
import Orders from "./Orders";
import WhiteList from "./WhiteList";
import { useSession } from "next-auth/react";
import { getInitials } from "@/lib/utils";

export default function Profile() {
  const { data } = useSession();
  const [label, setLabel] = useState("personal");
  const tabItems = [
    {
      component: <SingleProfile />,
      key: "profile",
      label: "my profile",
      title: "profile",
    },
    {
      component: <Orders />,
      key: "orders",
      label: "orders",
      title: "orders",
    },
    {
      component: <WhiteList />,
      key: "wishlist",
      label: "wishlist",
      title: "wishlist",
    },
  ];
  return (
    <main className="font-bricolage">
      <header className="flex flex-col justify-center items-center">
        <div className="w-full relative ">
          <Image
            src="/profile.png"
            width={800}
            height={700}
            className="w-full lg:h-[20rem] sm:h-[15rem] h-[10rem] object-cover "
            alt="profile"
          />
          <div className="absolute top-[60%] md:top-[70%] z-30 transform -translate-x-1/2 left-1/2 border rounded-full border-black">
            <Avatar className="lg:w-[13rem] lg:h-[13rem] sm:w-[10rem] sm:h-[10rem] h-[7rem] w-[7rem] bg-white border-black">
              <AvatarImage src={""} />
              <AvatarFallback className="text-black flex items-center justify-center text-center w-full h-full md:text-6xl text-4xl">
                {data?.user ? getInitials(data.user) : "AA"}
              </AvatarFallback>
            </Avatar>
            <div className="absolute lg:bottom-10 lg:right-2 right-0 bottom-5 sm:right-3 bg-white">
              <CiCamera />
            </div>
          </div>
        </div>
        <p className="capitalize font-bold md:text-3xl sm:text-2xl text-xl lg:mt-32 sm:mt-28 mt-16">
          {data?.user?.first_name} {data?.user?.last_name}
        </p>
        <div className="flex items-center capitalize md:text-sm text-xs text-[#8D8D8D] mt-2">
          <MdLocationPin />
          <p>{data?.user?.country}</p>
        </div>
      </header>
      <section className="mt-10">
        <Tabs defaultValue={tabItems[0].key} className="">
          <TabsList className="flex justify-center items-center bg-white border-b gap-2  capitalize w-full">
            {tabItems.map((item) => {
              return (
                <TabsTrigger
                  key={item.key}
                  value={item.key}
                  className={`capitalize text-xs md:text-sm data-[state=active]:bg-black data-[state=active]:rounded-t-md  data-[state=active]:text-white md:w-[10rem] w-[5rem]`}
                  onClick={() => setLabel(item.title)}
                >
                  {item.title}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {tabItems.map((item) => {
            return (
              <TabsContent key={item.key} value={item.key} className="">
                {item.component}
              </TabsContent>
            );
          })}
        </Tabs>
      </section>
    </main>
  );
}
