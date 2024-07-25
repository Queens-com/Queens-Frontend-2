import React, { useState } from "react";

export default function Orders() {
  const [order, setOrders] = useState([]);
  return (
    <main className="bg-[#F5F5F5]">
      <section className="p-3 lg:px-14 md:px-10 space-y-10">
        <div>
          {order && order.length ? (
            <p>hi</p>
          ) : (
            <div className="space-y-4">
              <header>
                <p className="text-xl md:text-2xl font-bold font-bricolage ">
                  Current Order
                </p>
              </header>
              <div className="text-center py-10 bg-white ">
                <p className="text-gray-500 text-sm">
                  No current orders available
                </p>
              </div>
            </div>
          )}
        </div>
        <div>
          {order && order.length ? (
            <p>hi</p>
          ) : (
            <div className="space-y-4">
              <header>
                <p className="text-xl md:text-2xl font-bold font-bricolage capitalize">
                  My purchase history
                </p>
              </header>
              <div className="text-center py-10 bg-white ">
                <p className="text-gray-500 text-sm">
                  No current orders available
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
