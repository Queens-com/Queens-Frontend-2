"use client";
import React, { useState } from "react";

export default function WhiteList() {
  const [order, setOrders] = useState([]);

  if (order.length < 1) {
    return (
      <div className="text-center space-y-3 text-sm py-10">
        <p className="md:text-3xl text-xl font-bold">Your Wishlish is empty!</p>
        <p className="text-[#8D8D8D]">
          Add your favourite items and share them
        </p>
      </div>
    );
  }

  return (
    <main>
      <div>hi</div>
    </main>
  );
}
