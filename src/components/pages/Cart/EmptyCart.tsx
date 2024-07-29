import React from "react";
import NewArrivals from "../Stores/NewArrivals";

export default function EmptyCart() {
  return (
    <main>
      <header className="text-center">
        <p className="text-xl font-bold">No items yet!</p>
        <p className="text-sm text-gray-400">
          Continue shopping to explore more.
        </p>
      </header>
      <NewArrivals />
    </main>
  );
}
