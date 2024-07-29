"use client";
import { ImageGallery } from "@/components/ImageGallery";
import { CiHeart, CiShare2, CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import React, { useState } from "react";
import Link from "next/link";
import { routes } from "@/config/routes";
import Product from "./Product";
import { ProductType } from "@/types";
import NewArrivals from "./NewArrivals";
import { addCart } from "@/config/cart";
import { snackbar } from "@/components/Toaster";

interface SinglePageProp {
  product: ProductType;
}

export default function SinglePages({ product }: SinglePageProp) {
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const addToCart = async () => {
    setLoading(true);
    try {
      if (product) {
        addCart(product?.reference, product?.category, quantity);
      }
    } catch (err) {
      snackbar.error({
        description: "An error occurred while adding cart",
        message: "Cart Error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="">
      <section className="flex md:flex-row flex-col md:justify-between gap-4">
        <div className="md:w-1/2">
          <ImageGallery images={product.images} />
        </div>
        <div className="md:w-1/2 space-y-4">
          <header className="space-y-3">
            <p className="text-3xl font-bold capitalize">{product.name}</p>
            <div className="flex justify-between items-center">
              <p className="font-bold text-2xl">
                {product.price.currency}
                {product.price.original_price}
              </p>
              {/* <p>compare prices</p> */}
            </div>
          </header>
          <article className="space-y-4 py-5  border-y-[0.1px]">
            <p className="text-sm ">{product.description}</p>
            <div className="flex justify-between items-center">
              {/* <p className="text-xs">{product.reviews} Reviews</p> */}
              <div className="flex gap-2 items-center text-xl">
                <CiHeart className="cursor-pointer" />
                <CiShare2 className="cursor-pointer" />
              </div>
            </div>
          </article>
          <article className=" py-5 pb-10 space-y-8 border-b-[0.1px]">
            <div className="flex justify-between items-center">
              <p className="text-sm">Quantity</p>
              <div className="flex gap-4 items-center text-xl">
                <CiCirclePlus
                  className="cursor-pointer"
                  onClick={handleIncrease}
                />
                <p className="text-sm w-10 text-center">{quantity}</p>
                <CiCircleMinus
                  className="cursor-pointer"
                  onClick={handleDecrease}
                />
              </div>
            </div>
            <div className="flex gap-4 justify-between items-center">
              <button className="text-sm w-full p-2 bg-black text-white rounded-2xl">
                Buy Now
              </button>
              <button
                onClick={() => addToCart()}
                className="text-sm w-full p-2 border rounded-2xl border-black"
              >
                {loading ? "Adding..." : "Add to cart"}
              </button>
            </div>
          </article>
          <article className="py-5 space-y-4">
            <p className="text-sm font-semibold">
              Product Id: <span className="font-normal">{product.id}</span>
            </p>
            <p className="text-sm font-semibold">
              Category:{" "}
              <span className="font-normal capitalize">{product.category}</span>
            </p>
            <p className="text-sm font-semibold">
              Delivery: <span className="font-normal">{""}</span>
            </p>
          </article>
        </div>
      </section>
      <section className="flex md:flex-row flex-col gap-16 mt-10">
        <div className="flex flex-col gap-3 min-w-[11rem]">
          <button className={`uppercase font-semibold p-2 text-left text-sm`}>
            Product Details
          </button>
          <button
            className={`uppercase font-semibold text-left p-2 text-sm ${"bg-black text-white"}`}
          >
            Materials And care
          </button>
          <button className={`uppercase font-semibold p-2  text-left text-sm`}>
            Reviews
          </button>
        </div>
        <div className="text-sm space-y-3 mt-2">
          {/* <p>{product.material.title}</p>
          <p>{product.material.care}</p> */}
        </div>
      </section>
      <section className="mt-16 sm:px-6 md:px-14">
        <NewArrivals />
      </section>
    </main>
  );
}
